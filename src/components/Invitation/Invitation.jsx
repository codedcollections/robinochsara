import React, { useState, useEffect } from "react"
import { db } from "../../firebase"
import { ref, onValue } from "firebase/database"
import GuestForm from "../GuestForm/GuestForm"
import s from "./Invitation.module.css"

const Invitation = () => {
  const [guestList, setGuestList] = useState([])
  const [filteredLabels, setFilteredLabels] = useState([])
  const [chosenLabel, setChosenLabel] = useState("")
  const [chosenPerson, setChosenPerson] = useState(null)
  const [showPersonSelect, setShowPersonSelect] = useState(false)
  const [peopleInGroup, setPeopleInGroup] = useState([])
  const [showForm, setShowForm] = useState(false)

  // Subscribe to guest list in real-time
  useEffect(() => {
    const guestListRef = ref(db, "guestlist")
    const unsubscribe = onValue(guestListRef, (snapshot) => {
      const data = snapshot.val() || {}
      const guestsArray = Object.values(data) // Convert object to array
      setGuestList(guestsArray)

      // Update labels whenever the guest list changes
      const labels = [...new Set(guestsArray.map((g) => g.label))].sort()
      setFilteredLabels(labels)
    })

    // Cleanup subscription on unmount
    return () => unsubscribe()
  }, [])

  const handleLabelChange = (event) => {
    const selectedLabel = event.target.value
    setChosenLabel(selectedLabel)
    setChosenPerson(null) // Reset the chosen person whenever label changes
    setShowForm(false)

    // Get all guests with specific label
    const guestsWithLabel = guestList.filter(
      (guest) => guest.label === selectedLabel,
    )

    // Check if any of them are a group
    const isGroup = guestsWithLabel.some((guest) => guest.group === true)

    if (isGroup) {
      setShowPersonSelect(true)
      setPeopleInGroup(guestsWithLabel)
    } else {
      setShowPersonSelect(false)
      setChosenPerson(guestsWithLabel[0]) // Only one person, automatically select
      setShowForm(true)
    }
  }

  const handlePersonChange = (event) => {
    const selectedName = event.target.value
    const person = peopleInGroup.find((guest) => guest.name === selectedName)
    setChosenPerson(person)
    setShowForm(true)
  }

  const handleFormNext = () => {
    // Reset the form and go back to person selection
    setShowForm(false)
    setChosenPerson(null)
    setChosenLabel("")
  }
  //if all guests for a certain label has submitted answer return true
  const isLabelDisabled = (label) => {
    const guestsWithLabel = guestList.filter((guest) => guest.label === label)
    return guestsWithLabel.every((guest) => guest.submitted === true)
  }

  return (
    <div id={s["invitation"]} className="flex flex-down">
      <h2>OSA</h2>
      <p>
        Anmälan görs i formuläret nedan. Välj ert sällskap och person, därefter
        fyller ni i informationen. Vänligen anmäl även om ni inte kan komma. Vid
        ändringar av er anmälan, kontakta någon av brudparet.
      </p>
      <p className={s.rsvpDeadline}>
        Sista dagen att svara på inbjudan är{" "}
        <span className={s.latestReply}>30 juni</span>, men gör det gärna
        tidigare.
      </p>
      <p className={s.selectHint}>välj ett sällskap</p>
      <div className={`flex flex-down ${s.selectGuestBtn}`}>
        <select
          value={chosenLabel}
          onChange={handleLabelChange}
          className={`buttonstyle`}
        >
          <option value="">Svara för...</option>
          {filteredLabels.map((label) => (
            <option key={label} value={label} disabled={isLabelDisabled(label)}>
              {label} {isLabelDisabled(label) ? "(har svarat)" : ""}
            </option>
          ))}
        </select>
        {/* only shows if a group is chosen */}
        {showPersonSelect && (
          <select
            value={chosenPerson?.name || ""}
            onChange={handlePersonChange}
            className={`buttonstyle`}
          >
            <option value="">Välj gäst...</option>
            {peopleInGroup.map((guest) => (
              <option
                key={guest.id}
                value={guest.name}
                disabled={guest.submitted} // Disable if submitted
              >
                {guest.name.split(" ")[0]}{" "}
                {guest.submitted ? "(har svarat)" : ""}
              </option>
            ))}
          </select>
        )}
      </div>
      {/* when a specific person has been chosen show form  */}
      {showForm && chosenPerson && (
        <GuestForm
          person={JSON.stringify(chosenPerson)}
          onNext={handleFormNext}
          setChosenPerson={setChosenPerson}
          setShowPersonSelect={setShowPersonSelect}
        />
      )}
    </div>
  )
}

export default Invitation
