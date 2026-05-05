import { useEffect } from "react"

//to scroll the intro image into view on render of HomePage
const HashLinkScroller = () => {
  useEffect(() => {
    const el = document.querySelector(".classintro")
    if (el) {
      el.scrollIntoView()
    }
  }, [])

  return null
}

export default HashLinkScroller
