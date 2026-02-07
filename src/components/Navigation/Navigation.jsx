import { HashLink } from "react-router-hash-link"
import { useNavigate } from "react-router-dom"
import s from "./Navigation.module.css"
import introS from "./../Introduction/Introduction.module.css"
import formS from "./../InvitationForm/InvitationForm.module.css"
import weddingS from "./../Wedding/Wedding.module.css"
import dinnerS from "./../Dinner/Dinner.module.css"
import practicalitiesS from "./../Practicalities/Practicalities.module.css"
import homeButton from "./../../images/home.svg"

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
    <div id={s["navigation"]} className={`flex flex-down sticky`}>
      <nav className={`flex`}>
        {windowDimensions.width > 900 ? (
          <ul className={`flex`}>
            <li>
              <HashLink smooth to={`/#${introS.introduction}`}>
                Start
              </HashLink>
            </li>
            <li>
              <HashLink smooth to={`/#${weddingS.wedding}`}>
                Vigsel
              </HashLink>
            </li>
            <li>
              <HashLink smooth to={`/#${dinnerS.dinner}`}>
                Middag
              </HashLink>
            </li>
            <li>
              <HashLink smooth to={`/#${practicalitiesS.practicalities}`}>
                Information
              </HashLink>
            </li>
            <li>
              <HashLink smooth to={`/#${formS.invitation}`}>
                OSA
              </HashLink>
            </li>
            <li>
              <HashLink smooth to="/#navigationtester">
                -
              </HashLink>
            </li>
          </ul>
        ) : (
          <>
            <HashLink
              className={s.homelink}
              smooth
              to={`/#${introS.introduction}`}
            >
              <img
                src={homeButton}
                alt="could not load home button"
                className={s.buttonicon}
              />
            </HashLink>
            <select
              value={menuSelect || ""}
              name="hamburger"
              id="hamburger"
              onChange={(e) => setMenuSelect(e.target.value)}
            >
              <option value="">Hitta på sidan</option>
              <option value="OSA">-</option>
            </select>
          </>
        )}
      </nav>
    </div>
  )
}
export default Navigation
