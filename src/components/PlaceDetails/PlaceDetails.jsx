import s from "./PlaceDetails.module.css"
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet"

const PlaceDetails = ({ imageObj, /* iframeSRC, */ position }) => {
  console.log(position)
  return (
    <div className={s.placeimagediv}>
      <div className={s.mapandimg}>
        <img src={imageObj} alt="no image" className={s.locationimg} />
        <div className={s.mapcontainer}>
          <MapContainer
            className={s.mapstyling}
            center={position}
            zoom={15}
            dragging={false}
            zoomControl={false}
            scrollWheelZoom={false}
            doubleClickZoom={false}
            touchZoom={false}
            style={{ height: "500px", width: "100%" }}
          >
            <TileLayer
              attribution="&copy; OpenStreetMap contributors"
              url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png"
            />
            <Marker position={position}>
              <Popup>Event Location 📍</Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>
    </div>
  )
}
export default PlaceDetails
