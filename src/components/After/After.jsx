import s from "./After.module.css"
import after from "./../../images/table1.png"
const After = () => {
  return (
    <div id={s["after"]} className={`flex flex-down`}>
      <h2></h2>
      <img src={after} alt="placeholder image" />
      <div>
        <p>
          När Sundby Gård stänger för kvällen så kan man kliva på bussen som kör
          till en efterfest med hemlig adress i Huddinge med närhet till
          nattbuss. För er som gått barfota i skorna under dagen kan det vara
          skönt att ha med sig ett par strumpor.
        </p>
      </div>
    </div>
  )
}
export default After
