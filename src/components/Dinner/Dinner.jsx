import s from "./Dinner.module.css"
import dinnerPlace from "./../../images/SundbyMiddag.jpg"
import { FaMapMarkerAlt } from "react-icons/fa"
const Dinner = () => {
  return (
    <div id={s["dinner"]} className={`flex flex-down`}>
      <img src={dinnerPlace} alt="" />
      <h2>Middag vid Sundby Gård</h2>
      <div>
        <p>
          Festligheterna hålls på Sundby Gård. Det börjar med tipspromenad och
          brudskål. Därefter serveras tre-rätters middag och avslutas med dans.
          För er som tar bilen finns gott om plats för parkering bredvid. Det
          går att lämna bilen där under natten och den blir då inlåst till kl 8
          dagen efter. Vill man kunna hämta bilen innan kl 8 går det att parkera
          utanför grindarna på easyparks parkering, det kostar att stå där och
          man behöver promenera en liten bit.
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
