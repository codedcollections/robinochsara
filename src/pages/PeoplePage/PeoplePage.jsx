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
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th></th>
                <th>Namn</th>
                <th>Label</th>
                <th>Grupp</th>
                <th>Skickat svar</th>
                <th>Tillåt nytt svar</th>
                <th>Radera</th>
              </tr>
            </thead>
            <tbody>
              {sortedGuests.map((guest) => (
                <tr key={guest.id}>
                  <td>{guest.id}</td>
                  <td>
                    <button
                      onClick={() => setGuestToUpdate(JSON.stringify(guest))}
                    >
                      <GrEdit />
                    </button>
                  </td>
                  <td>{guest.name}</td>
                  <td>{guest.label}</td>
                  <td>{guest.group ? "Ja" : "Nej"}</td>
                  <td>{guest.submitted ? "Ja" : "Nej"}</td>
                  <td>
                    {guest.submitted && (
                      <button
                        onClick={() => {
                          if (
                            window.confirm(
                              `Bekräfta nytt svar för ${guest.name}?`,
                            )
                          ) {
                            AllowSecondAnswer(guest.id)
                          }
                        }}
                      >
                        Tillåt nytt svar
                      </button>
                    )}
                  </td>
                  <td>
                    <button
                      onClick={() => handleDelete(guest)}
                      className="deletebuttonstyle"
                    >
                      {guest.name}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p>Inga gäster på listan än.</p>
        )}
      </div>
    </div>
  )
}
export default PeoplePage
