import s from "./AddGuestForm.module.css"
import { useState } from "react"
import { db } from "../../firebase"
import { ref, set } from "firebase/database"
import { addGuestToDb } from "../../utils/firebaseFunctions.js"

const AddGuestForm = ({ guestlist }) => {
  const [formData, setFormData] = useState({
    name: "",
    label: "",
    group: false,
    submitted: false,
  })

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target

    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const highestId =
      guestlist.length > 0 ? Math.max(...guestlist.map((guest) => guest.id)) : 0

    const finalData = {
      ...formData,
      id: highestId + 1,
      submitted: false,
    }

    addGuestToDb(finalData)
    alert("Skickade iväg data för: " + finalData.name)
  }
  return (
    <div id={s["addGuestForm"]}>
      <h2>Lägg till gäst</h2>
      <form onSubmit={handleSubmit} className={`flex ${s.addGuestForm}`}>
        <div title="för- och efternamn">
          <label htmlFor="guestname">name:</label>
          <br />
          <input
            id="guestname"
            type="text"
            name="name"
            placeholder="för- och efternamn"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div title="förnamn eller namn på sällskap">
          <label htmlFor="guestlabel">label:</label>
          <br />
          <input
            id="guestlabel"
            type="text"
            name="label"
            placeholder="förnamn/namn på grupp"
            value={formData.label}
            onChange={handleChange}
            required
          />
        </div>
        <div title="kryssa i om personen är en del av en grupp">
          <label htmlFor="guestgroup">group:</label>
          <br />
          <input
            id="guestgroup"
            type="checkbox"
            name="group"
            checked={formData.group}
            onChange={handleChange}
          />
        </div>
        <button type="submit" className="buttonstyle">
          Lägg till gäst
        </button>
      </form>
    </div>
  )
}
export default AddGuestForm
