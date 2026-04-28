import { HashLink } from "react-router-hash-link"
import s from "./Navigation.module.css"
import introS from "./../Introduction/Introduction.module.css"
import weddingS from "./../Wedding/Wedding.module.css"
import dinnerS from "./../Dinner/Dinner.module.css"
import afterS from "./../After/After.module.css"
import practicalitiesS from "./../Practicalities/Practicalities.module.css"
import giftsS from "./../Gifts/Gifts.module.css"
import invitationS from "./../Invitation/Invitation.module.css"
import speechS from "./../Speech/Speech.module.css"
import { IoMenu } from "react-icons/io5"

import { useState } from "react"

const Navigation = () => {
  const [show, setShow] = useState(false)

  const scrollWithOffset = (el) => {
    const offset = 90
    const top = el.getBoundingClientRect().top + window.pageYOffset - offset
    window.scrollTo({ top, behavior: "smooth" })
  }

  return (
    <div id={s["navigation"]} className={`flex flex-down sticky`}>
      <nav className={`flex`}>
        <ul className={`flex ${s.bigmenu}`}>
          <li>
            <HashLink
              smooth
              scroll={scrollWithOffset}
              to={`/#${introS.introduction}`}
            >
              Start
            </HashLink>
          </li>
          <li>
            <HashLink
              smooth
              scroll={scrollWithOffset}
              to={`/#${weddingS.weddingimg}`}
            >
              Vigsel
            </HashLink>
          </li>
          <li>
            <HashLink
              smooth
              scroll={scrollWithOffset}
              to={`/#${dinnerS.dinner}`}
            >
              Middag
            </HashLink>
          </li>
          <li>
            <HashLink smooth scroll={scrollWithOffset} to={`/#${afterS.after}`}>
              Efterfest
            </HashLink>
          </li>
          <li>
            <HashLink
              smooth
              scroll={scrollWithOffset}
              to={`/#${practicalitiesS.practicalities}`}
            >
              Information
            </HashLink>
          </li>
          <li>
            <HashLink smooth scroll={scrollWithOffset} to={`/#${giftsS.gifts}`}>
              Gåvor
            </HashLink>
          </li>
          <li>
            <HashLink
              smooth
              scroll={scrollWithOffset}
              to={`/#${speechS.speech}`}
            >
              Tal
            </HashLink>
          </li>
          <li>
            <HashLink
              smooth
              scroll={scrollWithOffset}
              to={`/#${invitationS.invitation}`}
            >
              OSA
            </HashLink>
          </li>
        </ul>
        <div className={s.smallmenu}>
          <button
            className={s.burgerbtn}
            onClick={() => {
              setShow(!show)
            }}
          >
            <IoMenu />
          </button>
          {show && (
            <div className={s.hamburgerdiv}>
              <HashLink
                smooth
                scroll={scrollWithOffset}
                to={`/#${introS.introduction}`}
                onClick={() => {
                  setShow(!show)
                }}
              >
                Start
              </HashLink>

              <HashLink
                smooth
                scroll={scrollWithOffset}
                to={`/#${weddingS.wedding}`}
                onClick={() => {
                  setShow(!show)
                }}
              >
                Vigsel
              </HashLink>

              <HashLink
                smooth
                scroll={scrollWithOffset}
                to={`/#${dinnerS.dinner}`}
                onClick={() => {
                  setShow(!show)
                }}
              >
                Middag
              </HashLink>

              <HashLink
                smooth
                scroll={scrollWithOffset}
                to={`/#${afterS.after}`}
                onClick={() => {
                  setShow(!show)
                }}
              >
                Efterfest
              </HashLink>

              <HashLink
                smooth
                scroll={scrollWithOffset}
                to={`/#${practicalitiesS.practicalities}`}
                onClick={() => {
                  setShow(!show)
                }}
              >
                Information
              </HashLink>

              <HashLink
                smooth
                scroll={scrollWithOffset}
                to={`/#${giftsS.gifts}`}
                onClick={() => {
                  setShow(!show)
                }}
              >
                Gåvor
              </HashLink>

              <HashLink
                smooth
                scroll={scrollWithOffset}
                to={`/#${speechS.speech}`}
                onClick={() => {
                  setShow(!show)
                }}
              >
                Tal
              </HashLink>

              <HashLink
                smooth
                scroll={scrollWithOffset}
                to={`/#${invitationS.invitation}`}
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
