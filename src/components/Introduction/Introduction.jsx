import { useEffect, useState } from "react"

const Introduction = () => {
  const calculateTimeLeft = () => {
    const thebigday = new Date("2026-01-17T00:00:00")
    const now = new Date()
    const difference = thebigday - now

    if (difference <= 0) {
      return "🎉"
    }

    const minutes = Math.floor(difference / (1000 * 60))
    const days = Math.floor(minutes / (60 * 24))
    const hours = Math.floor((minutes % (60 * 24)) / 60)
    const remainingMinutes = minutes % 60

    return `${days} dagar, ${hours} timmar och ${remainingMinutes} minuter kvar ❤️`
  }

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft())

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(calculateTimeLeft())
    }, 60000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div id={"introduction"}>
      <h2>Robin och Sara</h2>
      <h2>{timeLeft}</h2>
    </div>
  )
}
export default Introduction
