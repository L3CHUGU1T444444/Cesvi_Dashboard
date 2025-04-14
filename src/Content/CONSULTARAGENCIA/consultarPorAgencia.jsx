import React, { useState, useEffect } from "react";
import "./consultarPorAgencia.css";
import icons from "../../assets/icons.jsx";
import { TOPBAR } from "../TOPBAR/barraArriba.jsx";
import { FilterSubtitle } from "../filterSubtitle/filterSubtitle.jsx";
import { FilterButtons } from "../filterButons/filterButtons.jsx";

export function CONSULTARPORAGENCIA() {
  

  return (
    <div className="text-[black]">
                <TOPBAR {...icons.Agencia} title="Consultar Base de Datos"/>
              
              <div id="container" >
                  <FilterSubtitle text="Filtros"/>
    
                  <div id="buttonsContainer" className="flex gap-[25px]">
                      
                  </div>
    
                  <div id="dashboardContainer" className="bg-[#D9D9D9] w-full h-screen">
                      tabla
                  </div>
              </div>
          </div>
    
        

      
        
  );
}
