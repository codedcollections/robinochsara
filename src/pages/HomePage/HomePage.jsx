import s from "./HomePage.module.css"
import Introduction from "../../components/Introduction/Introduction"
import InvitationForm from "../../components/InvitationForm/InvitationForm"
import Wedding from "../../components/Wedding/Wedding"
import Dinner from "../../components/Dinner/Dinner"
import After from "../../components/After/After"
import Practicalities from "../../components/Practicalities/Practicalities"
import Gifts from "../../components/Gifts/Gifts"
import catImg from "./../../images/cat.png"
const HomePage = () => {
  return (
    <div className={`${s["wrapper"]} flex`}>
      <Introduction />
      <Wedding />
      <Dinner />
      <After />
      <Practicalities />
      <Gifts />
      <InvitationForm />
      <div id="navigationtester" className={s.added}>
        <img src={catImg} alt="cat" />
        <p>2026</p>
      </div>
    </div>
  )
}
export default HomePage
