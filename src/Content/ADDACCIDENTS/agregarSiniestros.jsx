import icons from "../../assets/icons.jsx";
import { FaEdit } from "react-icons/fa";
import { useEffect, useState } from "react";
import { useRef } from "react";
import { TOPBAR } from "../TOPBAR/barraArriba.jsx";
import Papa from 'papaparse';
import "./agregarSiniestros.css";
// npm i papaparse


export function ADDACCIDENTS() {
    const [data, setData] = useState();
    const [currentFile, setCurrentFile] = useState();
    const fileInputRef = useRef(null);
    // const fileNamess = currentFile ? (currentFile) : (".csv");

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
        <div className="text-[black]">
            <TOPBAR {...icons.Agregar} title="Agregar Siniestros" />

            <div id="container-add" >
                <div className="h-[80px] gap-[10px] w-full flex items-end">
                    <FaEdit className="text-[35px]"/>
                    <p className="text-[20px]">Importar Base de Datos</p>
                </div>

                <div id="import-add" className="h-[80px] w-[55%] flex gap-[15px] bg-[#009AD4] rounded-[10px] items-center justify-center text-[white]">
                    <p className="text-center text-sm lg:text-base"><span className="text-red-500">* </span> Archivo .CSV</p>

                    <div className="h-[60%] w-[65%] flex bg-[#F5F5F5] border-[1px] border-[#D9D9D9] rounded-[10px] items-center justify-around lg:w-[75%]">
                        <button onClick={handleClick} className=" w-[75px] text-black text-[12px] border-[1px] border-[#AAA4A8] bg-[#f0f0f0] cursor-pointer">
                            Choose File
                        </button>
                        <input id="file" ref={fileInputRef} type="file" accept=".csv" onClick={handleFileUpload} className="hidden"/>

                        <div className="h-[50%] w-[50%] hidden bg-[#71C5E1] rounded-[1px] items-center justify-around lg:flex">
                            <p className="text-[11px]">
                                {/* {fileNamess} */}
                                {currentFile ? (currentFile) : (".csv")}
                            </p>
                        </div>

                        <button onClick={uploadCSV} className="h-[50%] w-[75px] text-[12px] font-bold bg-[#1677FF] cursor-pointer">
                            Subir
                        </button>
                    </div>
                </div>

                <div className="w-[full] overflow-x-auto">
                    <table className="text-left min-w-max">
                        <thead className="bg-[#009AD4] h-[50px] uppercase text-[12px]">
                            <tr className="text-[white]">
                                <th className="min-w-[200px]">zona</th>
                                <th className="min-w-[200px]">id</th>
                                <th className="min-w-[200px]">nombre_comercial</th>
                                <th className="min-w-[200px]">tipo_taller</th>
                                <th className="min-w-[200px]">unidad</th>
                                <th className="min-w-[200px]">municipio</th>
                                <th className="min-w-[200px]">estado</th>
                                <th className="min-w-[200px]">cp</th>
                                <th className="min-w-[200px]">numero_siniestro</th>
                                <th className="min-w-[200px]">costo_total_siniestro</th>
                                <th className="min-w-[200px]">costo_total_refacciones</th>
                                <th className="min-w-[200px]">costo_total_mano_obra</th>
                                <th className="min-w-[200px]">otros_costos</th>
                                <th className="min-w-[200px]">numero_total_refacciones</th>
                                <th className="min-w-[200px]">numero_complementos</th>
                                <th className="min-w-[200px]">dias_estadia</th>
                                <th className="min-w-[200px]">mes_conclusion_siniestro</th>
                                <th className="min-w-[200px]">a�o_conclusion_siniestro</th>
                                <th className="min-w-[200px]">vehiculo</th>
                                <th className="min-w-[200px]">marca</th>
                                <th className="min-w-[200px]">anio_modelo</th>
                                <th className="min-w-[200px]">taller_exclusivo</th>
                            </tr>
                        </thead>

                        {Array.isArray(data) && data.length ? (
                            <tbody className="bg-[#E9F1F4] divide-y divide-[#009AD4] text-[black]">
                                {data.map((row, index) => (
                                    <tr className="hover:bg-[#A4D7EB] hover:text-[#6B8C99]" key={index}>
                                        <td>{row['zona']}</td>
                                        <td>{row['id']}</td>
                                        <td>{row['nombre_comercial']}</td>
                                        <td>{row['tipo_taller']}</td>
                                        <td>{row['unidad']}</td>
                                        <td>{row['municipio']}</td>
                                        <td>{row['estado']}</td>
                                        <td>{row['cp']}</td>
                                        <td>{row['numero_siniestro']}</td>
                                        <td>{row['costo_total_siniestro']}</td>
                                        <td>{row['costo_total_refacciones']}</td>
                                        <td>{row['costo_total_mano_obra']}</td>
                                        <td>{row['otros_costos']}</td>
                                        <td>{row['numero_total_refacciones']}</td>
                                        <td>{row['numero_complementos']}</td>
                                        <td>{row['dias_estadia']}</td>
                                        <td>{row['mes_conclusion_siniestro']}</td>
                                        <td>{row['a�o_conclusion_siniestro']}</td>
                                        <td>{row['vehiculo']}</td>
                                        <td>{row['marca']}</td>
                                        <td>{row['anio_modelo']}</td>
                                        <td>{row['taller_exclusivo']}</td>
                                    </tr>
                                ))}
                            </tbody>
                        ) : null}
                    </table>
                </div>
            </div>
        </div>
    );
}
