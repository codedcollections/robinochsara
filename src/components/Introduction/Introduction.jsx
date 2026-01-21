import { useEffect, useState } from "react"
import s from "./Introduction.module.css"
import roses from "./../../images/roses.jpg"

const Introduction = () => {
  const calculateTimeLeft = () => {
    const thebigday = new Date("2026-01-22T00:00:00")
    const now = new Date()
    const difference = thebigday - now

    if (difference <= 0) {
      return "🎉"
    }

    const totalSeconds = Math.floor(difference / 1000)

    const days = Math.floor(totalSeconds / (60 * 60 * 24))
    const hours = Math.floor((totalSeconds % (60 * 60 * 24)) / (60 * 60))
    const minutes = Math.floor((totalSeconds % (60 * 60)) / 60)
    const seconds = totalSeconds % 60
    if (days === 1) {
      return `${days} dag : ${hours} h : ${minutes} min : ${seconds} s`
    } else {
      return `${days} dagar : ${hours} h : ${minutes} min : ${seconds} s`
    }
  }

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft())

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(calculateTimeLeft())
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div id={s["introduction"]} className={`flex flex-down`}>
      <h1 className={`${s.names} handwriting`}>Robin & Sara</h1>
      <img className={`flex ${s.roses}`} src={roses} alt="" />
      <p id={s["countdown"]}>{timeLeft}</p>
    </div>
  )
}
export default Introduction
