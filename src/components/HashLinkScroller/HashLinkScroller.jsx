import { useEffect } from "react"

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
