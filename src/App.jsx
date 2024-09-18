import { BrowserRouter, Routes, Route } from "react-router-dom";
import Pricing from "./pages/Pricing"
import Services from "./pages/Services"
import AboutUs from "./pages/AboutUs"
import SharedLayout from "./pages/SharedLayout"
import Error from "./pages/Error"
import Home from "./pages/Home"

const App = () => {
  return <BrowserRouter>
    <Routes>

      <Route path="/" element={<SharedLayout/>}>
        <Route index element={<Home/>}/>
        <Route path="/cenik" element={<Pricing/>}/>
        <Route path="/sluzby" element={<Services/>}/>
        <Route path="/onas" element={<AboutUs/>}/>
        <Route path="*" element={<Error/>}/>
      </Route>

    </Routes>
  </BrowserRouter>
}

export default App