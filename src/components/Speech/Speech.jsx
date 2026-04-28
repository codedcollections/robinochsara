import s from "./Speech.module.css"
import SpeechForm from "../SpeechForm/SpeechForm"
import { useState } from "react"

const Speech = () => {
  const [showSpeech, setShowSpeech] = useState(false)

  return (
    <div id={s["speech"]} className="flex flex-down">
      <h2>Anmälan till Tal eller Spex</h2>
      <div className={`flex flex-down ${s.speechInfo} `}>
        <p>
          Vill man hålla tal eller göra ett litet spex av något slag under
          middagen så är det självklart väldigt välkommet! Allt man behöver göra
          är att förbereda och anmäla sitt tal eller spex till toastmasters i
          god tid innan bröllopet enligt formuläret nedan. Vid ett sånt här
          kärleksfullt tillfälle får man gärna dela med dig av roliga minnen och
          lyckönskningar medan roast och liknande inte är lika lämpligt.
        </p>
        <p>
          Anmälan kommer skickas till våra Toastmasters Marcus och Linnéa.
          Kontaktuppgifter behövs i de fall de behöver komma i kontakt med dig
          innan bröllopet.
        </p>
      </div>

      <div className={s.aboutspeech}>
        <p>
          Senaste anmälningsdagen är{" "}
          <span className={s.latestReply}>1 augusti</span>.
        </p>
      </div>
      <button
        className={`buttonstyle ${s.showspeechbtn}`}
        onClick={() => {
          setShowSpeech(!showSpeech)
        }}
      >
        {!showSpeech ? <>Visa formulär</> : <>Göm formulär</>}
      </button>
      {showSpeech && <SpeechForm showSpeech={showSpeech} />}
    </div>
  )
}

export default Speech
