import "./App.css"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import HomePage from "./pages/HomePage/HomePage"
import Navigation from "./components/Navigation/Navigation"
import HashLinkScroller from "./components/HashLinkScroller/HashLinkScroller"
import RequestPage from "./pages/RequestPage/RequestPage"
import AnswerPage from "./pages/AnswerPage/AnswerPage"

function App() {
  return (
    <>
      <BrowserRouter basename="/">
        <HashLinkScroller />
        {/* <Navigation /> */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
            path={`/${import.meta.env.VITE_REQUEST}`}
            element={<RequestPage />}
          />
          <Route
            path={`/${import.meta.env.VITE_ANSWER}`}
            element={<AnswerPage />}
          />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
