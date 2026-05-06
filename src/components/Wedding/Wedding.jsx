import s from "./Wedding.module.css"
import weddingPlace from "./../../images/HuddingeVigsel.webp"
import { FaMapMarkerAlt } from "react-icons/fa"

const Wedding = () => {
  return (
    <div id={s["wedding"]} className={`flex flex-down`}>
      <img id={s["weddingimg"]} src={weddingPlace} alt="Huddinge Kyrka" />
      <h2>Vigsel i Huddinge kyrka</h2>
      <div className={`flex-align-self-start`}>
        <p>
          Vigseln äger rum kl 14:00 i Huddinge kyrka. Se till att vara i god tid
          innan och sitta ner när vigseln börjar. Vi önskar att ni inte väljer
          sida av traditionella skäl utan sitter där det finns plats. Det är
          enkelt att ta sig till kyrkan med kollektivtrafik, men det finns även
          parkeringar vid kyrkan.
        </p>
        <a
          className={s.church}
          href="https://maps.app.goo.gl/jJzBHQQZuTkCZqc28"
          target="_blank"
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
