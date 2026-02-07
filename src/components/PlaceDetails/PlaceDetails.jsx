import s from "./PlaceDetails.module.css"

const PlaceDetails = ({ imageObj, iframeSRC }) => {
  return (
    <div className={s.placeimagediv}>
      <img src={imageObj} alt="no image" className={`construction`} />
      <iframe
        src={iframeSRC}
        width="100%"
        height="300"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  )
}
export default PlaceDetails
