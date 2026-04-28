import PracticalityCard from "../PracticalityCard/PracticalityCard"
import s from "./Practicalities.module.css"
import dressCode from "./../../images/dresscode.jpg"
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
          imageAlt={`Ett elegant uppdukat bord`}
          infoText={
            "Det kommer serveras trerättersmiddag med dryck och traditionsenlig bröllopstårta.\nHar du allergier eller matpreferenser ska de meddelas i samband med din OSA.\nEfter middagen kommer det finns en bar för inköp av dryck.\nPå efterfesten serveras vickning och det kommer finns tillgång till en swishbar med öl, vin och cider."
          }
        />
        <PracticalityCard
          infoTitle={"Transport"}
          imageSrc={transport}
          imageAlt={`En gul leksaksbuss med bagage på taket placerad bland markkrypande växter på en strand`}
          infoText={
            "Det kommer gå en buss till och från middagen. För att garantera plats på bussen krävs anmälan i samband med OSA.\nBussen kommer åka mellan Huddinge Kyrka och Sundby Gård.\nBussen kommer åka mellan Sundby Gård och Efterfesten med ett snabbt stopp vid Huddinge station. Det går att ta tåg från Huddinge station för de som har festat klart."
          }
        />
        <PracticalityCard
          infoTitle={"Klädsel"}
          imageSrc={dressCode}
          imageAlt={`En grupp av personer med skjortor, kostymbyxor och klänningar i olika färger och mönster på sig`}
          infoText={`Den generella klädkoden är kostym, vilket innebär:\nKostym - i valfri färg och mönster på skjorta och kostym. Slips eller fluga kan vara i valfri färg och mönster.\nKlänning - i valfri färg och mönster som är till knäna eller längre. Alternativt byxdress eller kjol.\nMen det viktigaste är inte att följa klädkoden utan att du känner dig fin och bekväm i vad du har på dig.`}
        />
        <PracticalityCard
          infoTitle={"Barn"}
          imageSrc={children}
          imageAlt={`Barnfötter intill byggklossar med djurmotiv`}
          infoText={
            <>
              Vi tycker jättemycket om era barn, men idag har vi valt att de får
              stanna hemma då det kommer serveras alkohol och vi anser inte att
              det är en passande miljö för någon under 18 år.
              <span className={s.childInfo}>
                {" "}
                Barn är varmt välkomna att delta under vigseln i kyrkan.
              </span>
            </>
          }
        />
      </div>
    </div>
  )
}
export default Practicalities
