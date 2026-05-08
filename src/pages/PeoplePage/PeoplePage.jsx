import { useState, useEffect } from "react"
import { onGuestlist } from "../../api"
import s from "./PeoplePage.module.css"
import {
  AllowSecondAnswer,
  deleteFromGuestDb,
} from "../../utils/firebaseFunctions.js"
import { useNavigate } from "react-router-dom"
import { IoCaretBackOutline } from "react-icons/io5"
import { GrEdit } from "react-icons/gr"
import { MdDelete } from "react-icons/md"
import AddGuestForm from "../../components/AddGuestForm/AddGuestForm"
import UpdateGuestForm from "../../components/UpdateGuestForm/UpdateGuestForm.jsx"

const PeoplePage = () => {
  const [guestlist, setGuestlist] = useState([])
  const [guestToUpdate, setGuestToUpdate] = useState()
  const navigate = useNavigate()

  useEffect(() => {
    const unsubscribe = onGuestlist("1234", setGuestlist)
    return () => unsubscribe()
  }, [])

  const sortedGuests = [...guestlist].sort(
    (a, b) =>
      (a.label || "").localeCompare(b.label || "") ||
      (a.name || "").localeCompare(b.name || ""),
  )

  const handleDelete = (guest) => {
    if (window.confirm(`Radera ${guest.name}?`)) {
      deleteFromGuestDb(guest.id)
    }
  }

  return (
    <div id={s["peoplepage"]} className={`wrapper`}>
      <button onClick={() => navigate(`/${import.meta.env.VITE_ANSWER}`)}>
        <IoCaretBackOutline />
      </button>
      <h2>Gästlista</h2>

      <AddGuestForm guestlist={guestlist} />
      {guestToUpdate && (
        <UpdateGuestForm
          guest={guestToUpdate}
          onClose={() => setGuestToUpdate(null)}
        />
      )}

      <form action=""></form>
      <div className={s.peopletablediv}>
        {sortedGuests.length > 0 ? (
          <div className={s.guestList}>
            {sortedGuests.map((guest) => (
              <div key={guest.id} className={s.guestCard}>
                <p>
                  <strong>Label:</strong> {guest.label}
                </p>
                <p>
                  <strong>Namn:</strong> {guest.name}
                </p>

                <p>
                  <strong>Grupp:</strong> {guest.group ? "Ja" : "Nej"}
                </p>
                <p>
                  <strong>Skickat svar:</strong>{" "}
                  {guest.submitted ? "Ja" : "Nej"}
                </p>
                <p>
                  <strong>ID:</strong> {guest.id}
                </p>
                <div className={`flex ${s.cardButtons}`}>
                  <button
                    onClick={() => setGuestToUpdate(JSON.stringify(guest))}
                    className={`${s.updateBtn}`}
                  >
                    <GrEdit size={30} />
                  </button>
                  <button
                    onClick={() => handleDelete(guest)}
                    className={`${s.deleteGuestBtn}`}
                  >
                    <MdDelete size={30} />
                  </button>
                  {guest.submitted && (
                    <button
                      onClick={() => AllowSecondAnswer(guest.id)}
                      className={`${s.allowBtn}`}
                    >
                      Tillåt nytt svar
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p>Inga gäster på listan än.</p>
        )}
      </div>
    </div>
  )
}
export default PeoplePage
