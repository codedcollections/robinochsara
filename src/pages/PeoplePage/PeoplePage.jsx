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
import { IoReload } from "react-icons/io5"
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
      <div className={"s.introToBtns"}>
        <p>
          <GrEdit size={10} className={`${s.explainBtns} ${s.updateBtn}`} />{" "}
          uppdatera information
        </p>
        <p>
          <MdDelete
            size={10}
            className={`${s.explainBtns} ${s.deleteGuestBtn}`}
          />{" "}
          radera gäst
        </p>
        <p>
          {" "}
          <IoReload
            size={10}
            className={`${s.explainBtns} ${s.allowBtn}`}
          />{" "}
          får skicka OSA igen
        </p>
      </div>

      <form action=""></form>
      <div className={s.peopletablediv}>
        {sortedGuests.length > 0 ? (
          <div className={`flex flex-down`}>
            {sortedGuests.map((guest) => (
              <div key={guest.id} className={s.guestlistGrid}>
                <div className={`flex ${s.guestCard}`}>
                  <p>{guest.label}</p>
                </div>
                <div className={`flex ${s.guestCard}`}>
                  <p>{guest.name}</p>
                </div>
                <div className={`flex ${s.cardButtons}`}>
                  <button
                    onClick={() => setGuestToUpdate(JSON.stringify(guest))}
                    className={`${s.updateBtn}`}
                  >
                    <GrEdit size={10} />
                  </button>
                  <button
                    onClick={() => handleDelete(guest)}
                    className={`${s.deleteGuestBtn}`}
                  >
                    <MdDelete size={10} />
                  </button>
                  {guest.submitted && (
                    <button
                      onClick={() => AllowSecondAnswer(guest.id)}
                      className={`${s.allowBtn}`}
                    >
                      <IoReload size={10} />
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
