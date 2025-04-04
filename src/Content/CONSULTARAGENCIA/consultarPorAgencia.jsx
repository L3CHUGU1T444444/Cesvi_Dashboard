import React, { useState, useEffect } from "react";
import {
  FaMapMarkerAlt,
  FaCalendarAlt,
  FaCheckCircle,
  FaChevronDown,
  FaChevronRight,
  FaFilter,
} from "react-icons/fa";
import "./consultarPorAgencia.css";

export function CONSULTARPORAGENCIA() {
  const [selectedAgencia, setSelectedAgencia] = useState("");
  const [selectedAnio, setSelectedAnio] = useState("");
  const [selectedMes, setSelectedMes] = useState("");
  const [selectedEstado, setSelectedEstado] = useState("");
  const [mapEnabled, setMapEnabled] = useState(true);
  const [filteredAgenciaData, setFilteredAgenciaData] = useState(null);

  const [isAgenciaOpen, setIsAgenciaOpen] = useState(false);
  const [isAnioOpen, setIsAnioOpen] = useState(false);
  const [isMesOpen, setIsMesOpen] = useState(false);
  const [isEstadoOpen, setIsEstadoOpen] = useState(false);

  const agencias = ["Ejemplo 1", "Ejemplo 2", "Ejemplo 3"];
  const años = ["2023", "2022", "2021"];
  const meses = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre",
  ];
  const estados = [
    "Aguascalientes",
    "Baja California",
    "Baja California Sur",
    "Campeche",
    "Chiapas",
    "Chihuahua",
    "Ciudad de México",
    "Coahuila",
    "Colima",
    "Durango",
    "Estado de México",
    "Guanajuato",
    "Guerrero",
    "Hidalgo",
    "Jalisco",
    "Michoacán",
    "Morelos",
    "Nayarit",
    "Nuevo León",
    "Oaxaca",
    "Puebla",
    "Querétaro",
    "Quintana Roo",
    "San Luis Potosí",
    "Sinaloa",
    "Sonora",
    "Tabasco",
    "Tamaulipas",
    "Tlaxcala",
    "Veracruz",
    "Yucatán",
    "Zacatecas",
  ];

  // Base agency data with variations for each year and month
  const agenciasDataByYearMonth = {
    2023: {
      Enero: [
        {
          logo: "🏢",
          nombre: "Ejemplo 1",
          talleres: 10,
          usuarios: 50,
          siniestros: 200,
          promedio: 4.5,
        },
        {
          logo: "🏢",
          nombre: "Ejemplo 2",
          talleres: 8,
          usuarios: 30,
          siniestros: 150,
          promedio: 4.2,
        },
        {
          logo: "🏢",
          nombre: "Ejemplo 3",
          talleres: 12,
          usuarios: 60,
          siniestros: 250,
          promedio: 4.8,
        },
      ],
      Febrero: [
        {
          logo: "🏢",
          nombre: "Ejemplo 1",
          talleres: 12,
          usuarios: 55,
          siniestros: 220,
          promedio: 4.6,
        },
        {
          logo: "🏢",
          nombre: "Ejemplo 2",
          talleres: 9,
          usuarios: 35,
          siniestros: 160,
          promedio: 4.3,
        },
        {
          logo: "🏢",
          nombre: "Ejemplo 3",
          talleres: 14,
          usuarios: 65,
          siniestros: 270,
          promedio: 4.9,
        },
      ],
      // Default data for other months in 2023
    },
    2022: {
      Enero: [
        {
          logo: "🏢",
          nombre: "Ejemplo 1",
          talleres: 8,
          usuarios: 40,
          siniestros: 180,
          promedio: 4.2,
        },
        {
          logo: "🏢",
          nombre: "Ejemplo 2",
          talleres: 6,
          usuarios: 25,
          siniestros: 130,
          promedio: 4.0,
        },
        {
          logo: "🏢",
          nombre: "Ejemplo 3",
          talleres: 10,
          usuarios: 50,
          siniestros: 220,
          promedio: 4.6,
        },
      ],
      Febrero: [
        {
          logo: "🏢",
          nombre: "Ejemplo 1",
          talleres: 9,
          usuarios: 42,
          siniestros: 190,
          promedio: 4.3,
        },
        {
          logo: "🏢",
          nombre: "Ejemplo 2",
          talleres: 7,
          usuarios: 28,
          siniestros: 140,
          promedio: 4.1,
        },
        {
          logo: "🏢",
          nombre: "Ejemplo 3",
          talleres: 11,
          usuarios: 53,
          siniestros: 230,
          promedio: 4.7,
        },
      ],
      // Default data for other months in 2022
    },
    2021: {
      Enero: [
        {
          logo: "🏢",
          nombre: "Ejemplo 1",
          talleres: 6,
          usuarios: 30,
          siniestros: 150,
          promedio: 3.9,
        },
        {
          logo: "🏢",
          nombre: "Ejemplo 2",
          talleres: 5,
          usuarios: 20,
          siniestros: 100,
          promedio: 3.8,
        },
        {
          logo: "🏢",
          nombre: "Ejemplo 3",
          talleres: 8,
          usuarios: 40,
          siniestros: 180,
          promedio: 4.2,
        },
      ],
      Febrero: [
        {
          logo: "🏢",
          nombre: "Ejemplo 1",
          talleres: 7,
          usuarios: 32,
          siniestros: 160,
          promedio: 4.0,
        },
        {
          logo: "🏢",
          nombre: "Ejemplo 2",
          talleres: 6,
          usuarios: 22,
          siniestros: 110,
          promedio: 3.9,
        },
        {
          logo: "🏢",
          nombre: "Ejemplo 3",
          talleres: 9,
          usuarios: 42,
          siniestros: 190,
          promedio: 4.3,
        },
      ],
      // Default data for other months in 2021
    },
  };

  // Default data for all other combinations
  const defaultAgenciasData = [
    {
      logo: "🏢",
      nombre: "Ejemplo 1",
      talleres: 10,
      usuarios: 50,
      siniestros: 200,
      promedio: 4.5,
    },
    {
      logo: "🏢",
      nombre: "Ejemplo 2",
      talleres: 8,
      usuarios: 30,
      siniestros: 150,
      promedio: 4.2,
    },
    {
      logo: "🏢",
      nombre: "Ejemplo 3",
      talleres: 12,
      usuarios: 60,
      siniestros: 250,
      promedio: 4.8,
    },
  ];

  // Update filtered data when filters change
  useEffect(() => {
    if (selectedAgencia) {
      let currentData;

      // Check if we have data for the selected year and month
      if (
        selectedAnio &&
        selectedMes &&
        agenciasDataByYearMonth[selectedAnio]?.[selectedMes]
      ) {
        currentData = agenciasDataByYearMonth[selectedAnio][selectedMes];
      }
      // If only year is selected
      else if (
        selectedAnio &&
        agenciasDataByYearMonth[selectedAnio]?.["Enero"]
      ) {
        currentData = agenciasDataByYearMonth[selectedAnio]["Enero"]; // Default to January data
      }
      // Default data if no specific year/month match
      else {
        currentData = defaultAgenciasData;
      }

      // Find the selected agency in the data
      const filteredAgencia = currentData.find(
        (agencia) => agencia.nombre === selectedAgencia
      );

      setFilteredAgenciaData(filteredAgencia);
    } else {
      setFilteredAgenciaData(null);
    }
  }, [selectedAgencia, selectedAnio, selectedMes]);

  return (
    <div className="app-container">
      <div className="main-content">
        <h1 className="main-title">Consulta por agencia</h1>

        {/* Filtros */}
        <div className="filtros-container">
          <div className="filter-header">
            <h2 className="filter-title">
              <FaFilter /> Filtros de Búsqueda
            </h2>
            <div className="filter-divider"></div>
          </div>
          <div className="filtros-horizontal">
            {/* Agencia */}
            <div
              className="filtro-item"
              onClick={() => {
                setIsAgenciaOpen(!isAgenciaOpen);
                setIsAnioOpen(false); // Cierra otros desplegables
                setIsMesOpen(false);
                setIsEstadoOpen(false);
              }}
            >
              <span>Agencia</span>
              <FaChevronRight
                className={`filtro-arrow ${isAgenciaOpen ? "open" : ""}`}
              />
              {isAgenciaOpen && (
                <ul className="dropdown-options">
                  {agencias.map((agencia) => (
                    <li
                      key={agencia}
                      onClick={() => {
                        setSelectedAgencia(agencia);
                        setIsAgenciaOpen(false); // Cierra el desplegable actual
                      }}
                    >
                      {agencia}
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {/* Año */}
            <div
              className="filtro-item"
              onClick={() => {
                setIsAnioOpen(!isAnioOpen);
                setIsAgenciaOpen(false); // Cierra otros desplegables
                setIsMesOpen(false);
                setIsEstadoOpen(false);
              }}
            >
              <span>Año</span>
              <FaChevronRight
                className={`filtro-arrow ${isAnioOpen ? "open" : ""}`}
              />
              {isAnioOpen && (
                <ul className="dropdown-options">
                  {años.map((año) => (
                    <li
                      key={año}
                      onClick={() => {
                        setSelectedAnio(año);
                        setIsAnioOpen(false); // Cierra el desplegable actual
                      }}
                    >
                      {año}
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {/* Mes */}
            <div
              className="filtro-item"
              onClick={() => {
                setIsMesOpen(!isMesOpen);
                setIsAgenciaOpen(false); // Cierra otros desplegables
                setIsAnioOpen(false);
                setIsEstadoOpen(false);
              }}
            >
              <span>Mes</span>
              <FaChevronRight
                className={`filtro-arrow ${isMesOpen ? "open" : ""}`}
              />
              {isMesOpen && (
                <ul className="dropdown-options">
                  {meses.map((mes) => (
                    <li
                      key={mes}
                      onClick={() => {
                        setSelectedMes(mes);
                        setIsMesOpen(false); // Cierra el desplegable actual
                      }}
                    >
                      {mes}
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {/* Estado */}
            <div
              className="filtro-item"
              onClick={() => {
                setIsEstadoOpen(!isEstadoOpen);
                setIsAgenciaOpen(false); // Cierra otros desplegables
                setIsAnioOpen(false);
                setIsMesOpen(false);
              }}
            >
              <span>Estado</span>
              <FaChevronRight
                className={`filtro-arrow ${isEstadoOpen ? "open" : ""}`}
              />
              {isEstadoOpen && (
                <ul className="dropdown-options">
                  {estados.map((estado) => (
                    <li
                      key={estado}
                      onClick={() => {
                        setSelectedEstado(estado);
                        setIsEstadoOpen(false); // Cierra el desplegable actual
                      }}
                    >
                      {estado}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </div>

        {/* Detalles de la Agencia Seleccionada */}
        {filteredAgenciaData && (
          <div className="tabla-container">
            <h2 className="filter-title">Detalles de la Agencia</h2>
            <table className="tabla-agencias">
              <thead>
                <tr>
                  <th>Logo</th>
                  <th>Nombre</th>
                  <th>Talleres</th>
                  <th>Usuarios</th>
                  <th>Siniestros</th>
                  <th>Promedio</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{filteredAgenciaData.logo}</td>
                  <td>{filteredAgenciaData.nombre}</td>
                  <td>{filteredAgenciaData.talleres}</td>
                  <td>{filteredAgenciaData.usuarios}</td>
                  <td>{filteredAgenciaData.siniestros}</td>
                  <td>{filteredAgenciaData.promedio}</td>
                </tr>
              </tbody>
            </table>
          </div>
        )}

        {/* Mapa */}
        <div className="mapa-container">
          <h2 className="filter-title">
            <FaMapMarkerAlt /> Mapa de Talleres
          </h2>
          <button
            className="map-toggle"
            onClick={() => setMapEnabled(!mapEnabled)}
          >
            {mapEnabled ? "Ocultar Mapa" : "Mostrar Mapa"}
          </button>
          {mapEnabled && (
            <div className="mapa-placeholder">
              <p>Mapa de ubicación se mostraría aquí</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
