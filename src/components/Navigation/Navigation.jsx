import { HashLink } from "react-router-hash-link"
import { useNavigate } from "react-router-dom"
import s from "./Navigation.module.css"
import introS from "./../Introduction/Introduction.module.css"
import formS from "./../InvitationForm/InvitationForm.module.css"
import weddingS from "./../Wedding/Wedding.module.css"
import dinnerS from "./../Dinner/Dinner.module.css"
import afterS from "./../After/After.module.css"
import practicalitiesS from "./../Practicalities/Practicalities.module.css"
import giftsS from "./../Gifts/Gifts.module.css"
import invitationS from "./../Invitation/Invitation.module.css"
import speechS from "./../Speech/Speech.module.css"
import { IoMenu } from "react-icons/io5"

import { useState, useEffect } from "react"

const Navigation = () => {
  const [show, setShow] = useState(false)

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
            <HashLink smooth to={`/#${weddingS.weddingimg}`}>
              Vigsel
            </HashLink>
          </li>
          <li>
            <HashLink smooth to={`/#${dinnerS.dinner}`}>
              Middag
            </HashLink>
          </li>
          <li>
            <HashLink smooth to={`/#${afterS.after}`}>
              Efterfest
            </HashLink>
          </li>
          <li>
            <HashLink smooth to={`/#${practicalitiesS.practicalities}`}>
              Information
            </HashLink>
          </li>
          <li>
            <HashLink smooth to={`/#${giftsS.gifts}`}>
              Gåvor
            </HashLink>
          </li>
          <li>
            <HashLink smooth to={`/#${speechS.speech}`}>
              Tal
            </HashLink>
          </li>
          <li>
            <HashLink smooth to={`/#${invitationS.invitation}`}>
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
                to={`/#${afterS.after}`}
                onClick={() => {
                  setShow(!show)
                }}
              >
                Efterfest
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
                to={`/#${giftsS.gifts}`}
                onClick={() => {
                  setShow(!show)
                }}
              >
                Gåvor
              </HashLink>

              <HashLink
                smooth
                to={`/#${speechS.speech}`}
                onClick={() => {
                  setShow(!show)
                }}
              >
                Tal
              </HashLink>

              <HashLink
                smooth
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
