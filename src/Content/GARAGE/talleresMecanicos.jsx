import icons from "../../assets/icons.jsx";
import { FilterSubtitle } from "../filterSubtitle/filterSubtitle.jsx";
import { TOPBAR } from "../TOPBAR/barraArriba.jsx";
import { FilterButtons } from "../filterButons/filterButtons.jsx";

import { models } from "powerbi-client";

import { useRef } from "react";
import "./talleresMecanicos.css";

import { PowerBIEmbed } from 'powerbi-client-react';

export function GARAGE() {
  const reportRef = useRef(null);

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

                <PowerBIEmbed
                  embedConfig={{
                    type: 'report',
                    id: '7a12bc34-dead-beef-1234-56789abcdef0',
                    embedUrl: 'https://app.powerbi.com/reportEmbed?reportId=7a12bc34-dead-beef-1234-56789abcdef0&groupId=XXXX',
                    accessToken: 'eyJ0eXAiOiJKV1QiLCJhbGci...',
                    tokenType: models.TokenType.Embed,
                    settings: {
                      panes: {
                        filters: {
                          expanded: false,
                          visible: false,
                        },
                      },
                      background: models.BackgroundType.Transparent,
                    },
                  }}
                  eventHandlers={
                    new Map([
                      ['loaded', () => console.log('Report loaded')],
                      ['rendered', () => console.log('Report rendered')],
                      ['error', (event) => console.log(event.detail)],
                      ['visualClicked', () => console.log('visual clicked')],
                      ['pageChanged', (event) => console.log(event)],
                    ])
                  }
                  cssClassName={"reportClass"}
                  getEmbeddedComponent={(embeddedReport) => {
                    reportRef.current = embeddedReport; // ← esta es la línea correcta
                  }}
                />
            </div>
        </div>
    );
}