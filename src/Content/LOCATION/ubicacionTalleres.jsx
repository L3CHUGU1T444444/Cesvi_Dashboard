import React, { useState } from "react";
import "./ubicacionTalleres.css";
import icons from "../../assets/icons.jsx";
import { TOPBAR } from "../TOPBAR/barraArriba.jsx";
import { FilterSubtitle } from "../filterSubtitle/filterSubtitle.jsx";
import { FilterButtons } from "../filterButons/filterButtons.jsx";

export function LOCATION() {
    
    return (
        <div className="text-[black]">
            <TOPBAR {...icons.Ubicacion} title="Intervalos y Criterios"/>
            
            <div id="container">
                <FilterSubtitle text="Filtros"/>

                {/* Aumenté el gap de 25px a 50px para separar más los botones */}
                <div id="buttonsContainer" className="flex gap-[100px]">
                    <FilterButtons/>
                    <FilterButtons/>
                    <FilterButtons/>
                </div>

                {/* Contenedor de las tres tablas con espacio entre ellas */}
                <div className="flex flex-col">
                    {/* Primera tabla con altura reducida */}
                    <div id="dashboardContainer" className="bg-[#D9D9D9] w-full h-[40vh]">
                        tabla 1
                    </div>
                    
                    {/* Segunda tabla con altura reducida */}
                    <div id="dashboardContainer" className="bg-[#D9D9D9] w-full h-[40vh]">
                        tabla 2
                    </div>
                    
                    {/* Tercera tabla con altura reducida */}
                    <div id="dashboardContainer" className="bg-[#D9D9D9] w-full h-[40vh]">
                        tabla 3
                    </div>
                </div>
            </div>
        </div>
    );
}