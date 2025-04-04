import "./ubicacionTalleres.css";
import { icons } from "../../assets/icons";
import React from "react";

export function LOCATION() {
    const commonStyles = "bg-gray-800 rounded-[10px] h-[250px] w-[250px] text-white";
    const mapStyles = "bg-[white] rounded-[10px] col-span-2 row-span-2 min-h-[518px]";

    return (
        <div id="container-map" className="text-white">
            {/* Título */}
            <div id="title-cont-map" className="flex items-center text-[50px]">
                {icons.Ubicacion.icon}
                <span id="title-map">Mapa Nacional</span>
            </div>

            {/* Navegación */}
            <div id="filter-cont-map" className="h-[50px] flex items-center gap-[20px] opacity-70">
                <div className="flex items-center gap-[10px] ">
                    <span className="cursor-pointer">Estado</span>
                    {React.cloneElement(icons.Ubicacion.arrow, { className: "relative top-[1.5px]" })}
                </div>
                <div className="flex items-center gap-[10px] ">
                    <span className="cursor-pointer">Municipio</span>
                    {React.cloneElement(icons.Ubicacion.arrow, { className: "relative top-[1.5px]" })}
                </div>
                <div className="flex items-center gap-[10px] ">
                    <span className="cursor-pointer">Codigo Postal</span>
                    {React.cloneElement(icons.Ubicacion.arrow, { className: "relative top-[1.5px]" })}
                </div>
            </div>

            {/* Contenido */}
            <div id="dashboard-map" className="justify-center items-center grid grid-cols-4 gap-4">
                <div className={commonStyles}>Municipio, Estado</div>
                
                <div className={commonStyles}>Tabla de Datos</div>
                
                {/* Mapa */}
                <div className={mapStyles}></div>
                
                {/* Gráficos vacíos */}
                <div className={commonStyles}></div>
                <div className={commonStyles}></div>
            </div>
        </div>
    );
}