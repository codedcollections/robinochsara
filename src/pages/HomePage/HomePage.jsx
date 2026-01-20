import s from "./HomePage.module.css"
import Introduction from "../../components/Introduction/Introduction"

const HomePage = () => {
  return (
    <div>
      <Introduction />
      <p id="navigationtester" className={s.added}>
        end of website
      </p>
    </div>
  )
}
export default HomePage
