import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../src/components/home";
import AddScenario from "./components/AddScenario";
import AddVehicle from "./components/AddVehicle";
import AllScenarios from "./components/AllScenarios";
import Navbar from "./navbar";
import "./app.css";
import { StrictMode } from "react";
import EditScenario from "./components/EditScenario";

function App() {
  return (
    <StrictMode>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/addscenario" element={<AddScenario />}></Route>
          <Route path="/addvehicle" element={<AddVehicle />}></Route>
          <Route path="/allscenarios" element={<AllScenarios />}></Route>
          <Route path="/editscenario:id" element={<EditScenario />}></Route>
        </Routes>
      </BrowserRouter>
    </StrictMode>
  );
}

export default App;
