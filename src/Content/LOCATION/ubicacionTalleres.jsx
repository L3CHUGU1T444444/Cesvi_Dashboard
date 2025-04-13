import React, { useState } from "react";
import { FaChevronDown, FaFilter } from "react-icons/fa";
import "./ubicacionTalleres.css";

import icons from "../../assets/icons.jsx";
import { TOPBAR } from "../TOPBAR/barraArriba.jsx";


export function LOCATION() {
    // Estados para los filtros
    const [estado, setEstado] = useState("Seleccionar estado");
    const [municipio, setMunicipio] = useState("Seleccionar municipio");
    const [codigoPostal, setCodigoPostal] = useState("Seleccionar CP");

    // Datos de ejemplo
    const estados = ["Yucatán", "Ciudad de México", "Jalisco", "Nuevo León"];
    const municipios = {
        "Yucatán": ["Mérida", "Valladolid", "Progreso"],
        "Ciudad de México": ["Álvaro Obregón", "Benito Juárez", "Coyoacán"],
        "Jalisco": ["Guadalajara", "Zapopan", "Tlaquepaque"],
        "Nuevo León": ["Monterrey", "San Pedro", "Santa Catarina"]};

    const codigosPostales = ["97000", "97100", "97200", "97300"];

    // Control de filtros abiertos
    const [openFilter, setOpenFilter] = useState(null);

    const toggleFilter = (filterName) => {
        setOpenFilter(openFilter === filterName ? null : filterName);
    };

    return (
        <div>
            <TOPBAR {...icons.Ubicacion} title="Intervalos y Criterios"/>
      
            {/* Filtros principales */}
            <div className="filtros-container">
                <div className="filter-header">
                <FaFilter className="filter-icon" />
                <h3>Filtros de Ubicación</h3>
            </div>
        
            <div className="filtros-grid">
                {/* Filtro de Estado */}
                <div className="filtro-group">
                    <div className="dropdown-header" onClick={() => toggleFilter('estado')}>
                        <span>{estado}</span>
                        <FaChevronDown className={`dropdown-arrow ${openFilter === 'estado' ? 'open' : ''}`} />
                        </div>
                        {openFilter === 'estado' && (
                            <ul className="dropdown-options">
                            {estados.map((item, index) => (
                            <li key={index} onClick={() => {
                                setEstado(item);
                                setMunicipio("Seleccionar municipio");
                                setOpenFilter(null);
                                }}>
                                {item}
                            </li>
                        ))}
                    </ul>
                    )}
                </div>

                {/* Filtro de Municipio */}
                <div className="filtro-group">
                    <div 
                    className="dropdown-header" 
                    onClick={() => estado !== "Seleccionar estado" && toggleFilter('municipio')}
                    style={{ 
                        opacity: estado !== "Seleccionar estado" ? 1 : 0.5,
                        cursor: estado !== "Seleccionar estado" ? "pointer" : "not-allowed"
                    }}
                    >
                    <span>{municipio}</span>
                    <FaChevronDown className={`dropdown-arrow ${openFilter === 'estado' ? 'open' : ''}`} />
                    </div>
                    {openFilter === 'municipio' && estado !== "Seleccionar estado" && (
                    <ul className="dropdown-options">
                        {municipios[estado]?.map((item, index) => (
                        <li key={index} onClick={() => {
                            setMunicipio(item);
                            setOpenFilter(null);
                        }}>
                            {item}
                        </li>
                        ))}
                    </ul>
                    )}
                </div>

                {/* Filtro de Código Postal */}
                <div className="filtro-group">
                    <div 
                    className="dropdown-header" 
                    onClick={() => toggleFilter('codigoPostal')}
                    >
                    <span>{codigoPostal}</span>
                    <FaChevronDown className={`dropdown-arrow ${openFilter === 'estado' ? 'open' : ''}`} />
                    </div>
                    {openFilter === 'codigoPostal' && (
                    <ul className="dropdown-options">
                        {codigosPostales.map((item, index) => (
                        <li key={index} onClick={() => {
                            setCodigoPostal(item);
                            setOpenFilter(null);
                        }}>
                            {item}
                        </li>
                        ))}
                    </ul>
                    )}
                </div>
                </div>
            </div>
            
            {/* Área de gráficas  */}
            <div className="charts-container">
                {/* Gráfica 1 - Cuadro de resumen */}
                <div className="square-chart summary-chart">
                    <div className="chart-header">
                        <h2>{municipio !== "Seleccionar municipio" ? `${municipio}, ${estado}` : "Ubicación no seleccionada"}</h2>
                    </div>
                    
                    <div className="filters-grid">
                        {/* Filtro de Tipo de Taller */}
                        <div className="square-filter">
                            <label>Tipo de taller</label>
                        <select className="square-select">
                            <option>Agencia</option>
                            <option>Autorizado</option>
                            <option>Multimarca</option>
                        </select>
                        </div>

                        {/* Filtro de Código Postal */}
                        <div className="square-filter">
                        <label>Código Postal</label>
                        <select className="square-select">
                            <option>Ninguno</option>
                            {codigosPostales.map((cp, index) => (
                            <option key={index}>{cp}</option>
                            ))}
                        </select>
                        </div>

                        {/* Filtro de Modelo */}
                        <div className="square-filter">
                        <label>Modelo</label>
                        <select className="square-select">
                            <option>Dodge Attitude 2016</option>
                            <option>Nissan Versa 2020</option>
                            <option>Chevrolet Aveo 2018</option>
                        </select>
                        </div>

                        {/* Filtro de Orden */}
                        <div className="square-filter">
                        <label>Ordenar por</label>
                        <select className="square-select">
                            <option>Mejor Puntaje</option>
                            <option>Más Barato</option>
                            <option>Más Cercano</option>
                        </select>
                        </div>

                        {/* Contador de Talleres */}
                        <div className="square-counter">
                        <label>Talleres disponibles</label>
                        <div className="counter-value">5</div>
                        </div>

                        {/* Intervalos */}
                        <div className="square-intervals">
                        <label>Intervalos</label>
                        <div className="intervals-container">
                            <span className="interval a">A</span>
                            <span className="interval b">B</span>
                            <span className="interval d">D</span>
                        </div>
                        </div>
                    </div>
                </div>

                {/* Otras gráficas  */}
                {[1, 2].map((num) => (
                <div key={num} className="square-chart">
                    <div className="chart-header">
                    <h2>Gráfica {num}</h2>
                </div>

                <div className="chart-content">
                    Contenido de Gráfica {num}
                </div>
            </div>))}
        </div>

        <div className="map-wrapper">
            <h2 className="map-header">Mapa</h2>
            <div className="map-content">
                Aquí se mostrará el mapa
            </div>
        </div>
    </div>
  );
}