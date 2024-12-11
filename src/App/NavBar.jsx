import { Link } from 'react-router-dom';
import "../css/style.css"
import icon1 from '../assets/img/icon1.jpg';

function NavBar ({abrirCerrar}){
    return(
        <nav className="nav flex justify-between items-center h-16  text-black relative shadow-sm" >
            <Link to="/" className="pl-8 text-black">
                <img src={icon1} alt="Descripción de la imagen" className="w-16 h-16 rounded-full border-4 border-blue-500" />
            </Link>
            <div className="px-4 cursor-pointer md:hidden" onClick={abrirCerrar} >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
            </div>
            <div className='pr-8 hidden md:block'>
                <Link to="/" className='p-4 text-black no-underline relative shadow-sm'>
                    Inicio
                </Link>
                <Link to="/dos" className='p-4 text-black no-underline hover:text-gray-700'>
                    Departamentos
                </Link>
                <Link to="/Contacto" className='p-4 text-black no-underline hover:text-gray-700'>
                    Contactos
                </Link>

            </div>
        </nav>
    );
};

export default NavBar;