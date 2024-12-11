import React from 'react';
import w1 from '../assets/img/w1.jpg';
import i1 from '../assets/img/i.jpg';
import t1 from '../assets/img/t1.jpg';
import s1 from '../assets/img/s1.jpg';
import te1 from '../assets/img/te1.jpg';


function Contacto() {
return (
    <div className="flex justify-center items-start min-h-screen py-1 ">
        <div className="p-12 rounded-lg shadow-lg w-full max-w-lg mt-28  bg-gray-900 bg-opacity-50">
            <h2 className="text-2xl font-bold text-center text-gray-700 mb-6">Contáctanos</h2>    
            <div className="text-center">
                <h3 className="text-lg font-semibold text-gray-700 mb-4">Conéctate con nosotros:</h3>   
                <div className="flex justify-start gap-6"> {/* Cambio aquí: justify-start en lugar de justify-center */}
                    <div className="flex flex-col items-center">
                        <img src={w1} className="w-16 h-16 mb-2" />
                        <span className="block text-sm">WhatsApp</span>
                    </div>    
                    <div className="flex flex-col items-center">
                        <img src={s1} alt="Messenger" className="w-16 h-16 mb-2" />
                        <span className="block text-sm">Messenger</span>
                    </div>    
                    <div className="flex flex-col items-center">
                        <img src={t1} alt="Teléfono" className="w-16 h-16 mb-2" />
                        <span className="block text-sm">Teléfono</span>
                    </div>    
                    <div className="flex flex-col items-center">
                        <img src={i1} className="w-16 h-16 mb-2" />
                        <span className="block text-sm">Instagram</span>
                    </div>
                    <div className="flex flex-col items-center">
                        <img src={te1} className="w-16 h-16 mb-2" />
                        <span className="block text-sm">Telegram</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
);
}

export default Contacto;

