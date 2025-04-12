import { TbTablePlus } from "react-icons/tb";

export function TOPBAR ({ icon, title }) {
    return(
        <div id="title-container-add" className=" flex gap-[15px] bg-[#929292] w-full h-[100px] items-center text-[white]">
            {icon}
            <p className="text-[25px]">{title}</p>
        </div>
    )
}