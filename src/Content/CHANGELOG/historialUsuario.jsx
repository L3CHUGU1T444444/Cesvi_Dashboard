import React, { useState } from 'react';
import './historialUsuario.css';

export function CHANGELOG () {
  // Estado para manejar los dropdowns
  const [dropdowns, setDropdowns] = useState({
    agencia: false,
    año: false,
    mes: false,
    estado: false,
    actividad: false
  });

  // Función para manejar el toggle de los dropdowns
  const toggleDropdown = (dropdown) => {
    setDropdowns({
      ...dropdowns,
      [dropdown]: !dropdowns[dropdown]
    });
  };

  // Datos de ejemplo para la tabla
  const tablaData = [
    { 
      agencia: 'openear', 
      orderNo: '36007019', 
      country: 'fr', 
      client: 'Leslie Alexander', 
      state: 'To be processed', 
      quant: 1, 
      totalPrice: '$396.84', 
      warranty: 'x', 
      date: 'Feb 14, 2020 9:36:15' 
    },
    { 
      agencia: 'GNP', 
      orderNo: '1926674', 
      country: 'fr', 
      client: 'Arlene McCoy', 
      state: 'To be processed', 
      quant: 1, 
      totalPrice: '$498.27', 
      warranty: 'x', 
      date: 'Apr 10, 2020 4:08:47' 
    },
    { 
      agencia: 'Qualica', 
      orderNo: '9293729', 
      country: 'fr', 
      client: 'Cody Fisher', 
      state: 'Awaiting shipment', 
      quant: 1, 
      totalPrice: '$854.08', 
      warranty: 'x', 
      date: 'Jan 13, 2020 1:14:36' 
    },
    { 
      agencia: 'openear', 
      orderNo: '6819242', 
      country: 'fr', 
      client: 'Ralph Edwards', 
      state: 'Awaiting shipment', 
      quant: 1, 
      totalPrice: '$782.01', 
      warranty: 'x', 
      date: 'May 18, 2020 1:19:50' 
    },
    { 
      agencia: 'GNP', 
      orderNo: '4500960', 
      country: 'fr', 
      client: 'Cameron Williamson', 
      state: 'Awaiting shipment', 
      quant: 1, 
      totalPrice: '$969.43', 
      warranty: 'x', 
      date: 'May 06, 2020 5:37:29' 
    },
    { 
      agencia: 'Qualica', 
      orderNo: '5835249', 
      country: 'gb', 
      client: 'Ronald Richards', 
      state: 'Awaiting shipment', 
      quant: 1, 
      totalPrice: '$848.55', 
      warranty: 'x', 
      date: 'Mar 03, 2020 9:26:51' 
    }
  ];

  return (
    <div className="historial-container">
      <div className="historial-header">
        <div className="icon-title">
          <span className="search-icon">🔍</span>
          <h1>Historial de Usuario</h1>
        </div>
        
        <div className="tabs-container">
          <div className="tab-item">
            <span>Agencia</span>
            <button onClick={() => toggleDropdown('agencia')} className="dropdown-arrow">▼</button>
            {dropdowns.agencia && (
              <div className="dropdown-content">
                <div>Opción 1</div>
                <div>Opción 2</div>
                <div>Opción 3</div>
              </div>
            )}
          </div>
          
          <div className="tab-item">
            <span>Año</span>
            <button onClick={() => toggleDropdown('año')} className="dropdown-arrow">▼</button>
            {dropdowns.año && (
              <div className="dropdown-content">
                <div>2023</div>
                <div>2022</div>
                <div>2021</div>
              </div>
            )}
          </div>
          
          <div className="tab-item">
            <span>Mes</span>
            <button onClick={() => toggleDropdown('mes')} className="dropdown-arrow">▼</button>
            {dropdowns.mes && (
              <div className="dropdown-content">
                <div>Enero</div>
                <div>Febrero</div>
                <div>Marzo</div>
              </div>
            )}
          </div>
          
          <div className="tab-item">
            <span>Estado</span>
            <button onClick={() => toggleDropdown('estado')} className="dropdown-arrow">▼</button>
            {dropdowns.estado && (
              <div className="dropdown-content">
                <div>Activo</div>
                <div>Inactivo</div>
                <div>En espera</div>
              </div>
            )}
          </div>
          
          <div className="tab-item">
            <span>Mapa</span>
            <span className="no-button">No</span>
          </div>
          
          <div className="tab-item">
            <span>Actividad</span>
            <button onClick={() => toggleDropdown('actividad')} className="dropdown-arrow">▼</button>
            {dropdowns.actividad && (
              <div className="dropdown-content">
                <div>Alta</div>
                <div>Media</div>
                <div>Baja</div>
              </div>
            )}
          </div>
        </div>
      </div>
      
      <section className="datos-section">
        <h2>Datos</h2>
        <div className="datos-form">
          <div className="form-group">
            <label>Usuario</label>
            <input type="text" className="form-input" />
          </div>
          <div className="form-group">
            <label>Aseguradora</label>
            <input type="text" className="form-input" />
          </div>
          <div className="form-group">
            <label>Hora</label>
            <input type="text" className="form-input" />
          </div>
          <div className="form-group">
            <label>Día</label>
            <input type="text" className="form-input" />
          </div>
          <div className="form-group">
            <label>Ubicación</label>
            <input type="text" className="form-input" />
          </div>
        </div>
      </section>
      
      <section className="tabla-section">
        <h2>Tabla de cambios</h2>
        <div className="tabla-container">
          <table className="data-table">
            <thead>
              <tr>
                <th className="agencia-column">Agencia</th>
                <th><input type="checkbox" /></th>
                <th>Order no.</th>
                <th>Country</th>
                <th>Client</th>
                <th>State</th>
                <th>Quant.</th>
                <th>Total price</th>
                <th>Warranty est.</th>
                <th>Date</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {tablaData.map((item, index) => (
                <tr key={index}>
                  <td className="agencia-column">
                    {item.agencia === 'openear' && <div className="logo openear">○←</div>}
                    {item.agencia === 'GNP' && <div className="logo gnp">GNP</div>}
                    {item.agencia === 'Qualica' && <div className="logo qualica">Q</div>}
                  </td>
                  <td><input type="checkbox" /></td>
                  <td>{item.orderNo}</td>
                  <td>
                    {item.country === 'fr' && <span className="flag">🇫🇷</span>}
                    {item.country === 'gb' && <span className="flag">🇬🇧</span>}
                  </td>
                  <td>{item.client}</td>
                  <td>
                    <span className={`state-badge ${item.state.toLowerCase().replace(/\s+/g, '-')}`}>
                      {item.state}
                    </span>
                  </td>
                  <td>{item.quant}</td>
                  <td>{item.totalPrice}</td>
                  <td className="warranty">{item.warranty}</td>
                  <td>{item.date}</td>
                  <td>
                    <button className="more-options">⋮</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}