import { useState } from "react";
import "./App.css";
import { SIDEMENU } from "./sideMenu/sideMenu.jsx";

import { MAINDASHBOARD } from "./Content/MAIN/paginaPrincipal.jsx";
import { GARAGE } from "./Content/GARAGE/talleresMecanicos.jsx";
import { LOCATION } from "./Content/LOCATION/ubicacionTalleres.jsx";
import { ADDACCIDENTS } from "./Content/AGREGARSINIESTROS/agregarSiniestros.jsx";
import { CONSULTARSINIESTROS } from "./Content/CONSULTARSINIESTROS/consultarSiniestros.jsx";
import { CONSULTARPORAGENCIA } from "./Content/CONSULTARAGENCIA/consultarPorAgencia.jsx";
import { CHANGELOG } from "./Content/CHANGELOG/historialUsuario.jsx";

function App() {
  const [active, setActive] = useState("MAINDASHBOARD");

  return (
    <div className="flex h-screen w-screen">
      <section className="fixed left-0 top-0 h-full w-[285px] bg-[#013462] transform hidden sm:block transition-all duration-1000">
        <SIDEMENU setActive={setActive} />
      </section>

      <section id="dashboard" className="h-full bg-[#00111F] w-full transition-all duration-1000">
        {active === "MAINDASHBOARD" && <MAINDASHBOARD />}
        {active === "GARAGE" && <GARAGE/>}
        {active === "LOCATION" && <LOCATION/>}
        {active === "ADDACCIDENTS" && <ADDACCIDENTS />}
        {active === "CONSULTARSINIESTROS" && <CONSULTARSINIESTROS />}
        {active === "CONSULTARPORAGENCIA" && <CONSULTARPORAGENCIA />}
        {active === "CHANGELOG" && <CHANGELOG />}
      </section>
    </div>
  );
}

export default App;
