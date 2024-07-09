import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Menu from "./Menu.js";
import Conceptos from "./conceptos.js";
import Alumnos from "./alumnos.js";
import Home from "./home.js";
import Calculadoras from "./calculadoras.js";

function App() {
  return (
    <div className="app">
      <Menu />
      <div className="container mx-auto flex justify-center items-center w-full">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />{" "}
            <Route path="/conceptos" element={<Conceptos />} />{" "}
            <Route path="/alumnos" element={<Alumnos />} />{" "}
            <Route path="/calculadoras" element={<Calculadoras />} />{" "}
          </Routes>{" "}
        </BrowserRouter>{" "}
      </div>
    </div>
  );
}

export default App;
