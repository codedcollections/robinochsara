import s from "./After.module.css"
import after from "./../../images/Efterfest.jpg"
import { FaMapMarkerAlt } from "react-icons/fa"

const After = () => {
  return (
    <div id={s["after"]} className={`flex flex-down`}>
      <h2></h2>
      <img src={after} alt="Ett hus" />
      <h2>Efterfest</h2>
      <div>
        <p>
          När Sundby Gård stänger för kvällen kan man kliva på bussen som kör
          till efterfesten som hålls i den nyförvärvda villan! Där serveras
          vickning och spelas karaoke. För er som gått barfota i skorna under
          dagen kan det vara skönt att ha med sig ett par strumpor.
        </p>
        <a
          className={s.afterMap}
          href="https://maps.app.goo.gl/dXCZxjJzKbomHHXw5"
          target="_blank"
        >
          Se karta <FaMapMarkerAlt className={`mapicon`} />
        </a>
      </div>
    </div>
  )
}
export default After
