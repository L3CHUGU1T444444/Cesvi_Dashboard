import React, { useState, useEffect } from "react";
import "./consultarPorAgencia.css";
import icons from "../../assets/icons.jsx";
import { TOPBAR } from "../TOPBAR/barraArriba.jsx";
import { FilterSubtitle } from "../filterSubtitle/filterSubtitle.jsx";

import { useRef } from "react";
import { models } from "powerbi-client";
import { PowerBIEmbed } from 'powerbi-client-react';

export function CONSULTARPORAGENCIA() {
  const reportRef = useRef(null);
  
  return (
    <div className="text-[black]">
      <TOPBAR {...icons.Agencia} title="Consultar Base de Datos" />

      <div id="container" >
        <FilterSubtitle text="Filtros" />

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
