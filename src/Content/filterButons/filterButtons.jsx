import { useState } from "react";
import "./filterButtons.css";

export function FilterButtons() {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedYears, setSelectedYears] = useState([]);
    const years = [2018, 2019, 2020, 2021, 2022, 2023, 2024];

    const toggleDropdown = () => setIsOpen(!isOpen);

    const handleSelect = (year) => {
        if (selectedYears.includes(year)) {
            setSelectedYears(selectedYears.filter(y => y !== year));
        } else {
            setSelectedYears([...selectedYears, year]);
        }
    };

    return (
        <div className="relative inline-block">
            <button id="filterBtn" onClick={toggleDropdown} className="cursor-pointer flex bg-[white] items-center justify-between gap-[10px] min-h-[30px] min-w-[100px] border border-[#D9D9D9] rounded-[5px] px-2">
                <span className="opacity-[50%] text-[14px]">
                    {selectedYears.length > 0 ? selectedYears.join(" - ") : "Año"}
                </span>
                <span className="opacity-[50%]">{'>'}</span>
            </button>

            {isOpen && (
                <div className="absolute z-10 bg-[white] border border-[#D9D9D9] rounded-md shadow-md w-[100px]">
                    {years.map((year) => (
                        <label key={year} className="flex items-center justify-around space-x-2 text-sm text-gray-700">
                            <input type="checkbox" checked={selectedYears.includes(year)} onChange={() => handleSelect(year)} className="accent-blue-500 w-4 h-4 rounded"/>
                            <span>{year}</span>
                        </label>
                    ))}
                </div>
            )}
        </div>
    );
}
