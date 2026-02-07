import s from "./Dinner.module.css"
import PlaceDetails from "../PlaceDetails/PlaceDetails"
import tableImg from "./../../images/table1.png"
const Dinner = () => {
  return (
    <div>
      <div id={s["dinner"]} className={`flex flex-down`}>
        <h2>Middag vid Sundby Gård</h2>

        <PlaceDetails
          imageObj={tableImg}
          iframeSRC={
            "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d127.67847005353346!2d18.021793251426015!3d59.201713330771184!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x465f7a7a8514047b%3A0xb8c9412b5bcc2b81!2sSundby%20g%C3%A5rd!5e0!3m2!1ssv!2sse!4v1767550849941!5m2!1ssv!2sse"
          }
        />
        <h3 className={`flex-align-self-start`}>
          Sundby Gårdsväg 5, 141 91 Huddinge
        </h3>
        <p className={`flex-align-self-start`}>
          Middagen äger rum på Sundby Gård. Firandet på Sundby Gård börjar med
          brudskål och avslutas med dans efter en tre-rätters middag.
        </p>
        <p>
          {/*Sundby gård:
         "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d127.67847005353346!2d18.021793251426015!3d59.201713330771184!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x465f7a7a8514047b%3A0xb8c9412b5bcc2b81!2sSundby%20g%C3%A5rd!5e0!3m2!1ssv!2sse!4v1767550849941!5m2!1ssv!2sse" 
         Huddinge kyrka
         "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2040.5606270063104!2d17.982641377267104!3d59.24007211816207!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x465f70cbbb0e6edd%3A0xeb21500e881ab1b4!2sHuddinge%20kyrka!5e0!3m2!1ssv!2sse!4v1767545240227!5m2!1ssv!2sse"
         
         */}
        </p>
      </div>
    </div>
  )
}
export default Dinner
