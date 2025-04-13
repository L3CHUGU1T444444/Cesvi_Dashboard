import { useState } from "react";
import "./App.css";
import { SIDEMENU } from "./sideMenu/sideMenu.jsx";
import { MAINDASHBOARD } from "./Content/MAIN/paginaPrincipal.jsx";
import { GARAGE } from "./Content/GARAGE/talleresMecanicos.jsx";
import { LOCATION } from "./Content/LOCATION/ubicacionTalleres.jsx";
import { ADDACCIDENTS } from "./Content/ADDACCIDENTS/agregarSiniestros.jsx";
import { CONSULTARSINIESTROS } from "./Content/CONSULTARSINIESTROS/consultarSiniestros.jsx";
import { CONSULTARPORAGENCIA } from "./Content/CONSULTARAGENCIA/consultarPorAgencia.jsx";
import { CHANGELOG } from "./Content/CHANGELOG/historialUsuario.jsx";
import { USERPROFILE } from "./Content/USERPROFILE/perfilUsuario.jsx";

// import icons from "./assets/icons.jsx";
// import { TOPBAR } from "./Content/TOPBAR/barraArriba.jsx";

function App() {
  const [active, setActive] = useState("MAINDASHBOARD");

  return (
    <div className="flex h-screen w-screen">
      <section className="fixed left-0 top-0 h-full w-[225px] bg-[#013462] transform hidden sm:block transition-all duration-1000">
        <SIDEMENU setActive={setActive} />
      </section>

      <section id="dashboard" className="min-h-screen h-fit max-w-full bg-[#F5F5F5] w-full transition-all duration-1000">
        {active === "MAINDASHBOARD" && <MAINDASHBOARD />}
        {active === "GARAGE" && <GARAGE/>}
        {active === "LOCATION" && <LOCATION/>}
        {active === "ADDACCIDENTS" && <ADDACCIDENTS/>}
        {active === "CONSULTARSINIESTROS" && <CONSULTARSINIESTROS/>}
        {active === "CONSULTARPORAGENCIA" && <CONSULTARPORAGENCIA/>}
        {active === "CHANGELOG" && <CHANGELOG/>}
        {active === "USERPROFILE" && <USERPROFILE/>}
      </section>
    </div>
  );
}

export default App;
