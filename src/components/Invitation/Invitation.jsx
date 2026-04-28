import { useState, useEffect } from "react"
import s from "./Invitation.module.css"
import GuestsForm from "../GuestsForm/GuestsForm"
import list from "../../data/list.js"

const Invitiation = () => {
  const [chosenRsvp, setChosenRsvp] = useState("")
  const [renderAmount, setRenderAmount] = useState("")
  const [namesList, setnamesList] = useState([])
  const [currentIndex, setCurrentIndex] = useState(0)
  const [showGuests, setShowGuests] = useState(false)
  useEffect(() => {
    if (Number(chosenRsvp) > 0) {
      const people = list.find((people) => people.id === Number(chosenRsvp))
      const nameArray = people.names
      if (nameArray.length === 0) {
        setnamesList([people.label])
      } else {
        setnamesList(people.names)
      }
    }
  }, [chosenRsvp])

  const handleNext = () => {
    setCurrentIndex((prev) => {
      const newIndex = prev + 1
      // If we've gone past the last person, reset the dropdown and index
      if (newIndex > namesList.length - 1) {
        setChosenRsvp("")
        return 0
      }
      return newIndex
    })
  }

  return (
    <div id={s["invitation"]}>
      <h2>OSA</h2>
      <p>
        I formuläret nedan kan ni anmäla er till bröllopet. Välj ert sällskap
        och därefter fyller ni i informationen per person. Vid ändringar av er
        anmälan, kontakta någon av brudparet.
      </p>
      <p className={s.rsvpDeadline}>
        Sista dagen att svara på inbjudan är{" "}
        <span className={s.latestReply}>30 juni</span>,
      </p>
      <p>men gör det gärna tidigare.</p>
      <p className={s.selectHint}>välj ett sällskap</p>
      <select
        className={`buttonstyle`}
        value={chosenRsvp}
        onChange={(e) => setChosenRsvp(e.target.value)}
      >
        <option className={`buttonstyle`} key="firstchoice" value="0">
          OSA för...
        </option>
        {list.map((people) => (
          <option key={people.id} value={people.id}>
            {people.label}
          </option>
        ))}
      </select>
      {Number(chosenRsvp) !== 0 && (
        <GuestsForm
          isVisible={!showGuests}
          name={namesList[currentIndex]}
          onNext={handleNext}
        />
      )}
    </div>
  )
}
export default Invitiation
