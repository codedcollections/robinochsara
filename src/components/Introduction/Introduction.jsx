import { useEffect, useState } from "react"
import s from "./Introduction.module.css"
import wedding from "./../../images/wedding.png"
import divider from "./../../images/rings.png"

const Introduction = () => {
  const calculateTimeLeft = () => {
    const thebigday = new Date("2026-08-22T14:00:00")
    const now = new Date()
    const difference = thebigday - now

    if (difference <= 0) {
      return {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
        isDone: true,
      }
    }

    const totalSeconds = Math.floor(difference / 1000)

    return {
      days: Math.floor(totalSeconds / (60 * 60 * 24)),
      hours: Math.floor((totalSeconds % (60 * 60 * 24)) / (60 * 60)),
      minutes: Math.floor((totalSeconds % (60 * 60)) / 60),
      seconds: totalSeconds % 60,
      isDone: false,
    }
  }
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft())
  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(calculateTimeLeft())
    }, 1000)

    return () => clearInterval(interval)
  }, [])
  const { days, hours, minutes, seconds, isDone } = timeLeft
  return (
    <div id={s["introduction"]} className={`classintro flex flex-down`}>
      <h1>
        <span className={`handwriting`}>Robin</span>{" "}
        <span className={`${s.and}`}>& </span>
        <span className={`handwriting`}>Sara</span>
      </h1>
      <h2>22.08.2026</h2>
      <img className={`flex ${s.weddingimg}`} src={wedding} alt="" />
      {/* <p id={s["countdown"]}>{timeLeft}</p> */}
      <div className={s.timegrid}>
        <div className={s.daydiv}>
          <h3>{days}</h3>
          <p className={s.timestamp}>dagar</p>
        </div>
        <p>:</p>
        <div className={s.hourdiv}>
          <h3>{hours}</h3>
          <p className={s.timestamp}>timmar</p>
        </div>
        <p>:</p>
        <div className={s.minutediv}>
          <h3>{minutes}</h3>
          <p className={s.timestamp}>minuter</p>
        </div>
        <p>:</p>
        <div className={s.seconddiv}>
          <h3>{seconds}</h3>
          <p className={s.timestamp}>sekunder</p>
        </div>
      </div>

      <div className={`flex flex-down ${s.meetcute}`}>
        <img
          src={divider}
          alt="ringar i guld som korsar varandra mellan blad och blommor"
        />
        <p>
          Det var en varm dag i juli 2023 som våra vägar korsades för första
          gången. Efter att ha pratat i telefon i flera timmar samma kväll så
          stod det klart för oss båda att detta var starten på något speciellt.
          Ett par veckor senare bodde vi ihop och sedan dess har vi redan hunnit
          med stand up, konserter, road trips, utlandssemester, renoverat en hel
          lägenhet, samt en och annan dans i köket.
        </p>
      </div>
    </div>
  )
}
export default Introduction
