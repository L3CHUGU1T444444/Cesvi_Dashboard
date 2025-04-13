import icons from "../../assets/icons.jsx";
import { FilterSubtitle } from "../filterSubtitle/filterSubtitle.jsx";
import { TOPBAR } from "../TOPBAR/barraArriba.jsx";
import { FilterButtons } from "../filterButons/filterButtons.jsx";
import "./talleresMecanicos.css";

export function GARAGE() {
    return (
        <div className="text-[black]">
            <TOPBAR {...icons.Mecanico} title="Talleres Mecanicos" />

            <div id="container" >
                <FilterSubtitle text="Filtros"/>

                <div id="buttonsContainer" className="flex gap-[25px]">
                    <FilterButtons/>
                    <FilterButtons/>
                    <FilterButtons/>
                    <FilterButtons/>
                    <FilterButtons/>
                    <FilterButtons/>
                    <FilterButtons/>
                    <FilterButtons/>
                </div>

                <div>
                  <span>Estado: NUEVO LEON</span>
                  <span>Estado: MONTERREY</span>
                  <span>Estado: 64280</span>
                  <span>Estado: AUTOS</span>
                  <span>Estado: ACTIVO</span>
                  <span>Estado: SI</span>
                </div>

                <div id="dashboardContainer" className="bg-[#D9D9D9] w-full h-screen">
                    tabla
                </div>
            </div>
        </div>
    );
}