import s from "./HomePage.module.css"
import Introduction from "../../components/Introduction/Introduction"
import InvitationForm from "../../components/InvitationForm/InvitationForm"
import Wedding from "../../components/Wedding/Wedding"
import Dinner from "../../components/Dinner/Dinner"
import After from "../../components/After/After"
import Practicalities from "../../components/Practicalities/Practicalities"
import Gifts from "../../components/Gifts/Gifts"
import Speech from "../../components/Speech/Speech"
import GuestsForm from "../../components/GuestsForm/GuestsForm"
import catImg from "./../../images/cat.png"
import Timeline from "../../components/Timeline/Timeline"
import Invitiation from "../../components/Invitation/Invitation"
import Navigation from "../../components/Navigation/Navigation"
import { FaHeart } from "react-icons/fa6"

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
      <Invitiation />
      <div id="navigationtester" className={`flex flex-down ${s.added}`}>
        <p>
          2<span className={s.theEnd}>{<FaHeart />}</span>26
        </p>
      </div>
    </div>
  )
}
export default HomePage
