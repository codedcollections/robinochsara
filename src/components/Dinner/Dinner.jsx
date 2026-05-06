import s from "./Dinner.module.css"
import dinnerPlace from "./../../images/SundbyMiddag.webp"
import { FaMapMarkerAlt } from "react-icons/fa"
const Dinner = () => {
  return (
    <div id={s["dinner"]} className={`flex flex-down`}>
      <img src={dinnerPlace} alt="" />
      <h2>Middag vid Sundby Gård</h2>
      <div>
        <p>
          Festligheterna hålls på Sundby Gård och inleds med tipspromenad och
          brudskål. Därefter serveras trerättersmiddag och kvällen avslutas med
          dans. Det finns gott om parkeringar i direkt anslutning till
          restaurangen, där det går att lämna bilen över natten. Parkeringen är
          låst med grindar fram till kl 8.00. För att kunna hämta bilen före kl
          8, finns möjlighet att parkera utanför grindarna på Easyparks
          betalparkering, som ligger en promenad bort.
        </p>
        <a
          className={s.dinneraddress}
          href="https://maps.app.goo.gl/mmTV71bycjAnee8b7"
          target="_blank"
        >
          Se karta <FaMapMarkerAlt className={`mapicon`} />
        </a>
        <p></p>
      </div>
    </div>
  )
}
export default Dinner
