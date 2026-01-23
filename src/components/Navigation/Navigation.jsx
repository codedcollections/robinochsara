import { HashLink } from "react-router-hash-link"
import { useNavigate } from "react-router-dom"
import s from "./Navigation.module.css"
import { useState, useEffect } from "react"
const Navigation = () => {
  const [windowDimensions, setWindowDimensions] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  })
  const [menuSelect, setMenuSelect] = useState("")

  useEffect(() => {
    const screenSizeChange = () => {
      setWindowDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      })
    }
    window.addEventListener("resize", screenSizeChange)
    return () => window.removeEventListener("resize", screenSizeChange)
  }, [])

  useEffect(() => {
    console.log(menuSelect)
    if (menuSelect === "OSA") {
      const element = document.getElementById("navigationtester")
      element.scrollIntoView({ behavior: "smooth" })
    }
  }, [menuSelect])
  return (
    <div id={s["navigation"]} className={`flex flex-down`}>
      <nav className={`flex`}>
        {windowDimensions.width > 900 ? (
          <ul className={`flex`}>
            <li>
              <HashLink smooth to="/#navigationtester">
                End of website
              </HashLink>
            </li>
          </ul>
        ) : (
          <select
            value={menuSelect || ""}
            name="hamburger"
            id="hamburger"
            onChange={(e) => setMenuSelect(e.target.value)}
          >
            <option value="">Hitta på sidan</option>
            <option value="OSA">End of website</option>
          </select>
        )}
      </nav>
    </div>
  )
}
export default Navigation
