import React, { useState } from 'react';
import './perfilUsuario.css';

export function USERPROFILE() {
  // Estado para controlar si los campos son editables
  const [editable, setEditable] = useState(false);
  
  // Estado para los datos del formulario
  const [formData, setFormData] = useState({
    nombre: '',
    apellidoPaterno: '',
    apellidoMaterno: '',
    email: '',
    fechaNacimiento: '',
    estadoResidencia: '',
    aseguradora: '',
    usuario: '',
    id: '',
    miCredencial: '',
    telefono: '',
    emailContacto: ''
  });

  // Función para manejar cambios en los inputs
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // Función para alternar el modo editable
  const toggleEditable = () => {
    setEditable(!editable);
  };

  return (
    <div className="perfil-container">
      <div className="perfil-header">
        <div className="icon-title">
          <span className="user-icon">👤</span>
          <h1>Mi perfil</h1>
        </div>
      </div>

      <div className="perfil-content">
        <div className="perfil-avatar-section">
          <div className="perfil-avatar">
            <div className="avatar-placeholder"></div>
          </div>
          <button onClick={toggleEditable} className="editar-btn">
            <span className="edit-icon">✎</span>
            Editar
          </button>
          
          <div className="aseguradora-section">
            <label>Aseguradora</label>
            <input 
              type="text" 
              name="aseguradora"
              value={formData.aseguradora}
              onChange={handleInputChange}
              disabled={!editable}
              className="form-input dark-input"
            />
          </div>
        </div>
        
        <div className="perfil-form-section">
          <div className="form-section">
            <h2>Datos personales</h2>
            <div className="form-row">
              <div className="form-group">
                <label>Nombre</label>
                <input 
                  type="text" 
                  name="nombre"
                  value={formData.nombre}
                  onChange={handleInputChange}
                  disabled={!editable}
                  className="form-input"
                />
              </div>
              <div className="form-group">
                <label>Apellido Paterno</label>
                <input 
                  type="text" 
                  name="apellidoPaterno"
                  value={formData.apellidoPaterno}
                  onChange={handleInputChange}
                  disabled={!editable}
                  className="form-input"
                />
              </div>
              <div className="form-group">
                <label>Apellido Materno</label>
                <input 
                  type="text" 
                  name="apellidoMaterno"
                  value={formData.apellidoMaterno}
                  onChange={handleInputChange}
                  disabled={!editable}
                  className="form-input"
                />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group">
                <label>Email</label>
                <input 
                  type="email" 
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  disabled={!editable}
                  className="form-input"
                />
              </div>
              <div className="form-group">
                <label>Fecha de nacimiento</label>
                <input 
                  type="text" 
                  name="fechaNacimiento"
                  value={formData.fechaNacimiento}
                  onChange={handleInputChange}
                  disabled={!editable}
                  className="form-input"
                />
              </div>
              <div className="form-group">
                <label>Estado de residencia</label>
                <input 
                  type="text" 
                  name="estadoResidencia"
                  value={formData.estadoResidencia}
                  onChange={handleInputChange}
                  disabled={!editable}
                  className="form-input"
                />
              </div>
            </div>
          </div>
          
          <div className="form-section">
            <h2>Credenciales</h2>
            <div className="form-row">
              <div className="form-group">
                <label>Usuario</label>
                <input 
                  type="text" 
                  name="usuario"
                  value={formData.usuario}
                  onChange={handleInputChange}
                  disabled={!editable}
                  className="form-input"
                />
              </div>
              <div className="form-group">
                <label>Id</label>
                <input 
                  type="text" 
                  name="id"
                  value={formData.id}
                  onChange={handleInputChange}
                  disabled={!editable}
                  className="form-input"
                />
              </div>
              <div className="form-group">
                <label>Mi credencial</label>
                <input 
                  type="text" 
                  name="miCredencial"
                  value={formData.miCredencial}
                  onChange={handleInputChange}
                  disabled={!editable}
                  className="form-input"
                />
              </div>
            </div>
          </div>
          
          <div className="form-section">
            <h2>Datos de contacto</h2>
            <div className="form-row">
              <div className="form-group">
                <label>Teléfono</label>
                <input 
                  type="tel" 
                  name="telefono"
                  value={formData.telefono}
                  onChange={handleInputChange}
                  disabled={!editable}
                  className="form-input"
                />
              </div>
              <div className="form-group">
                <label>Email</label>
                <input 
                  type="email" 
                  name="emailContacto"
                  value={formData.emailContacto}
                  onChange={handleInputChange}
                  disabled={!editable}
                  className="form-input"
                />
              </div>
              <div className="form-group">
                {/* Espacio vacío para mantener el alineamiento */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}