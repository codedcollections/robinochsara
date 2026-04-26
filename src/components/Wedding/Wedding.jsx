import s from "./Wedding.module.css"
/* import PlaceDetails from "../PlaceDetails/PlaceDetails" */
import weddingPlace from "./../../images/HuddingeVigsel.jpg"
import { FaMapMarkerAlt } from "react-icons/fa"

const Wedding = () => {
  return (
    <div id={s["wedding"]} className={`flex flex-down`}>
      {/* <PlaceDetails imageObj={weddingPlace} position={[59.24, 17.9826]} /> */}
      <img id={s["weddingimg"]} src={weddingPlace} alt="Huddinge Kyrka" />
      <h2>Vigsel i Huddinge kyrka</h2>
      <div className={`flex-align-self-start`}>
        <p>
          Vigseln äger rum i Huddinge Kyrka den 22 augusti kl 14:00. Det är
          enkelt att ta sig till kyrkan med kollektivtrafik, men det finns även
          parkeringar precis vid kyrkan.
        </p>
        <a
          className={s.church}
          href="https://maps.app.goo.gl/jJzBHQQZuTkCZqc28"
        >
          Se karta <FaMapMarkerAlt className={`mapicon`} />
        </a>

        <p className={`${s.imgsource}`}>
          Källa bild: "Huddinge kyrka" av Jssfrk, via Wikimedia Commons, licens
          <a href=" https://creativecommons.org/licenses/by-sa/3.0/">
            CC BY-SA 3.0
          </a>
          .
        </p>
      </div>
    </div>
  )
}
export default Wedding
