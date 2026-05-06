import s from "./Timeline.module.css"
import timeline from "./../../images/timeline.webp"
const Timeline = () => {
  return (
    <div id={s["timeline"]}>
      <img
        src={timeline}
        alt="a timeline describing when a wedding, dinner and other events take place"
      />
    </div>
  )
}
export default Timeline
