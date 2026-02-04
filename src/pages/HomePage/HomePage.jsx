import s from "./HomePage.module.css"
import Introduction from "../../components/Introduction/Introduction"
import InvitationForm from "../../components/InvitationForm/InvitationForm"
import Wedding from "../../components/Wedding/Wedding"
import Dinner from "../../components/Dinner/Dinner"
import Practicalities from "../../components/Practicalities/Practicalities"
const HomePage = () => {
  return (
    <div className={`${s["wrapper"]} flex`}>
      <Introduction />
      <InvitationForm />
      <Wedding />
      <Dinner />
      <Practicalities />
      <div id="navigationtester" className={s.added}>
        <p>2026</p>
      </div>
    </div>
  )
}
export default HomePage
