import { useState, useEffect } from "react"
import { onGuestlist } from "../../api"
import s from "./PeoplePage.module.css"
import { AllowSecondAnswer } from "../../utils/addToGuestDb"
import { useNavigate } from "react-router-dom"
import { IoCaretBackOutline } from "react-icons/io5"

const PeoplePage = () => {
  const [guestlist, setGuestlist] = useState([])
  const navigate = useNavigate()
  /*   const timerRef = useRef(null) */

  useEffect(() => {
    const unsubscribe = onGuestlist("1234", setGuestlist)
    return () => unsubscribe()
  }, [])

  const sortedGuests = [...guestlist].sort((a, b) => a.id - b.id)

  return (
    <div id={s["peoplepage"]}>
      <button onClick={() => navigate(`/${import.meta.env.VITE_ANSWER}`)}>
        <IoCaretBackOutline />
      </button>
      <h2>Gästlista</h2>
      <form action=""></form>
      <div className={s.peopletablediv}>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Namn</th>
              <th>Label</th>
              <th>Grupp</th>
              <th>Skickat svar</th>
            </tr>
          </thead>

          <tbody>
            {sortedGuests.map((guest) => (
              <tr key={guest.id}>
                <td>{guest.id}</td>
                <td>{guest.name}</td>
                <td>{guest.label}</td>
                <td>{guest.group ? "Ja" : "Nej"}</td>
                <td>{guest.submitted ? "Ja" : "Nej"}</td>
                <td>
                  {guest.submitted && (
                    <button onClick={() => AllowSecondAnswer(guest.id)}>
                      Tillåt nytt svar
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
export default PeoplePage
