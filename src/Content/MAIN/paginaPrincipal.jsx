import icons from "../../assets/icons.jsx";
import { FilterSubtitle } from "../filterSubtitle/filterSubtitle.jsx";
import { TOPBAR } from "../TOPBAR/barraArriba.jsx";
import { FilterButtons } from "../filterButons/filterButtons.jsx";
import "./mainPage.css";

export function MAINDASHBOARD() {
    return (
        <div className="text-[black]">
            <TOPBAR {...icons.Principal} title="Pagina Principal" />

            <div id="container" >
                <FilterSubtitle text="Filtros"/>

                <div id="buttonsContainer" className="flex gap-[25px]">
                    <FilterButtons/>
                    <FilterButtons/>
                    <FilterButtons/>
                    <FilterButtons/>
                    <FilterButtons/>
                    <FilterButtons/>
                    <FilterButtons/>
                    <FilterButtons/>
                </div>

                <div id="dashboardContainer" className="bg-[#D9D9D9] w-full h-screen">
                    tabla
                </div>
            </div>
        </div>
    );
}