import { HashLink } from "react-router-hash-link"
import s from "./Navigation.module.css"
import { useState, useEffect } from "react"
const Navigation = () => {
  const [windowDimensions, setWindowDimensions] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  })

  /*   console.log(windowDimensions.width) */

  useEffect(() => {
    const screenSizeChange = () => {
      setWindowDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      })
    }
    window.addEventListener("resize", screenSizeChange)
    return () => window.removeEventListener("resize", screenSizeChange)
  }, [])

  return (
    <nav>
      {windowDimensions.width > 900 ? (
        <ul className={`flex`}>
          <li>När</li>
          <li>OSA</li>
          <li>Praktisk information</li>
        </ul>
      ) : (
        <select name="" id="">
          <option value="">meny</option>
          <option value="OSA">OSA</option>
        </select>
      )}
    </nav>
  )
}
export default Navigation
