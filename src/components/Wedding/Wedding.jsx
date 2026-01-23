import s from "./Wedding.module.css"
import PlaceDetails from "../PlaceDetails/PlaceDetails"
import tempImg from "./../../images/underkonstruktion.jpg"
const Wedding = () => {
  return (
    <div id={s["wedding"]} className={`flex flex-down`}>
      <h2>Vigsel</h2>

      <PlaceDetails
        title={"Huddinge kyrka"}
        imageObj={tempImg}
        iframeSRC={
          "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2040.5606270063104!2d17.982641377267104!3d59.24007211816207!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x465f70cbbb0e6edd%3A0xeb21500e881ab1b4!2sHuddinge%20kyrka!5e0!3m2!1ssv!2sse!4v1767545240227!5m2!1ssv!2sse"
        }
      />
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum debitis
        eveniet alias ex accusantium ullam sunt itaque, obcaecati, velit,
        consectetur maiores voluptate deserunt sequi consequatur quasi
        consequuntur officia eius a magnam delectus dolorum atque culpa
        reprehenderit! Facilis, accusamus expedita explicabo quod voluptatum
        saepe inventore est. Dolorum similique maiores quaerat provident,
        voluptatibus voluptatum voluptas harum temporibus aliquid distinctio,
        itaque fugiat enim nisi suscipit. Magni perspiciatis error a aut, in
        molestiae tempora!
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
