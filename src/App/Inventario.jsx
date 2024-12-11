import React from 'react';

function Inventario(props) {
    return (
        <div className="flex flex-row">
            <img src={props.imagenes} alt="Inventario" className="h-48 w-48 rounded-full" />
            <div className="py-3">
                <h3 className='text-center  '>{props.titulo}</h3>
                <p>{props.descripcion}</p>
            </div>
        </div>
    );
}

export default Inventario;
