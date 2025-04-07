import { TbTablePlus } from "react-icons/tb";
import { FaEdit } from "react-icons/fa";
import { useEffect, useState } from "react";
import { useRef } from "react";
import Papa from 'papaparse';
import "./agregarSiniestros.css";
// npm i papaparse


export function ADDACCIDENTS() {
    const [data, setData] = useState();
    const [currentFile, setCurrentFile] = useState();
    const fileInputRef = useRef(null);

    const handleClick = () => {
        fileInputRef.current.click();
    }

    const handleFileUpload = (e) => {
        const file = e.target.files[0];
        setCurrentFile(file.name);
    };

    useEffect(() => {
        if (currentFile) {
            console.log("Archivo Seleccionado:", currentFile);
        }
    }, [currentFile]);

    const uploadCSV = () => {
        const file = fileInputRef.current.files[0];
        if (!file) {
            alert("Archivo No Seleccionado");
            return;
        }
        Papa.parse(file, {
            header: true,
            complete: (results) => {
                setData(results.data);
            },
        });
    }

    return (
        <div id="add-container">
            {/* Título */}
            <div className="h-[100px] gap-[15px] w-full flex items-center">
                <TbTablePlus className="text-[45px]" />
                <p className="text-[45px]">Agregar Siniestros</p>
            </div>

            {/* Subtítulo */}
            <div className="h-[70px] gap-[15px] w-full flex items-center">
                <FaEdit className="text-[25px] text-gray-300" />
                <p className="text-[25px] text-gray-300">Importar Base de Datos</p>
            </div>

            {/* Área de carga */}
            <div className="h-[80px] w-[55%] flex bg-[#2F333E] border-[5px] border-[#262A33] rounded-[10px] items-center justify-around">
                <p><span className="text-red-500">* </span> Archivo .CSV</p>
                <div className="h-[75%] w-[75%] flex bg-[#234D62] border-[1px] border-[#117498] rounded-[5px] items-center justify-around">

                    <button onClick={handleClick} className=" w-[75px] text-black text-[12px] border-[1px] border-[#AAA4A8] bg-[#f0f0f0] cursor-pointer">
                        Choose File
                    </button>
                    <input id="file" ref={fileInputRef} type="file" accept=".csv" onClick={handleFileUpload} className="hidden"/>

                    <div className="h-[50%] w-[50%] flex bg-[#1A617D] rounded-[1px] items-center justify-around">
                        <p className="text-gray-300 text-[11px]">
                            {currentFile ? (currentFile) : (".csv")}
                        </p>
                    </div>

                    <button onClick={uploadCSV} className="h-[50%] w-[75px] text-[12px] font-bold bg-[#0988B4] cursor-pointer">
                        Subir
                    </button>
                </div>
            </div>

            {/* Subtítulo #2 */}
            <div className="h-[75px] gap-[15px] w-full flex items-end">
                <FaEdit className="text-[20px] text-gray-300" />
                <p className="text-[20px] text-gray-300 leading-none">Datos</p>
            </div>

            <div id="add-table" className="w-[full] overflow-x-auto">
                <table className="text-left min-w-max">
                    <thead className="bg-gray-900 h-[50px] uppercase text-[12px]">
                        <tr>
                            <th className="min-w-[200px]">Agencia</th>
                            <th className="min-w-[200px]">Estado</th>
                            <th className="min-w-[200px]">Municipio</th>
                            <th className="min-w-[200px]">Taller</th>
                            <th className="min-w-[200px]">Tipo Taller</th>
                            <th className="min-w-[200px]">Tipo Incidente</th>
                            <th className="min-w-[200px]">Intervalo Siniestro</th>
                            <th className="min-w-[200px]">Tipo de Vehiculo</th>
                            <th className="min-w-[200px]">Modelo Vehiculo</th>
                            <th className="min-w-[200px]">Fecha Siniestro</th>
                            <th className="min-w-[200px]">Fecha Entrega Vehiculo</th>
                            <th className="min-w-[200px]">Calificacion</th>
                        </tr>
                    </thead>

                    {Array.isArray(data) && data.length ? (
                        <tbody className="bg-gray-800 divide-y divide-gray-700">
                            {data.map((row, index) => (
                                <tr className="hover:bg-gray-700 hover:text-white text-gray-300" key={index}>
                                    <td>{row['Agencia']}</td>
                                    <td>{row['Estado']}</td>
                                    <td>{row['Municipio']}</td>
                                    <td>{row['Taller']}</td>
                                    <td>{row['Tipo-Taller']}</td>
                                    <td>{row['Tipo-Incidente']}</td>
                                    <td>{row['Intervalo-Siniestro']}</td>
                                    <td>{row['Tipo-de-Vehiculo']}</td>
                                    <td>{row['Modelo-Vehiculo']}</td>
                                    <td>{row['Fecha-Siniestro']}</td>
                                    <td>{row['Fecha-Entrega-Vehiculo']}</td>
                                    <td>{row['Calificacion']}</td>
                                </tr>
                            ))}
                        </tbody>
                    ) : null}
                </table>
            </div>
        </div>
    );
}
