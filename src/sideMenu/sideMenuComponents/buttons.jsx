import icons from "../../assets/icons.jsx";

function BTN({ icon, text, arrow, onClick }) {
  return (
    <button
      id="btn-menu"
      onClick={onClick}
      className="flex justify-between items-center w-full p-2 text-white"
    >
      {icon}
      <span id="a-btn">{text}</span>
      {arrow}
    </button>
  );
}

export default function Button({ setActive }) {
  function handleClick(sectionClicked) {
    let active = "MAINDASHBOARD";

    if (sectionClicked === "Mecanico") {
      active = "GARAGE";
    } else if (sectionClicked === "Agregar") {
      active = "ADDACCIDENTS";
    } else if (sectionClicked === "Consultar") {
      active = "CONSULTARSINIESTROS";
    } else if (sectionClicked === "Agencia") {
      active = "CONSULTARPORAGENCIA";
    }
    setActive(active);
  }

  return (
    <menu className="flex flex-col items-center justify-center gap-[15px] text-[14px] w-full">
      <BTN onClick={() => handleClick("Principal")} {...icons.Principal} />
      <BTN onClick={() => handleClick("Mecanico")} {...icons.Mecanico} />
      <BTN onClick={() => handleClick("Ubicacion")} {...icons.Ubicacion} />
      <BTN onClick={() => handleClick("Agregar")} {...icons.Agregar} />
      <BTN onClick={() => handleClick("Consultar")} {...icons.Consultar} />
      <BTN onClick={() => handleClick("Agencia")} {...icons.Agencia} />
      <BTN onClick={() => handleClick("Historial")} {...icons.Historial} />
    </menu>
  );
}
