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

const HomePage = () => {
  return (
    <div className={`${s["wrapper"]} flex`}>
      <Introduction />
      <Timeline />
      <Wedding />
      <Dinner />
      <After />
      <Practicalities />
      <Gifts />
      <Speech />
      <InvitationForm />
      <GuestsForm />
      <div id="navigationtester" className={s.added}>
        <img src={catImg} alt="cat" />
        <p>2026</p>
      </div>
    </div>
  )
}
export default HomePage
