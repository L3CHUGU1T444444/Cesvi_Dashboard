import { BiSolidUserCircle } from "react-icons/bi";

export default function(){
    return(
        <div id='section-user' className="hover:opacity-75 w-full flex justify-center items-center">
            <button id="user-btn" className="h-full w-3/4 p-0">
                <div className="h-full w-full grid grid-cols-[50px_1fr] grid-rows-2 gap-x-[10px] gap-y-[2px] items-center">
                    {/* Botón con imagen del usuario (ocupa ambas filas de la primera columna) */}
                    <button id="user-name-btn" className="flex justify-center items-center row-span-2 w-full h-full p-0 border-0">
                        <BiSolidUserCircle className="w-full h-full" />
                    </button>

                    {/* Nombre (segunda columna, primera fila) */}
                    <div className="flex items-end whitespace-nowrap overflow-hidden text-[14px] h-full">
                        <a className="w-full overflow-hidden text-ellipsis">Luis Manuel Delgadillo Guadarrama</a>
                    </div>

                    {/* Matrícula (segunda columna, segunda fila) */}
                    <div className="flex justify-normal items-start whitespace-nowrap overflow-hidden text-[14px] h-full">
                        <p className="text-left w-full overflow-hidden text-ellipsis">A01772731</p>
                    </div>
                </div>
            </button>
        </div>
    )
}