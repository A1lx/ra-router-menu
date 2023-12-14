import { Routes, Route } from "react-router-dom";
import { Menu } from "./components/Menu/Menu";
import { HomePage } from "./components/Pages/HomePage";
import { DriftPage } from "./components/Pages/DriftPage";
import { ForzaPage } from "./components/Pages/ForzaPage";
import { TimeAttackPage } from "./components/Pages/TimeAttackPage";

export default function App() {
  return (
    <div>
      <Menu/>
      <div className="page">
        <Routes>
          <Route path="/" exact element={<HomePage/>} />
          <Route path="/drift" element={<DriftPage/>} />
          <Route path="/timeattack" element={<TimeAttackPage/>} />
          <Route path="/forza" element={<ForzaPage/>} />
        </Routes>
      </div>
    </div>
  );
}