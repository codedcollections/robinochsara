import PracticalityCard from "../PracticalityCard/PracticalityCard"
import s from "./Practicalities.module.css"
import dressCode from "./../../images/dress1.jpg"
import dinner from "./../../images/dinner1.jpg"
import children from "./../../images/children1.jpg"

const Practicalities = () => {
  return (
    <div id={s["practicalities"]} className="flex flex-down">
      <h2>Bra att veta</h2>
      <PracticalityCard
        infoTitle={"Mat och dryck"}
        imageSrc={dinner}
        infoText={`Middag inkluderar förrätt, huvudrätt samt bröllopstårta. Vid allergier och/eller matpreferenser, anmäl dessa via OSA-formuläret.`}
      />
      <PracticalityCard
        infoTitle={"Klädsel"}
        imageSrc={dressCode}
        infoText={`Kostym - med valfri kombination av färg på skjorta och kavaj. Klänning -
        alternativt byxdress, dräkt eller kjol.`}
      />
      <PracticalityCard infoTitle={"Barn"} imageSrc={children} infoText={``} />
    </div>
  )
}
export default Practicalities
