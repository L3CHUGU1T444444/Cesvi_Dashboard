import icons from "../../assets/icons.jsx";
import { TOPBAR } from "../TOPBAR/barraArriba.jsx";

export function MAINDASHBOARD() {
    return (
        <div>
            <TOPBAR {...icons.Principal} title="Agregar Siniestros"/>
            <p>pagina Principal</p>
        </div>
    )
}