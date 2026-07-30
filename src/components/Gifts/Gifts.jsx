import island from "./../../images/island.webp"
import s from "./Gifts.module.css"
import QrCode from "../../images/QRSwish.png"
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
        bär av, men vi siktar mot en sol- och badsemster någonstans i
        Sydostasien.
      </p>
      <p>
        För att bidra till resan swishar ni enklast till Robin via QR-koden.
        Skriv gärna vilka det är ifrån om ni är flera som skickar tillsammans.
      </p>
      <img className={s.qrImage} src={QrCode} alt="A QR code" />
    </div>
  )
}
export default Gifts
