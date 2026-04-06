import PracticalityCard from "../PracticalityCard/PracticalityCard"
import s from "./Practicalities.module.css"
import dressCode from "./../../images/dress2.jpg"
import dinner from "./../../images/dinner1.jpg"
import children from "./../../images/children3.jpg"
import transport from "./../../images/transport1.jpg"

const Practicalities = () => {
  return (
    <div id={s["practicalities"]} className="flex flex-down">
      <h2>Bra att veta</h2>
      <div className={s.infogrid}>
        <PracticalityCard
          infoTitle={"Mat och dryck"}
          imageSrc={dinner}
          infoText={
            "Det kommer serveras 3 rättersmiddag med dryck och traditionsenlig bröllopstårta.\nHar du allergier eller matpreferenser ska de meddelas i samband med din OSA.\nEfter middagen kommer det finns en bar för inköp av dryck. Och på efterfesten finns det tillgång till enklare swishbar."
          }
        />
        <PracticalityCard
          infoTitle={"Transport"}
          imageSrc={transport}
          infoText={
            "Det kommer finns en buss till och från middagen. För att åka med på bussen krävs anmälan i samband med OSAn.\nBussen kommer åka mellan Huddinge Kyrka och Sundby Gård.\nBussen kommer åka mellan Sundby Gård till Huddinge station och vidare till Efterfesten för de som känner att kvällen inte slutar där."
          }
        />
        <PracticalityCard
          infoTitle={"Klädsel"}
          imageSrc={dressCode}
          infoText={`Kostym - med valfri kombination av färg på skjorta och kavaj.\nKlänning - alternativt byxdress, dräkt eller kjol.`}
        />
        <PracticalityCard
          infoTitle={"Barn"}
          imageSrc={children}
          infoText={`Vi tycker jättemycket om era barn, men idag har vi valt att de får stanna hemma då det kommer serveras alkohol och vi anser inte att det är en passande miljö för någon under 18 år.\nBarn är varmt välkomna att delta under vigseln i kyrkan.`}
        />
      </div>
    </div>
  )
}
export default Practicalities
