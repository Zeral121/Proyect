import { Link } from "react-router-dom";
import "../css/style.css"

function MenuCito({abrirCerrarNuevo}){
    return(
        <div className="pw grid grid-rows-3 text-center items-center" onClick={abrirCerrarNuevo}>
            <Link className="p-4 relative text-black no-underline hover:text-gray-700 shadow-sm" to="/">
                Inicio
            </Link>
            <Link className="p-4 relative text-black no-underline hover:text-gray-700 shadow-sm " to="/dos">
                Departamentos
            </Link>
            <Link className="p-4 relative text-black no-underline hover:text-gray-700 shadow-sm" to="/">
                Contactos
            </Link>
        </div>
    );
};

export default MenuCito;