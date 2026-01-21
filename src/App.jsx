import "./App.css"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import HomePage from "./pages/HomePage/HomePage"
import Navigation from "./components/Navigation/Navigation"

function App() {
  return (
    <>
      <BrowserRouter basename="/robinochsara/">
        <Navigation />
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
