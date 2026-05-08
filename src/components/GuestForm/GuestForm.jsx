import { useState, useEffect } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import {
  guestSchema,
  attendingLabels,
  rideLabels,
} from "../../models/guestSchema"
import s from "./GuestForm.module.css"
import { sendRsvps } from "../../api.js"
import { updateGuestDb } from "../../utils/firebaseFunctions.js"
import { toast } from "react-toastify"
import { IoMdCloseCircle } from "react-icons/io"
import { FaCheckCircle } from "react-icons/fa"

const translateRsvpData = (data) => ({
  ...data,
  attending: attendingLabels[data.attending] ?? data.attending,
  ride: Array.isArray(data.ride)
    ? data.ride.map((item) => rideLabels[item] ?? item)
    : data.ride,
})

const GuestForm = ({
  person,
  onNext,
  setChosenPerson,
  setShowPersonSelect,
}) => {
  const readPerson = person ? JSON.parse(person) : { name: "" }
  const [step, setStep] = useState(1)

  const {
    register,
    handleSubmit,
    trigger,
    watch,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(guestSchema),
    defaultValues: {
      foodPreference: [],
      ride: [],
      name: readPerson.name, // Register the full name
      lastname: "",
    },
  })

  const attendingValue = watch("attending")

  // Logic to handle "Next" button
  const handleNext = async () => {
    const fieldsToValidate =
      step === 1 ? ["name", "lastname", "email", "attending"] : []
    const isValid = await trigger(fieldsToValidate)

    if (isValid) {
      // If user is not attending, skip the rest and submit
      if (step === 1 && attendingValue === "notattending") {
        handleSubmit(onSubmit)()
      } else if (step === 1 && attendingValue === "weddingonly") {
        handleSubmit(onSubmit)()
      } else {
        setStep((prev) => prev + 1)
      }
    }
  }

  useEffect(() => {
    if (person) {
      const element = document.getElementById("guestform")
      const navbarHeight = 80

      if (element) {
        const y =
          element.getBoundingClientRect().top + window.scrollY - navbarHeight

        window.scrollTo({ top: y, behavior: "smooth" })
      }
    }
  }, [person])

  const onSubmit = async (data) => {
    const translatedData = {
      ...translateRsvpData(data),
      id: data.id,
    }
    try {
      await sendRsvps(translatedData)
      await updateGuestDb(data.id, { submitted: true })
      setChosenPerson("")
      setShowPersonSelect(false)
      toast.success(
        "Tack för ditt svar! Välj en annan gäst för att skicka in ett nytt svar",
        {
          autoClose: false,
          closeOnClick: true,
          closeButton: ({ closeToast }) => (
            <IoMdCloseCircle onClick={closeToast} color="#FFFBF8" size={50} />
          ),
          icon: <FaCheckCircle color="#FFFBF8" size={50} />,

          style: {
            fontFamily: "Alice",
            background: "#45594B",
            color: "#FFFBF8",
          },
          progressStyle: {
            background: "#809c89",
          },
        },
      )
      reset()
      setStep(1)
      onNext()
    } catch (error) {
      console.error("Error sending RSVP:", error)
      toast.error("Något gick fel. Försök igen senare.")
    }
  }

  return (
    <form
      id="guestform"
      onSubmit={handleSubmit(onSubmit)}
      className={`flex flex-down ${s.formContainer}`}
    >
      <div className={`flex ${s.rsvpPerson}`}>
        <h3>Svarar nu för {readPerson.name.split(" ")[0]} </h3>
      </div>

      {/* STEP 1: Basic Info */}
      {step === 1 && (
        <div className={`flex flex-down flex-align-start ${s.formDivider}`}>
          <input type="hidden" {...register("id")} value={readPerson.id} />
          <div className={`flex flex-down flex-align-start ${s.questionDiv}`}>
            <label className={s.clearLabel} htmlFor="name">
              Namn
            </label>
            <p>{readPerson.name.split(" ")[0]}</p>{" "}
            {/* Only display the first name */}
            <input
              type="hidden"
              {...register("name")}
              value={readPerson.name}
            />{" "}
          </div>

          <div className={`flex flex-down flex-align-start ${s.questionDiv}`}>
            <label className={s.clearLabel} htmlFor="lastname">
              Efternamn *
            </label>

            <input
              id="lastname"
              {...register("lastname")}
              placeholder="Ditt efternamn..."
            />

            {errors.lastname && (
              <span className={s.error}>{errors.lastname.message}</span>
            )}
          </div>

          <div className={`flex flex-down flex-align-start ${s.questionDiv}`}>
            <label className={s.clearLabel}>Vad kommer du delta på? *</label>
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
          </div>

          {attendingValue === "allday" || attendingValue === "weddingonly" ? (
            <div className={`flex flex-down flex-align-start ${s.questionDiv}`}>
              <label className={s.clearLabel} htmlFor="email">
                Mejladress *
              </label>
              <input {...register("email")} placeholder="Ditt svar..." />
              {errors.email && (
                <span className={s.error}>{errors.email.message}</span>
              )}
            </div>
          ) : null}

          <button
            type="button"
            className={
              attendingValue === "notattending" ||
              attendingValue === "weddingonly"
                ? "buttonstyle"
                : ""
            }
            onClick={handleNext}
          >
            {attendingValue === "notattending" ||
            attendingValue === "weddingonly"
              ? "Skicka"
              : "Nästa"}
          </button>
        </div>
      )}

      {/* STEP 2: Food Preferences */}
      {step === 2 && (
        <div className={`flex flex-down flex-align-start ${s.formDivider}`}>
          <div className={`flex flex-down flex-align-start ${s.questionDiv}`}>
            <label className={`flex-align-start ${s.clearLabel}`}>
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
            <label>Övrigt</label>
            <input {...register("otherFood")} placeholder="Ditt svar..." />
          </div>

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
          <div className={`flex flex-down flex-align-start ${s.questionDiv}`}>
            <label className={s.clearLabel}>Önskar du åka med på bussen?</label>

            <label>
              <input type="checkbox" {...register("ride")} value="fromchurch" />
              Från kyrkan till middagen
            </label>
            <label>
              <input type="checkbox" {...register("ride")} value="fromdinner" />
              Från middagen till efterfesten alt. Huddinge Station
            </label>
          </div>
          <div className={`flex ${s.buttonGroup}`}>
            <button type="button" onClick={() => setStep(2)}>
              Bakåt
            </button>
            <button type="submit" className={`buttonstyle`}>
              Skicka svar
            </button>
          </div>
        </div>
      )}
    </form>
  )
}

export default GuestForm
