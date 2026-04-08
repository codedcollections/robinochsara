import s from "./Speech.module.css"
import { useState } from "react"

const Speech = () => {
  const [formData, setFormData] = useState({
    namn: "",
    kontakt: "",
    andraDeltagare: "",
    riktning: "",
    typ: "",
    ovrigtTyp: "",
    beskrivning: "",
    tid: "",
    forberedelser: [],
    ovrigtForberedelser: "",
    presentation: "",
    lat: "",
    ovrigtInfo: "",
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleCheckboxChange = (e) => {
    const { value, checked } = e.target

    setFormData((prev) => {
      if (checked) {
        return {
          ...prev,
          forberedelser: [...prev.forberedelser, value],
        }
      } else {
        return {
          ...prev,
          forberedelser: prev.forberedelser.filter((v) => v !== value),
        }
      }
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("Form data:", JSON.stringify(formData))
  }

  return (
    <div id={s["speech"]} className="flex flex-down">
      <h2>Anmälan till Tal eller Spex</h2>

      <p>
        Vill man hålla tal eller göra ett litet spex av något slag under
        middagen så är det självklart väldigt välkommet! Allt man behöver göra
        är att förbereda och anmäla sitt tal eller spex till toastmasters i god
        tid innan bröllopet enligt formuläret nedan.
      </p>
      <p>
        Anmälan kommer gå via Toastmasters Marcus och Linnéa. Kontaktuppgifter
        behövs i de fall de behöver komma i kontakt med dig innan bröllopet.
      </p>
      <div className={s.aboutspeech}>
        <p>Vi vill undvika roasts av brudparet.</p>
        <p>Senaste anmälningsdagen är 1 augusti.</p>
        <p>* Anger obligatorisk fråga</p>
      </div>

      <form
        id={s["speechform"]}
        onSubmit={handleSubmit}
        className="flex flex-down"
      >
        {/* Namn */}
        <label htmlFor="namn">Namn *</label>
        <input
          id="namn"
          type="text"
          name="namn"
          value={formData.namn}
          onChange={handleChange}
          required
          placeholder="Ditt svar"
        />

        {/* Kontakt */}
        <label htmlFor="kontakt">E-post eller telefonnummer *</label>
        <input
          id="kontakt"
          type="text"
          name="kontakt"
          value={formData.kontakt}
          onChange={handleChange}
          required
          placeholder="Ditt svar"
        />

        {/* Andra deltagare */}
        <label htmlFor="andraDeltagare">
          Namn på andra deltagare om ni är flera
        </label>
        <input
          id="andraDeltagare"
          type="text"
          name="andraDeltagare"
          value={formData.andraDeltagare}
          onChange={handleChange}
          placeholder="Ditt svar"
        />

        {/* Riktning */}
        <fieldset>
          <legend>Vem riktar du dig främst till? *</legend>

          {["Brudparet", "Bruden", "Brudgummen", "Alla"].map((option) => (
            <div key={option}>
              <input
                id={`riktning-${option}`}
                type="radio"
                name="riktning"
                value={option}
                checked={formData.riktning === option}
                onChange={handleChange}
                required
              />
              <label htmlFor={`riktning-${option}`}>{option}</label>
            </div>
          ))}
        </fieldset>

        {/* Typ */}
        <fieldset>
          <legend>Jag/vi vill... *</legend>

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
                name="typ"
                value={option}
                checked={formData.typ === option}
                onChange={handleChange}
                required
              />
              <label htmlFor={`typ-${option}`}>{option}</label>
            </div>
          ))}

          <div>
            <input
              id="typ-ovrigt"
              type="radio"
              name="typ"
              value="Övrigt"
              checked={formData.typ === "Övrigt"}
              onChange={handleChange}
            />
            <label htmlFor="typ-ovrigt">Övrigt: </label>
            <input
              type="text"
              name="ovrigtTyp"
              value={formData.ovrigtTyp}
              onChange={handleChange}
            />
          </div>
        </fieldset>

        {/* Beskrivning */}
        <label htmlFor="beskrivning">
          Beskriv ditt tal eller spex lite kort *
        </label>
        <textarea
          className={s.ovrigt}
          id="beskrivning"
          name="beskrivning"
          value={formData.beskrivning}
          onChange={handleChange}
          required
          placeholder="Ditt svar"
        />

        {/* Tid */}
        <fieldset>
          <legend>Uppskattad tidsåtgång? *</legend>

          {["1-5 min", "5-10 min", "10-15 min"].map((option) => (
            <div key={option}>
              <input
                id={`tid-${option}`}
                type="radio"
                name="tid"
                value={option}
                checked={formData.tid === option}
                onChange={handleChange}
                required
              />
              <label htmlFor={`tid-${option}`}>{option}</label>
            </div>
          ))}
        </fieldset>

        {/* Förberedelser */}
        <fieldset>
          <legend>Behövs några förberedelser?</legend>

          {["Släckta lampor", "Musik", "Bildspel"].map((option) => (
            <div key={option}>
              <input
                id={`forb-${option}`}
                type="checkbox"
                value={option}
                checked={formData.forberedelser.includes(option)}
                onChange={handleCheckboxChange}
              />
              <label htmlFor={`forb-${option}`}>{option}</label>
            </div>
          ))}

          <p>
            Bildspel, det finns tillgång till projektor men kom ihåg att det
            inte alltid syns bra i dagsljus
          </p>

          <div>
            <input
              id="forb-ovrigt"
              type="checkbox"
              value="Övrigt"
              checked={formData.forberedelser.includes("Övrigt")}
              onChange={handleCheckboxChange}
            />
            <label htmlFor="forb-ovrigt">Övrigt: </label>
            <input
              type="text"
              name="ovrigtForberedelser"
              value={formData.ovrigtForberedelser}
              onChange={handleChange}
            />
          </div>
        </fieldset>

        {/* Presentation */}
        <label htmlFor="presentation">Hur vill du bli presenterad?</label>
        <input
          id="presentation"
          type="text"
          name="presentation"
          value={formData.presentation}
          onChange={handleChange}
          placeholder="Ditt svar"
        />

        {/* Låt */}
        <label htmlFor="lat">
          Vilken låt ska spelas i samband med presentation?
        </label>
        <small>Kom ihåg att inte så mycket av låten kommer hinna spelas</small>
        <input
          id="lat"
          type="text"
          name="lat"
          value={formData.lat}
          onChange={handleChange}
          placeholder="Ditt svar"
        />

        {/* Övrigt */}
        <label htmlFor="ovrigtInfo">Är det något mer TMs behöver veta?</label>
        <textarea
          id="ovrigtInfo"
          name="ovrigtInfo"
          value={formData.ovrigtInfo}
          onChange={handleChange}
          placeholder="Ditt svar"
        />

        <button type="reset" className={s.resetbtn}>
          Rensa formuläret
        </button>
        <button type="submit" className={s.submitbtn}>
          Skicka
        </button>
      </form>
    </div>
  )
}

export default Speech
