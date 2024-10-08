import { BrowserRouter, Routes, Route } from "react-router-dom"
import Pricing from "./pages/Pricing"
import AboutUs from "./pages/AboutUs"
import SharedLayout from "./pages/SharedLayout"
import Error from "./pages/Error"
import Home from "./pages/Home"
import ScrollToTop from "./components/ScrollToTop"


const App = () => {
  return <BrowserRouter>
    <ScrollToTop/>
    <Routes>

      <Route path="/" element={<SharedLayout/>}>
        <Route index element={<Home/>}/>
        <Route path="/cenik" element={<Pricing/>}/>
        <Route path="/onas" element={<AboutUs/>}/>
        <Route path="*" element={<Error/>}/>
      </Route>

    </Routes>
  </BrowserRouter>
}

export default App