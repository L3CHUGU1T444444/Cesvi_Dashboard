import React from 'react';
import { FilterSubtitle } from "../filterSubtitle/filterSubtitle.jsx";
import { FilterButtons } from "../filterButons/filterButtons.jsx";
import './consultarSiniestros.css';
import icons from "../../assets/icons.jsx";
import { TOPBAR } from "../TOPBAR/barraArriba.jsx";
 
 export function CONSULTARSINIESTROS() {

   return (
     <div className="text-[black]">
            <TOPBAR {...icons.Consultar} title="Consultar Estatus"/>
          
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

              <div id="dashboardContainer" className="bg-[#D9D9D9] w-full h-screen">
                  tabla
              </div>
          </div>
      </div>
                 
   );
 }