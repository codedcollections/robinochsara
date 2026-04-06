import s from "./Dinner.module.css"
import dinnerPlace from "./../../images/SundbyMiddag.jpg"
const Dinner = () => {
  return (
    <div>
      <div id={s["dinner"]} className={`flex flex-down`}>
        <img src={dinnerPlace} alt="" />
        <h2>Middag vid Sundby Gård</h2>

        {/* <PlaceDetails imageObj={dinnerPlace} position={[59.2016, 18.0215]} /> */}
        <div>
          <p>
            Middagen äger rum på Sundby Gård. Firandet på Sundby Gård börjar med
            brudskål och avslutas med dans efter en tre-rätters middag.
          </p>
          <a
            className={s.dinneraddress}
            href="https://maps.app.goo.gl/mmTV71bycjAnee8b7"
          >
            Se karta{/* Sundby Gårdsväg 5, 141 91 Huddinge */}
          </a>
          <p></p>
        </div>
      </div>
    </div>
  )
}
export default Dinner
