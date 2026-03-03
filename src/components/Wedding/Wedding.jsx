import s from "./Wedding.module.css"
import PlaceDetails from "../PlaceDetails/PlaceDetails"
import weddingPlace from "./../../images/HuddingeVigsel.jpg"
const Wedding = () => {
  return (
    <div id={s["wedding"]} className={`flex flex-down`}>
      <h2>Vigsel i Huddinge kyrka</h2>

      <PlaceDetails imageObj={weddingPlace} position={[59.24, 17.9826]} />
      <h3 className={`flex-align-self-start`}>
        Kommunalvägen 21, 141 23 Huddinge
      </h3>
      <p className={`flex-align-self-start`}>
        Vigseln äger rum i Huddinge Kyrka den 22 augusti kl 14:00. Det är enkelt
        att ta sig till kyrkan med kollektivtrafik, men det finns även
        parkeringar precis vid kyrkan.
      </p>
      <p className={`flex-align-self-start ${s.imgsource}`}>
        Källa bild: "Huddinge kyrka" av Jssfrk, via Wikimedia Commons, licens
        <a href=" https://creativecommons.org/licenses/by-sa/3.0/">
          CC BY-SA 3.0
        </a>
        .
      </p>
      <p>
        {/*Sundby gård:
         "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d127.67847005353346!2d18.021793251426015!3d59.201713330771184!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x465f7a7a8514047b%3A0xb8c9412b5bcc2b81!2sSundby%20g%C3%A5rd!5e0!3m2!1ssv!2sse!4v1767550849941!5m2!1ssv!2sse" 
         Huddinge kyrka
         "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2040.5606270063104!2d17.982641377267104!3d59.24007211816207!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x465f70cbbb0e6edd%3A0xeb21500e881ab1b4!2sHuddinge%20kyrka!5e0!3m2!1ssv!2sse!4v1767545240227!5m2!1ssv!2sse"
         
         */}
      </p>
    </div>
  )
}
export default Wedding
