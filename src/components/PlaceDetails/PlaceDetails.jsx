import s from "./PlaceDetails.module.css"

const PlaceDetails = ({ title, imageObj, iframeSRC }) => {
  return (
    <>
      <h3>{title}</h3>
      <img src={imageObj} alt="no image" className={`construction`} />
      <iframe
        src={iframeSRC}
        width="100%"
        height="450"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </>
  )
}
export default PlaceDetails
