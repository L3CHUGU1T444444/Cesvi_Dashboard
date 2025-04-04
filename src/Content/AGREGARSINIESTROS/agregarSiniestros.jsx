import { TbTablePlus } from "react-icons/tb";
import { FaEdit } from "react-icons/fa";
import "./agregarSiniestros.css";

export function ADDACCIDENTS() {
    return (
        <div id="container">
            {/* Título */}
            <div id="title">
                <TbTablePlus className="text-3xl text-blue-400" />
                <h1 className="text-3xl font-bold">Agregar Siniestros</h1>
            </div>

            {/* Subtítulo */}
            <div id="subtitle">
                <FaEdit className="text-xl text-gray-300" />
                <h2 className="text-lg font-semibold text-gray-300">Importar Base de Datos</h2>
            </div>

            {/* Área de carga (Simulada) */}
            <div id="file-upload">
                <label id="file-label">* Archivo .CSV (No funcional)</label>
                <div id="file-box">Aquí aparecería la selección de archivo.</div>
            </div>

            {/* Subtítulo */}
            <div id="subtitle">
                <FaEdit className="text-xl text-gray-300" />
                <h2 className="text-lg font-semibold text-gray-300">Datos</h2>
            </div>

            {/* Tabla */}
            <div id="table-container">
                <table id="table">
                    <thead>
                        <tr>
                            <th>Zona</th>
                            <th>Clave o ID</th>
                            <th>Nombre comercial</th>
                            <th>Tipo de taller</th>
                            <th>Clasificación de taller</th>
                            <th>Estatus</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Centro</td>
                            <td>12345</td>
                            <td>Taller ABC</td>
                            <td>Mecánico</td>
                            <td>Premium</td>
                            <td>Activo</td>
                        </tr>
                        <tr>
                            <td>Norte</td>
                            <td>67890</td>
                            <td>Taller XYZ</td>
                            <td>Pintura</td>
                            <td>Económico</td>
                            <td>Pendiente</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}
