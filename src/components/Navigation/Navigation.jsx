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
  const [show, setShow] = useState(false)
  /*   const [windowDimensions, setWindowDimensions] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  }) */

  //to use dropdown menu and select where to navigate to on website
  /*   const [menuSelect, setMenuSelect] = useState("")

  useEffect(() => {
    const screenSizeChange = () => {
      setWindowDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      })
    }
    window.addEventListener("resize", screenSizeChange)
    return () => window.removeEventListener("resize", screenSizeChange)
  }, []) */

  /*   useEffect(() => {
    console.log(menuSelect)
    if (menuSelect === "OSA") {
      const element = document.getElementById("navigationtester")
      element.scrollIntoView({ behavior: "smooth" })
    }
  }, [menuSelect]) */
  return (
    <div id={s["navigation"]} className={`flex flex-down sticky`}>
      <nav className={`flex`}>
        <ul className={`flex ${s.bigmenu}`}>
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
        </ul>
        <div className={s.smallmenu}>
          <button
            className={s.burgerbtn}
            onClick={() => {
              setShow(!show)
              console.log(show)
            }}
          >
            ☰
          </button>
          {show && (
            <div className={s.hamburgerdiv}>
              <HashLink
                smooth
                to={`/#${introS.introduction}`}
                onClick={() => {
                  setShow(!show)
                }}
              >
                Start
              </HashLink>

              <HashLink
                smooth
                to={`/#${weddingS.wedding}`}
                onClick={() => {
                  setShow(!show)
                }}
              >
                Vigsel
              </HashLink>

              <HashLink
                smooth
                to={`/#${dinnerS.dinner}`}
                onClick={() => {
                  setShow(!show)
                }}
              >
                Middag
              </HashLink>

              <HashLink
                smooth
                to={`/#${practicalitiesS.practicalities}`}
                onClick={() => {
                  setShow(!show)
                }}
              >
                Information
              </HashLink>

              <HashLink
                smooth
                to={`/#${formS.invitation}`}
                onClick={() => {
                  setShow(!show)
                }}
              >
                OSA
              </HashLink>
            </div>
          )}
        </div>
      </nav>
    </div>
  )
}
export default Navigation
