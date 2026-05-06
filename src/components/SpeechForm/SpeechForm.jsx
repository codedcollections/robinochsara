import { useState, useEffect } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { onSpeeches, sendSpeeches } from "../../api.js"
import s from "./SpeechForm.module.css"

const speechSchema = z.object({
  presentation: z.string().optional(),
  forberedelser: z.array(z.string()).optional().default([]),
  ovrigtForberedelser: z.string().optional(),
  namn: z.string().min(1, "Namn krävs"),
  kontakt: z.string().min(1, "Kontaktuppgift krävs"),
  typ: z.string().min(1, "Välj ett alternativ"),
  ovrigtTyp: z.string().optional(),
  riktning: z.string().min(1, "Välj ett alternativ"),
  tid: z.string().min(1, "Uppskattad tidsåtgång krävs"),
  beskrivning: z.string().min(1, "Beskrivning krävs"),
  ovrigtInfo: z.string().optional(),
  website: z.string().optional(),
})

const SpeechForm = ({ showSpeech }) => {
  const [shouldRender, setShouldRender] = useState(showSpeech)
  const [isVisible, setIsVisible] = useState(false)
  const [step, setStep] = useState(1)
  const [speeches, setSpeeches] = useState([])

  const {
    register,
    handleSubmit,
    watch,
    trigger,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(speechSchema),
    defaultValues: {
      presentation: "",
      forberedelser: [],
      ovrigtForberedelser: "",
      namn: "",
      kontakt: "",
      typ: "",
      ovrigtTyp: "",
      riktning: "",
      tid: "",
      beskrivning: "",
      ovrigtInfo: "",
      website: "",
    },
  })

  useEffect(() => {
    if (showSpeech) {
      setShouldRender(true)
      setTimeout(() => setIsVisible(true), 10)
    }
  }, [showSpeech])

  useEffect(() => {
    const unsubscribe = onSpeeches("1234", setSpeeches)
    return () => unsubscribe()
  }, [])

  useEffect(() => {
    if (isVisible) {
      const element = document.getElementById("speechform")
      const navbarHeight = 80

      if (element) {
        const y =
          element.getBoundingClientRect().top + window.scrollY - navbarHeight

        window.scrollTo({ top: y, behavior: "smooth" })
      }
    }
  }, [isVisible])

  const formValues = watch()

  const handleNext = async () => {
    const stepFields = {
      1: ["typ", "riktning", "beskrivning", "tid"],
      2: ["namn", "kontakt"],
      3: ["forberedelser"],
    }

    const isValid = await trigger(stepFields[step] ?? [])
    if (isValid) {
      setStep((prev) => Math.min(prev + 1, 4))
    }
  }

  const handleBack = () => {
    setStep((prev) => Math.max(prev - 1, 1))
  }

  const onSubmit = async (data) => {
    if (data.website) {
      return
    }

    await sendSpeeches(data)
    reset()
    setStep(1)
    alert("Ditt tal eller spex har registrerats!")
  }

  if (!shouldRender) return null

  return (
    <div
      id="speechform"
      className={`flex flex-down ${s.fadeSlideUp} ${s.formContainer} ${isVisible ? s.show : ""}`}
    >
      <p className={s.starsign}>* Anger obligatorisk fråga</p>
      <form
        id={s["speechform"]}
        className={`flex flex-down`}
        onSubmit={handleSubmit(onSubmit)}
      >
        <input
          type="text"
          {...register("website")}
          style={{ display: "none" }}
          autoComplete="off"
        />

        {step === 1 && (
          <div className={`flex flex-down flex-align-start ${s.formDivider}`}>
            <div>
              {" "}
              <fieldset className={`${s.questionDiv}`}>
                <legend className={s.clearLabel}>Jag/vi vill... *</legend>

                {[
                  "Hålla ett tal",
                  "Spela en låt",
                  "Göra ett spex",
                  "Hålla i en lek",
                ].map((option) => (
                  <div key={option}>
                    <input
                      id={`typ-${option}`}
                      type="radio"
                      value={option}
                      {...register("typ")}
                    />
                    <label htmlFor={`typ-${option}`}>{option}</label>
                  </div>
                ))}

                <div>
                  <input
                    id="typ-ovrigt"
                    type="radio"
                    value="Övrigt"
                    {...register("typ")}
                  />
                  <label htmlFor="typ-ovrigt">Övrigt: </label>
                  <input
                    type="text"
                    {...register("ovrigtTyp")}
                    placeholder="Ditt svar"
                  />
                </div>
                {errors.typ && (
                  <span className={s.error}>{errors.typ.message}</span>
                )}
              </fieldset>
            </div>

            <div>
              <fieldset>
                <legend className={s.clearLabel}>
                  Vem riktar du dig främst till? *
                </legend>

                {["Brudparet", "Bruden", "Brudgummen", "Alla"].map((option) => (
                  <div key={option}>
                    <input
                      id={`riktning-${option}`}
                      type="radio"
                      value={option}
                      {...register("riktning")}
                    />
                    <label htmlFor={`riktning-${option}`}>{option}</label>
                  </div>
                ))}
                {errors.riktning && (
                  <span className={s.error}>{errors.riktning.message}</span>
                )}
              </fieldset>
            </div>

            <div>
              <label className={s.clearLabel} htmlFor="beskrivning">
                Beskriv ditt tal eller spex lite kort *
              </label>
              <textarea
                className={s.ovrigt}
                id="beskrivning"
                {...register("beskrivning")}
                placeholder="Ditt svar"
              />
              {errors.beskrivning && (
                <span className={s.error}>{errors.beskrivning.message}</span>
              )}
            </div>

            <div>
              <fieldset>
                <legend className={s.clearLabel}>
                  Uppskattad tidsåtgång? *
                </legend>

                <p className={s.textInForm}>
                  (Öva gärna talet hemma och fyll i ungefärlig tid därefter)
                </p>

                {["1-5 min", "5-10 min", "10-15 min"].map((option) => (
                  <div key={option}>
                    <input
                      id={`tid-${option}`}
                      type="radio"
                      value={option}
                      {...register("tid")}
                    />
                    <label htmlFor={`tid-${option}`}>{option}</label>
                  </div>
                ))}
                {errors.tid && (
                  <span className={s.error}>{errors.tid.message}</span>
                )}
              </fieldset>
            </div>

            {/*             <div>
              <label className={s.clearLabel} htmlFor="lat">
                Finns det en låt du/ni vill ska spelas?
              </label>
              <p className={s.explanation}>
                Kom ihåg att inte så mycket av låten kommer hinna spelas
              </p>
              <input
                id="lat"
                type="text"
                {...register("lat")}
                placeholder="Ditt svar"
              />
            </div> */}

            <div className={`flex ${s.buttonGroup}`}>
              <button type="button" onClick={handleNext}>
                Nästa
              </button>
            </div>
          </div>
        )}

        {step === 2 && (
          <div className={`flex flex-down flex-align-start ${s.formDivider}`}>
            <div>
              <label className={s.clearLabel} htmlFor="namn">
                Namn *
              </label>
              <input
                id="namn"
                type="text"
                {...register("namn")}
                placeholder="Ditt svar"
              />
              {errors.namn && (
                <span className={s.error}>{errors.namn.message}</span>
              )}
            </div>

            <div>
              <label className={s.clearLabel} htmlFor="presentation">
                Hur vill du/ni presenteras?
              </label>
              <input
                id="presentation"
                type="text"
                {...register("presentation")}
                placeholder="Ditt svar"
              />
            </div>

            <div>
              <label className={s.clearLabel} htmlFor="kontakt">
                E-post eller telefonnummer *
              </label>
              <input
                id="kontakt"
                type="text"
                {...register("kontakt")}
                placeholder="Ditt svar"
              />
              {errors.kontakt && (
                <span className={s.error}>{errors.kontakt.message}</span>
              )}
            </div>
            {/*             <div>
              <label className={s.clearLabel} htmlFor="andraDeltagare">
                Namn på andra deltagare om ni är flera
              </label>
              <input
                id="andraDeltagare"
                type="text"
                {...register("andraDeltagare")}
                placeholder="Ditt svar"
              />
            </div> */}
            <div className={`flex ${s.buttonGroup}`}>
              <button type="button" onClick={handleBack}>
                Bakåt
              </button>
              <button type="button" onClick={handleNext}>
                Nästa
              </button>
            </div>
          </div>
        )}

        {step === 3 && (
          <div className={`flex flex-down flex-align-start ${s.formDivider}`}>
            <div>
              <fieldset>
                <legend className={s.clearLabel}>
                  Behövs några förberedelser?
                </legend>

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

                <p className={s.textInForm}>
                  (Bildspel, det finns tillgång till projektor men kom ihåg att
                  det inte alltid syns bra i dagsljus)
                </p>

                <div>
                  <input
                    id="forb-ovrigt"
                    type="checkbox"
                    value="Övrigt"
                    {...register("forberedelser")}
                  />
                  <label htmlFor="forb-ovrigt">Övrigt: </label>
                  <input
                    type="text"
                    {...register("ovrigtForberedelser")}
                    placeholder="Ditt svar"
                  />
                </div>
              </fieldset>
            </div>

            <div>
              <label className={s.clearLabel} htmlFor="ovrigtInfo">
                Är det något mer TMs behöver veta?
              </label>
              <textarea
                id="ovrigtInfo"
                {...register("ovrigtInfo")}
                placeholder="Ditt svar"
              />
            </div>
            <div className={`flex ${s.buttonGroup}`}>
              <button type="button" onClick={handleBack}>
                Bakåt
              </button>
              <button type="submit" className={`buttonstyle`}>
                Skicka
              </button>
            </div>
          </div>
        )}

        {/*         {step === 4 && (
          <div className={`flex flex-down flex-align-start ${s.formDivider}`}>
            <div className={`flex ${s.buttonGroup}`}>
              <button type="button" onClick={handleBack}>
                Bakåt
              </button>

            </div>
          </div>
        )} */}
      </form>
    </div>
  )
}

export default SpeechForm
