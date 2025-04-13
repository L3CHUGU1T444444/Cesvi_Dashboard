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

                <div id="filteredData" className="grid grid-cols-[5px_1fr_5px_1fr] gap-4">

                  <div className="bg-[#009AD4] h-full w-[2px]"></div>
                  <div className="flex flex-col gap-1">
                    <span>Estado: NUEVO LEON</span>
                    <span>Municipio: MONTERREY</span>
                    <span>Codigo Postal: 64280</span>
                  </div>

                  <div className="bg-[#009AD4] h-full w-[2px]"></div>
                  <div className="flex flex-col gap-1">
                    <span>Tipo Unidad: AUTOS</span>
                    <span>Inscrito a CESVI: ACTIVO</span>
                    <span>Taller Exclusivo: SI</span>
                  </div>
                </div>

                <div id="dashboardContainer" className="bg-[#D9D9D9] w-full h-screen">
                    tabla
                </div>
            </div>
        </div>
    );
}