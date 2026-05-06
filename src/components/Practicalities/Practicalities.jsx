import PracticalityCard from "../PracticalityCard/PracticalityCard"
import s from "./Practicalities.module.css"
import dressCode from "./../../images/dresscode.webp"
import dinner from "./../../images/dinner.webp"
import children from "./../../images/children.webp"
import transport from "./../../images/transport.webp"

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
            "På Sundby Gård serveras trerättersmiddag med dryck och traditionsenlig bröllopstårta. \nHar du allergier eller matpreferenser ska de meddelas i samband med din OSA. \nEfter middagen öppnar baren för inköp av dryck. \nPå efterfesten serveras vickning och det kommer finns tillgång till en swishbar med öl, vin och cider."
          }
        />
        <PracticalityCard
          infoTitle={"Transport"}
          imageSrc={transport}
          imageAlt={`En gul leksaksbuss med bagage på taket placerad bland markkrypande växter på en strand`}
          infoText={
            "Under dagen kommer det finnas möjlighet att åka med en abonerad buss. Det är helt kostnadsfritt och för att garantera en plats krävs anmälan i samband med OSA. \nBussen åker mellan Huddinge Kyrka och Sundby Gård.\nBussen åker mellan Sundby Gård och efterfesten med ett snabbt stopp vid Huddinge station för de som vill avsluta festen och fortsätta vidare med tåg."
          }
        />
        <PracticalityCard
          infoTitle={"Klädsel"}
          imageSrc={dressCode}
          imageAlt={`En grupp av personer med skjortor, kostymbyxor och klänningar i olika färger och mönster på sig`}
          infoText={
            <>
              Den generella klädkoden är{" "}
              <span style={{ fontWeight: "bold" }}>kostym</span>, vilket
              innebär:
              <br />
              Kostym - i valfri färg och mönster på skjorta och kostym. Slips
              eller fluga kan vara i valfri färg och mönster.
              <br />
              Klänning - i valfri färg och mönster som är till knäna eller
              längre. Alternativt byxdress eller kjol.
              <br />
              Men det viktigaste är inte att följa klädkoden utan att du känner
              dig fin och bekväm i vad du har på dig.
            </>
          }
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
