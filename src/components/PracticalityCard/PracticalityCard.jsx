import s from "./PracticalityCard.module.css"
const PracticalityCard = ({ infoTitle, imageSrc, infoText }) => {
  return (
    <div id={s["practicalcard"]} className="flex flex-down">
      <h3>{infoTitle}</h3>
      <img src={imageSrc} alt="image not found" />
      <p>{infoText}</p>
    </div>
  )
}
export default PracticalityCard
