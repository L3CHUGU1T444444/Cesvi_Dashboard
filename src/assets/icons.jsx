// ../../assets/icons.jsx
import { IoIosArrowForward } from "react-icons/io";
import { FaHome, FaCar, FaMapMarkedAlt, FaCarCrash } from "react-icons/fa";
import { GiAutoRepair } from "react-icons/gi";
import { TbTablePlus } from "react-icons/tb";
import { HiDocumentMagnifyingGlass } from "react-icons/hi2";

// Exportamos todos los íconos en un solo objeto
export const icons = {
    Principal: {
        icon: <FaHome className='w-[35px] h-[35px]'/>,
        text: 'Pagina Principal',
        arrow: <IoIosArrowForward/>
    },
    Mecanico: {
        icon: <FaCar className='w-[35px] h-[35px]'/>,
        text: 'Talleres Mecanicos',
        arrow: <IoIosArrowForward/>
    },
    Ubicacion: {
        icon: <FaMapMarkedAlt className='w-[35px] h-[35px]'/>,
        text: 'Ubicacion Talleres',
        arrow: <IoIosArrowForward/>
    },
    Agregar: {
        // icon: <VscTable className='w-[35px] h-[35px]'/>,
        icon: <TbTablePlus className='w-[35px] h-[35px]'/>,
        text: 'Agregar Siniestros',
        arrow: <IoIosArrowForward/>
    },
    Consultar: {
        icon: <FaCarCrash className='w-[35px] h-[35px]'/>,
        text: 'Consultar Siniestros',
        arrow: <IoIosArrowForward/>
    },
    Agencia: {
        icon: <GiAutoRepair className='w-[35px] h-[35px]'/>,
        text: 'Consultar por Agencia',
        arrow: <IoIosArrowForward/>
    },
    Historial: {
        icon: <HiDocumentMagnifyingGlass className='w-[35px] h-[35px]'/>,
        text: 'Historial de Usuario',
        arrow: <IoIosArrowForward/>
    }
};

export default icons;
