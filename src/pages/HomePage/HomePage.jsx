import s from "./HomePage.module.css"
import Introduction from "../../components/Introduction/Introduction"
import InvitationForm from "../../components/InvitationForm/InvitationForm"
import Wedding from "../../components/Wedding/Wedding"
import Dinner from "../../components/Dinner/Dinner"
import After from "../../components/After/After"
import Practicalities from "../../components/Practicalities/Practicalities"
import Gifts from "../../components/Gifts/Gifts"
import Speech from "../../components/Speech/Speech"
import GuestForm from "../../components/GuestForm/GuestForm"
import catImg from "./../../images/cat.webp"
import Timeline from "../../components/Timeline/Timeline"
import Invitiation from "../../components/Invitation/Invitation"
import Navigation from "../../components/Navigation/Navigation"
import { FaHeart } from "react-icons/fa6"
import Invitation from "../../components/Invitation/Invitation"

const HomePage = () => {
  return (
    <div className={`${s["wrapper"]} flex`}>
      <Navigation />
      <Introduction />
      <Timeline />
      <Wedding />
      <Dinner />
      <After />
      <Practicalities />
      <Gifts />
      <Speech />
      <Invitation />
      <div id="navigationtester" className={`flex ${s.added}`}>
        <p>
          2<span className={s.theEnd}>{<FaHeart />}</span>26
        </p>
        <a href="https://www.linkedin.com/in/marcus-unander" target="_blank">
          skapad av Marcus
        </a>
      </div>
    </div>
  )
}
export default HomePage
