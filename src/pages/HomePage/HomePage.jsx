import s from "./HomePage.module.css"
import Introduction from "../../components/Introduction/Introduction"
import InvitationForm from "../../components/InvitationForm/InvitationForm"
import Wedding from "../../components/Wedding/Wedding"
import Dinner from "../../components/Dinner/Dinner"
const HomePage = () => {
  return (
    <div className={`${s["wrapper"]} flex`}>
      <Introduction />
      <InvitationForm />
      <Wedding />
      <Dinner />
      <p id="navigationtester" className={s.added}>
        end of website
      </p>
    </div>
  )
}
export default HomePage
