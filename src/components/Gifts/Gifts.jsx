import island from "./../../images/island.jpg"
import s from "./Gifts.module.css"
const Gifts = () => {
  return (
    <div id={s["gifts"]} className="flex flex-down">
      <img
        src={island}
        alt="a small island surrounded by water"
        className={s.islandImg}
      />
      <h2>Gåvor</h2>
      <p>
        Vi förstår att det är många som vill ge presenter vid ett firande som
        detta. Om det skulle vara så att ni vill det, skulle vi uppskatta ett
        bidrag till vår bröllopsresa. Än så länge är det inte bestämt vart det
        bär av, men vi siktar mot en sol-och-bad-semster någonstans i
        Sydost-Asien.
      </p>
    </div>
  )
}
export default Gifts
