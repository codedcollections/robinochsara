import s from "./PracticalityCard.module.css"
const PracticalityCard = ({ infoTitle, imageSrc, infoText }) => {
  return (
    <div id={s["practicalcard"]} className="flex flex-down">
      <img src={imageSrc} alt="image not found" />
      <div id={s["cardtextinfo"]}>
        <h3>{infoTitle}</h3>
        <p className={s.multiline}>{infoText}</p>
      </div>
    </div>
  )
}
export default PracticalityCard
