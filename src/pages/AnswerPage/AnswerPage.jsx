import s from "./AnswerPage.module.css"
import { onRsvps, onGuestlist } from "../../api"
import { useState, useRef, useEffect } from "react"
import { FaCopy } from "react-icons/fa"
import { FaCheck } from "react-icons/fa6"
import { BsFillPeopleFill } from "react-icons/bs"
import { useNavigate } from "react-router-dom"
import { getGuestById } from "../../utils/firebaseFunctions"

const AnswerPage = () => {
  const [rsvps, setRsvps] = useState([])
  const [guestlist, setGuestlist] = useState([])
  const [copied, setCopied] = useState(false)
  const timerRef = useRef(null)
  const navigate = useNavigate()

  useEffect(() => {
    const unsubscribeRsvps = onRsvps("1234", setRsvps)
    const unsubscribeGuests = onGuestlist("1234", setGuestlist)

    return () => {
      unsubscribeRsvps()
      unsubscribeGuests()
    }
  }, [])

  const formatValue = (value) => {
    if (value === null || value === undefined || value === "") {
      return "-"
    }
    if (Array.isArray(value)) {
      return value.length === 0 ? "-" : value.join(", ")
    }
    if (typeof value === "number" && value > 1000000000) {
      return new Date(value).toLocaleString("sv-SE")
    }
    return String(value)
  }
  const handleClick = () => {
    setCopied(true)

    if (timerRef.current) {
      clearTimeout(timerRef.current)
    }

    timerRef.current = setTimeout(() => {
      setCopied(false)
    }, 600)
  }
  const copyToClipboard = async () => {
    if (reorderedData.length === 0 || columns.length === 0) return

    const header = columns.join("\t")
    const rows = reorderedData.map((rsvp) =>
      columns.map((col) => formatValue(rsvp[col])).join("\t"),
    )

    const text = [header, ...rows].join("\n")

    try {
      await navigator.clipboard.writeText(text)
      handleClick()
    } catch (err) {
      console.error("Failed to copy:", err)
    }
  }
  const reorderedData = rsvps.map((rsvp) => {
    const guest = guestlist.find(
      (g) => String(g.id).trim() === String(rsvp.id).trim(),
    )
    return {
      namn: guest?.name || rsvp.name || "Okänt namn",
      "angivet efternamn": guest?.lastname || rsvp.lastname || "-",
      deltagande: rsvp.attending,
      email: rsvp.email,
      inskickat: rsvp.createdAt,
      matpreferenser: rsvp.foodPreference || [],
      "övrigt mat": rsvp.otherFood || "",
      "vill åka": rsvp.ride || [],
    }
  })

  // Get all unique keys from all RSVP objects
  const columns =
    reorderedData.length > 0
      ? Array.from(new Set(reorderedData.flatMap((rsvp) => Object.keys(rsvp))))
      : []

  return (
    <div id={s["answerpage"]} className={`wrapper`}>
      <button onClick={() => navigate(`/${import.meta.env.VITE_PEOPLE}`)}>
        <BsFillPeopleFill />
      </button>
      <button
        onClick={copyToClipboard}
        className={copied ? s.copiedBtn : s.copyBtn}
      >
        {copied ? <FaCheck className={s.check} /> : <FaCopy />}
      </button>

      <div id={s["answers"]} className={`flex flex-down`}>
        {reorderedData.length > 0 ? (
          <table style={{ borderCollapse: "collapse", width: "100%" }}>
            <thead>
              <tr>
                {columns.map((column) => (
                  <th
                    key={column}
                    style={{
                      border: "1px solid #ddd",
                      padding: "8px",
                      backgroundColor: "#f2f2f2",
                      textAlign: "left",
                    }}
                  >
                    {column}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {reorderedData.map((rsvp, index) => (
                <tr key={index}>
                  {columns.map((column) => (
                    <td
                      data-label={column}
                      key={`${index}-${column}`}
                      style={{
                        border: "1px solid #ddd",
                        padding: "8px",
                      }}
                    >
                      {formatValue(rsvp[column])}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p>Inga svar ännu</p>
        )}
      </div>
    </div>
  )
}
export default AnswerPage
