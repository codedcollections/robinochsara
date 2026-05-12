import s from "./RequestPage.module.css"
import { onSpeeches } from "../../api"
import { useState, useEffect } from "react"

const RequestPage = () => {
  const [speeches, setSpeeches] = useState([])
  useEffect(() => {
    const unsubscribe = onSpeeches("1234", setSpeeches)
    return () => unsubscribe()
  }, [])

  return (
    <div>
      <h2>RequestPage</h2>
      <div className={s.tableContainer}>
        <h2>Talförfrågan</h2>
        <table className={s.customTable}>
          <thead>
            <tr>
              <th>Namn (Deltagare)</th>
              <th>Typ & Beskrivning</th>
              <th>Riktning</th>
              <th>Tid</th>
              <th>Förberedelser</th>
              <th>Presentation & Låt</th>
              <th>Kontakt</th>
              <th>Övrigt (TM)</th>
            </tr>
          </thead>
          <tbody>
            {speeches.map((item) => (
              <tr key={item.id}>
                <td>
                  <strong>{item.namn}</strong>
                </td>

                {/* Typ + Specifik beskrivning */}
                <td>
                  <div>{item.typ === "Övrigt" ? item.ovrigtTyp : item.typ}</div>
                  <small className={s.descriptionText}>
                    {item.beskrivning}
                  </small>
                </td>

                <td>{item.riktning}</td>
                <td>{item.tid}</td>

                {/* Förberedelser - Hanterar array + övrigt textfält */}
                <td>
                  {item.forberedelser
                    ?.map((f) =>
                      f === "Övrigt" ? item.ovrigtForberedelser : f,
                    )
                    .join(", ")}
                </td>

                {/* Presentation och musikval */}
                <td>
                  <p>🗣{item.presentation}</p>
                  {item.lat && <div className={s.musicTag}>🎵 {item.lat}</div>}
                </td>

                {/* Kontakt */}
                <td>
                  <a href={`mailto:${item.kontakt}`}>{item.kontakt}</a>
                </td>

                {/* Info till Toastmasters */}
                <td>{item.ovrigtInfo}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
export default RequestPage
