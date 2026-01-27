import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import PLP from "./pages/PLP";
import PDP from "./pages/PDP";

export default function App() {
  return (<>
 
  <BrowserRouter>
    
    <Routes> 
       <Route path="/" element={<Home />} />
      <Route path="/plp/:type" element={<PLP/>}/>
      <Route path="/plp" element={<PLP/>}/>
      <Route path="product/:id" element={<PDP/>}/>
    </Routes>
    </BrowserRouter>
  </>
    
  );
}
