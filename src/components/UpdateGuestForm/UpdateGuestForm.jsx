import { useState } from "react"
import s from "./UpdateGuestForm.module.css"
import { updateGuestDb } from "../../utils/firebaseFunctions"
const UpdateGuestForm = ({ guest, onClose }) => {
  const readGuest = guest ? JSON.parse(guest) : { name: "" }

  const [formData, setFormData] = useState({
    id: readGuest.id,
    name: "",
    label: "",
    group: readGuest.group ?? false,
    submitted: readGuest.submitted,
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

    const updatedFields = {}

    if (formData.name && formData.name !== readGuest.name) {
      updatedFields.name = formData.name
    }

    if (formData.label && formData.label !== readGuest.label) {
      updatedFields.label = formData.label
    }

    if (formData.group !== readGuest.group) {
      updatedFields.group = formData.group
    }

    if (Object.keys(updatedFields).length === 0) {
      onClose()
      return
    }

    updateGuestDb(readGuest.id, updatedFields)

    onClose()
  }
  return (
    <>
      <div id={s["updateGuestForm"]}>
        <h2>Uppdatera gästlistan</h2>
        <p>id hanteras automatiskt</p>
        <p>
          Om inga nya värden anges, används tidigare värden på namn,label och
          group.
        </p>
        <form onSubmit={handleSubmit} className={s.updateGuestForm}>
          <table>
            <thead>
              <tr>
                <th></th>
                <th>Gammalt värde</th>
                <th>Nytt värde</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>ID</td>
                <td>{readGuest.id}</td>
                <td></td>
              </tr>

              <tr>
                <td>Name</td>
                <td>
                  <input type="text" value={readGuest.name || ""} disabled />
                </td>
                <td>
                  <input
                    type="text"
                    name="name"
                    placeholder="för- och efternamn"
                    value={formData.name || ""}
                    onChange={handleChange}
                  />
                </td>
              </tr>

              <tr>
                <td>Label</td>
                <td>
                  <input type="text" value={readGuest.label || ""} disabled />
                </td>
                <td>
                  <input
                    type="text"
                    name="label"
                    placeholder="förnamn/namn på grupp"
                    value={formData.label || ""}
                    onChange={handleChange}
                  />
                </td>
              </tr>

              <tr title="kryssa i om gästen är del av en grupp">
                <td>Group</td>
                <td>
                  <input
                    type="checkbox"
                    checked={readGuest.group || false}
                    disabled
                  />
                </td>
                <td>
                  <input
                    type="checkbox"
                    name="group"
                    checked={formData.group ?? false}
                    onChange={handleChange}
                  />
                </td>
              </tr>

              <tr>
                <td colSpan="3">
                  <button type="submit" className="buttonstyle">
                    Uppdatera gäst
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </form>
      </div>
    </>
  )
}
export default UpdateGuestForm
