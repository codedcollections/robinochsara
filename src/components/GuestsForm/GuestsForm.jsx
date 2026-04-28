import { useState, useEffect } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import s from "./GuestsForm.module.css"
import { sendRsvps } from "../../api.js"

const requiredText = "Du måste fylla i alla fält"
// 1. Define the Schema
const schema = z.object({
  name: z
    .string()
    .min(1, "För- och efternamn krävs")
    .regex(/^[a-zA-Zà-ÿÀ-ß ]+$/, "Ange för- och efternamn"),
  email: z.string().min(1, requiredText).email("Ogiltig mejladress"),
  attending: z
    .string()
    .min(1, requiredText)
    .nullable()
    .refine((val) => ["allday", "weddingonly", "notattending"].includes(val), {
      message: requiredText,
    }),
  // These are optional because they might be skipped or not filled
  foodPreference: z.array(z.string()).optional().default([]),
  otherFood: z.string().optional(),
  ride: z.array(z.string()).optional().default([]),
})

const attendingLabels = {
  allday: "hela dagen",
  weddingonly: "endast vigsel",
  notattending: "kan tyvärr inte komma",
}

const rideLabels = {
  fromchurch: "från kyrkan till middagen",
  fromdinner: "från middagen till efterfesten",
}

const translateRsvpData = (data) => ({
  ...data,
  attending: attendingLabels[data.attending] ?? data.attending,
  ride: Array.isArray(data.ride)
    ? data.ride.map((item) => rideLabels[item] ?? item)
    : data.ride,
})

const GuestsForm = ({ isVisible, name, onNext }) => {
  const [step, setStep] = useState(1)

  const {
    register,
    handleSubmit,
    trigger,
    watch,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      foodPreference: [],
      ride: [],
    },
  })

  const attendingValue = watch("attending")

  // Logic to handle "Next" button
  const handleNext = async () => {
    // Only validate fields for the current step
    const fieldsToValidate = step === 1 ? ["name", "email", "attending"] : []
    const isValid = await trigger(fieldsToValidate)

    if (isValid) {
      // If user is not attending, skip the rest and submit
      if (step === 1 && attendingValue === "notattending") {
        handleSubmit(onSubmit)()
      } else {
        setStep((prev) => prev + 1)
      }
    }
  }

  useEffect(() => {
    if (isVisible) {
      const element = document.getElementById("guestform")
      const navbarHeight = 80

      if (element) {
        const y =
          element.getBoundingClientRect().top + window.scrollY - navbarHeight

        window.scrollTo({ top: y, behavior: "smooth" })
      }
    }
  }, [isVisible, name])

  const onSubmit = async (data) => {
    const translatedData = translateRsvpData(data)
    console.log("Tack för ditt svar!")
    try {
      await sendRsvps(translatedData)
      alert("Tack för ditt svar!")
      reset()
      setStep(1)
      onNext()
    } catch (error) {
      console.error("Error sending RSVP:", error)
      alert("Det uppstod ett fel vid skickandet. Försök igen senare.")
    }
  }

  return (
    <form
      id="guestform"
      onSubmit={handleSubmit(onSubmit)}
      className={`flex flex-down ${s.formContainer}`}
    >
      <p>{name}</p>
      {/* STEP 1: Basic Info */}
      {step === 1 && (
        <div className={`flex flex-down flex-align-start ${s.formDivider} `}>
          <label htmlFor="name">För- och efternamn *</label>
          <input {...register("name")} placeholder="Ditt svar..." />
          {errors.name && (
            <span className={s.error}>{errors.name.message}</span>
          )}

          <label htmlFor="email">Mejladress *</label>
          <input {...register("email")} placeholder="Ditt svar..." />
          {errors.email && (
            <span className={s.error}>{errors.email.message}</span>
          )}

          <label>Vad kommer du delta på? *</label>
          <label>
            <input type="radio" {...register("attending")} value="allday" />{" "}
            Hela dagen!
          </label>
          <label>
            <input
              type="radio"
              {...register("attending")}
              value="weddingonly"
            />{" "}
            Endast vigseln
          </label>
          <label>
            <input
              type="radio"
              {...register("attending")}
              value="notattending"
            />{" "}
            Jag kommer tyvärr inte kunna delta alls
          </label>
          {errors.attending && (
            <span className={s.error}>{errors.attending.message}</span>
          )}

          <button type="button" onClick={handleNext}>
            {attendingValue === "notattending" ? "Skicka" : "Nästa"}
          </button>
        </div>
      )}

      {/* STEP 2: Food Preferences */}
      {step === 2 && (
        <div className={`flex flex-down flex-align-start ${s.formDivider}`}>
          <label className={`flex-align-start`}>
            Har du några allergier eller matpreferenser?
          </label>
          {[
            "gluten",
            "laktos",
            "pescetarian",
            "lakto-ovo-vegetarian",
            "vegan",
          ].map((pref) => (
            <div key={pref}>
              <input
                id={`food-${pref}`}
                type="checkbox"
                value={pref}
                {...register("foodPreference")}
              />
              <label htmlFor={`food-${pref}`}>{pref}</label>
            </div>
          ))}

          {["Släckta lampor", "Musik", "Bildspel"].map((option) => (
            <div key={option}>
              <input
                id={`forb-${option}`}
                type="checkbox"
                value={option}
                {...register("forberedelser")}
              />
              <label htmlFor={`forb-${option}`}>{option}</label>
            </div>
          ))}

          <label>Övrigt</label>
          <input {...register("otherFood")} placeholder="Ditt svar..." />

          <div className={`flex ${s.buttonGroup}`}>
            <button type="button" onClick={() => setStep(1)}>
              Bakåt
            </button>
            <button type="button" onClick={handleNext}>
              Nästa
            </button>
          </div>
        </div>
      )}

      {/* STEP 3: Ride */}
      {step === 3 && (
        <div
          className={`flex flex-down flex-align-start ${s.formDivider} ${s.lastOptions}`}
        >
          <label>Önskar du åka med på bussen?</label>

          <label>
            <input type="checkbox" {...register("ride")} value="fromchurch" />
            Från kyrkan till middagen
          </label>
          <label>
            <input type="checkbox" {...register("ride")} value="fromdinner" />
            Från middagen till efterfesten alt. Huddinge Station
          </label>

          <div className={`flex ${s.buttonGroup}`}>
            <button type="button" onClick={() => setStep(2)}>
              Bakåt
            </button>
            <button type="submit">Skicka svar</button>
          </div>
        </div>
      )}
    </form>
  )
}

export default GuestsForm
