import { useEffect, useState } from "react";
import { Routes, Route, Link, useLocation } from "react-router-dom";
import NavBar from "./NavBar";
import MenuCito from "./MenuCito";
import "../css/style.css";
import Carusel from "./Carusel";
import Card from "./Card";
import Inventario from "./Inventario";
import Contacto from "./Contacto";
import l1 from '../assets/img/l1.jpg';
import c1 from '../assets/img/c1.jpg';
import sa from '../assets/img/sa.jpg';
import o1 from '../assets/img/o1.jpg';
import p1 from '../assets/img/p1.jpg';
import ch1 from '../assets/img/ch1.jpeg';
import t1 from '../assets/img/t1.webp';
import pa1 from '../assets/img/pa1.jpg';
import b1 from '../assets/img/b1.jpg';
import pa2 from '../assets/img/pa2.jpg'
import ma1 from '../assets/img/ma1.jpg'
import cha from '../assets/img/cha.jpg'
import pq from '../assets/img/pq.jpg'
import sp from '../assets/img/sp.jpg'
import ap from '../assets/img/ap.jpeg'
import sal from '../assets/img/sal.jpg'
import mo from '../assets/img/mo.jpg'


function Uno(props) {
    return (
        <>
            <div className="rm flex flex-col sm:flex-row px-8 py-32 gap-20">

                <div className="w-full sm:w-1/2 py-20 h-32 ">
                <h1 class="text-4xl font-extrabold text-center bg-gradient-to-r from-blue-950 border-t-rose-200 p-8 rounded-lg shadow-lg transform hover:scale-105 transition-all duration-300">
                    <span className="text-red-500">P</span>
                    <span className="text-yellow-500">l</span>
                    <span className="text-green-500">a</span>
                    <span className="text-blue-500">t</span>
                    <span className="text-purple-500">o</span>
                    <span className="text-pink-500">s</span>
                    <span className="text-teal-500"> </span>
                    <span className="text-orange-500">T</span>
                    <span className="text-indigo-500">í</span>
                    <span className="text-red-500">p</span>
                    <span className="text-yellow-500">i</span>
                    <span className="text-green-500">c</span>
                    <span className="text-blue-500">o</span>
                    <span className="text-purple-500">s</span>
                    <span className="text-pink-500"> </span>
                    <span className="text-teal-500">d</span>
                    <span className="text-orange-500">e</span>
                    <span className="text-indigo-500"> </span>
                    <span className="text-red-500">B</span>
                    <span className="text-yellow-500">o</span>
                    <span className="text-green-500">l</span>
                    <span className="text-blue-500">i</span>
                    <span className="text-purple-500">v</span>
                    <span className="text-pink-500">i</span>
                    <span className="text-teal-500">a</span>
                </h1>
                </div>
                <div className='tm w-full sm:w-1/2 py-16 h-96'>
                    <Carusel></Carusel>
                </div>

            </div>

            <div className="flex justify-around py-1 flex-col sm:flex-row m-3 gap-5 from-blue-400 bg-gradient-to-r  border-t-rose-200 p-8 rounded-lg shadow-lg  ">
                <p className="font-serif decoration-2 text-neutral-950 m-4">
                La gastronomía boliviana está profundamente influenciada por su geografía, la diversidad cultural, y la rica historia precolombina. Los platos típicos no solo son deliciosos, sino que también cuentan historias de las comunidades indígenas, mestizas y afrobolivianas. Los ingredientes como el maíz, la papa, la quinoa, el ají, y el maní son fundamentales en la mayoría de estos platos y son una muestra del valor cultural que tienen los alimentos en Bolivia.
                Estos son solo algunos ejemplos, y cada región tiene platos únicos que reflejan su identidad cultural. ¡Definitivamente, la gastronomía de Bolivia es algo que vale la pena explorar y disfrutar!
                </p>
            </div>
        </>
        
    );
}

function Dos(props) {
    return (
        <div className="px-3 ">
            <h4 className="text-5xl font-extrabold text-center">
                <span class="text-red-500">P</span>
                <span class="text-yellow-500">l</span>
                <span class="text-green-500">a</span>
                <span class="text-blue-500">t</span>
                <span class="text-purple-500">o</span>
                <span class="text-pink-500">s</span>
                <span class="text-teal-500"> </span>
                <span class="text-orange-500">T</span>
                <span class="text-indigo-500">í</span>
                <span class="text-red-500">p</span>
                <span class="text-yellow-500">i</span>
                <span class="text-green-500">c</span>
                <span class="text-blue-500">o</span>
                <span class="text-purple-500">s</span>
                <span class="text-pink-500"> </span>
                <span class="text-teal-500">d</span>
                <span class="text-orange-500">e</span>
                <span class="text-indigo-500"> </span>
                <span class="text-red-500">L</span>
                <span class="text-yellow-500">o</span>
                <span class="text-green-500">s</span>
                <span class="text-orange-500">D</span>
                <span class="text-indigo-500">e</span>
                <span class="text-red-500">p</span>
                <span class="text-yellow-500">a</span>
                <span class="text-green-500">r</span>
                <span class="text-blue-500">t</span>
                <span class="text-purple-500">a</span>
                <span class="text-red-500">m</span>
                <span class="text-yellow-500">e</span>
                <span class="text-green-500">n</span>
                <span class="text-blue-500">t</span>
                <span class="text-purple-500">o</span>
                <span class="text-purple-500">s</span>
            </h4>
            <div className="flex justify-around flex-col sm:flex-row">
                <div className="h-auto w-auto"><Card link="/LaPaz" ciu="La Paz" imag={l1} desc="La gastronomía de La Paz es rica y variada, reflejando las tradiciones andinas, la influencia de la cocina española y las características únicas de la región. Desde platos como las salteñas y el fricassé hasta bebidas como el api y el mocochinchi, La Paz ofrece una gran variedad de sabores que son fundamentales para la cultura y las costumbres de Bolivia. ¡Si tienes la oportunidad de visitar La Paz, asegúrate de probar estos deliciosos platillos típicos!"></Card></div>
                <div className="h-auto w-auto"><Card link="/Cochabamba" ciu="Cochabamba" imag={c1} desc="La gastronomía de Cochabamba es muy diversa y ofrece una mezcla de sabores que van desde lo salado y picante hasta lo suave y dulce. Los platos típicos como el Pique Macho, el Silpancho, el Anticucho y el Chicharrón de Cerdo son solo una pequeña muestra de la riqueza culinaria de la región. Sin duda, Cochabamba tiene una gran variedad de platos que reflejan la cultura y tradiciones bolivianas. ¡Si tienes la oportunidad, no dejes de probarlos!"></Card></div>
                <div className="h-auto w-auto"><Card link="/SantaCruz" ciu="Santa Cruz" imag={sa} desc="La cocina de Santa Cruz tiene una mezcla de sabores dulces y salados, influencias autóctonas y un uso generoso de ingredientes locales como el maíz, el arroz, la yuca, el plátano y la carne de res y cerdo. El Majadito, Mote con Cordero, Sopa de Maní, y Cazuela son solo algunos de los platos más representativos. ¡La comida cruceña es muy sabrosa y una excelente manera de experimentar la cultura de esta región de Bolivia!"></Card></div>
            </div>
            <div className="flex justify-around  flex-col sm:flex-row ">
                <div className="h-auto w-auto"><Card link="/Oruro" ciu="Oruro" imag={o1} desc="Oruro tiene una gastronomía rica y variada, influenciada por las tradiciones andinas y bolivianas. Platos como el Chicharrón de Oruro, Sopa de Quinua, Fricassé, y Mote con Queso son representativos de la región. La comida de Oruro es conocida por su sabor fuerte y especiado, con ingredientes locales como la quinua, el maíz, la carne de cerdo y res, y el charque. ¡Si tienes la oportunidad de visitar Oruro, no dejes de probar estos deliciosos platos típicos!"></Card></div>
                <div className="h-auto w-auto"><Card ciu="Potosí" imag={p1} desc="La cocina de Potosí está fuertemente influenciada por los ingredientes autóctonos y las tradiciones andinas. Platos como el Mondongo, Pique a la Potosina, Fricassé, y Sopa de Maní son representativos de la región. La chicha de uva, las salteñas y los tantawawas reflejan también la conexión con las festividades y tradiciones locales. Los sabores de Potosí son ricos, especiados y sabrosos, ofreciendo una experiencia gastronómica única. ¡Si alguna vez visitas Potosí, no dejes de probar estos deliciosos platos tradicionales!"></Card></div>
                <div className="h-auto w-auto"><Card ciu="Chuquisaca"imag={ch1} desc="La gastronomía de Chuquisaca refleja su historia y herencia cultural. Platos como la Sopa de Maní, Fricassé, Pique Macho, y Chicharrón son típicos de la región y ofrecen una gran variedad de sabores especiados y ricos. Las humintas, salteñas, y Tanta Wawa son ejemplos de su cocina dulce, mientras que el Ají de Lengua y el Mote con Queso son deliciosos ejemplos de platos más sencillos pero sabrosos. La comida de Chuquisaca es perfecta para quienes buscan una experiencia culinaria tradicional de Bolivia, rica en historia y sabor. ¡No dejes de probar estos deliciosos platos si visitas la región!"></Card></div>
            </div>
            <div className="flex justify-around flex-col sm:flex-row">
                <div className="h-auto w-auto "><Card link="/Tarija" ciu="Tarija" imag={t1} desc="La gastronomía de Tarija está profundamente influenciada por su clima, su tradición vitivinícola, y la mezcla de ingredientes autóctonos e importados. Platos como la picana, el tajín de pollo, y el asado de cordero ofrecen sabores intensos y reconfortantes, mientras que las empanadas de queso y las humintas brindan un toque más suave y sabroso. No olvides acompañar tu comida con un buen vino tarijeño, que es parte integral de la experiencia culinaria de esta región.

Si alguna vez tienes la oportunidad de visitar Tarija, ¡no dejes de probar estos deliciosos platos que reflejan la riqueza cultural y natural de la región!"></Card></div>
                <div className="h-auto w-auto "><Card link="/Pando" ciu="Pando" imag={pa1} desc="La gastronomía de Pando es un reflejo de la rica biodiversidad amazónica de la región. El pescado de río, la carne de monte, el tucupí, y el guiso de plátano son solo algunos de los platos típicos que ofrecen un sabor auténtico de la Amazonía boliviana. Las frutas tropicales, como el aguaje, y las bebidas de cacao también son parte integral de la cocina local. Si alguna vez visitas Pando, no dejes de probar estos deliciosos platos y bebidas, que te permitirán disfrutar de los sabores frescos y naturales de la región."></Card></div>
                <div className="h-auto w-auto "><Card link="/Beni" ciu="Beni" imag={b1} desc="La gastronomía de Beni es un reflejo de su rica biodiversidad amazónica y su tradición fluvial. Platos como el majo de carne de pescado, la sopa de peje, y el tucupí son representativos de la región y ofrecen un sabor único de la selva tropical. El consumo de pescado, cangrejo de río y platos a base de yuca son comunes, mientras que las bebidas energéticas como la guaraná también son parte integral de la cultura local.

Si tienes la oportunidad de visitar Beni, no dejes de probar estos deliciosos platos y bebidas, que te permitirán experimentar la auténtica cocina amazónica de Bolivia."></Card></div>
            </div>
        </div>
    );
}
function LaPaz(props) {
    return (
        <>
            <div className="m-5 p-4">
                <div className="flex flex-wrap justify-between m-1 p-1">
                    <div className="h-auto w-full sm:w-1/2  bg-gray-900 bg-opacity-50">
                        <Inventario 
                            titulo="Plato Paceño" 
                            descripcion=" El Plato Paceño es una comida muy completa y sabrosa, que generalmente se sirve en porciones grandes. Está compuesto por una variedad de ingredientes típicos de la región andina" 
                            imagenes={pa2}
                        />
                    </div>
                    <div className="h-auto w-full sm:w-1/2  bg-gray-300 bg-opacity-50">
                        <Inventario 
                            titulo="Sopa de Maní" 
                            descripcion="Es una sopa espesa y reconfortante, elaborada con maní (cacahuate) molido, carne de res o pollo, papas, zanahorias y fideos. Es un platillo tradicional y muy popular en las familias paceñas, especialmente en épocas frías." 
                            imagenes={ma1}
                        />
                    </div>
                    <div className="h-auto w-full sm:w-1/2  bg-gray-100 bg-opacity-50 ">
                        <Inventario 
                            titulo="Charquekan" 
                            descripcion="Este platillo está compuesto por charque (carne deshidratada y cocida), normalmente de llama o res, acompañada de mote (maíz cocido), papas y una ensalada de tomate y cebolla." 
                            imagenes={cha}
                        />
                    </div>
                    <div className="h-auto w-full sm:w-1/2  bg-gray-600 bg-opacity-50">
                        <Inventario 
                            titulo="Papas con Queso" 
                            descripcion="Este es un platillo sencillo pero delicioso. Consiste en papas cocidas acompañadas de queso fresco rallado, a veces con cebollas picadas y perejil." 
                            imagenes={pq}
                        />
                    </div>
                </div>
            </div>
            <div className="m-5 p-4">
                <div className="flex flex-wrap justify-between">
                    <div className="h-auto w-full sm:w-1/2 p-2  bg-gray-600 bg-opacity-50">
                        <Inventario 
                            titulo="Sillpanchic" 
                            descripcion=" Este guiso es característico de la región andina y se prepara con carne de res o cordero, papa, maíz y otros ingredientes locales, como arvejas. Es un plato lleno de sabor, muy representativo de La Paz."
                            imagenes={sp}
                        />
                    </div>
                    <div className="h-auto w-full sm:w-1/2  bg-gray-200 bg-opacity-50 p-2">
                        <Inventario 
                            titulo="Api" 
                            descripcion="Una bebida caliente, espesa y dulce, hecha con maíz morado. El api se hierve con canela, clavo de olor y azúcar, y se consume comúnmente en el desayuno."
                            imagenes={ap}
                        />
                    </div>
                    <div className="h-auto w-full sm:w-1/2  bg-gray-900 bg-opacity-50 p-3">
                        <Inventario 
                            titulo="Salteñas" 
                            descripcion="Aunque originarias de la ciudad de Cochabamba, las salteñas se disfrutan mucho en La Paz. Son empanadas rellenas de carne de res, pollo o cerdo, con un jugoso relleno de guiso y un toque de picante. Se comen generalmente en la mañana como desayuno o merienda."
                            imagenes={sal}
                        />
                    </div>
                    <div className="h-auto w-full sm:w-1/2  bg-gray-600 bg-opacity-200 p-2">
                        <Inventario 
                            titulo="Mondongo" 
                            descripcion="El Mondongo es un plato tradicional de la región andina, especialmente popular en La Paz y otras áreas del altiplano boliviano. Es un guiso sustancioso y nutritivo, ideal para enfrentar el clima frío de la región."
                            imagenes={mo}
                        />
                    </div>
                </div>
            </div>
        </>
    );
}

function Cochabamba(props) {
    return (
        <>
            <div className="m-5 p-4">
                <div className="flex flex-wrap justify-between m-1 p-1">
                    <div className="h-auto w-full sm:w-1/2  bg-gray-900 bg-opacity-50">
                        <Inventario 
                            titulo="Plato Paceño" 
                            descripcion=" El Plato Paceño es una comida muy completa y sabrosa, que generalmente se sirve en porciones grandes. Está compuesto por una variedad de ingredientes típicos de la región andina" 

                        />
                    </div>
                    <div className="h-auto w-full sm:w-1/2  bg-gray-300 bg-opacity-50">
                        <Inventario 
                            titulo="Sopa de Maní" 
                            descripcion="Es una sopa espesa y reconfortante, elaborada con maní (cacahuate) molido, carne de res o pollo, papas, zanahorias y fideos. Es un platillo tradicional y muy popular en las familias paceñas, especialmente en épocas frías." 
                        />
                    </div>
                    <div className="h-auto w-full sm:w-1/2  bg-gray-100 bg-opacity-50 ">
                        <Inventario 
                            titulo="Charquekan" 
                            descripcion="Este platillo está compuesto por charque (carne deshidratada y cocida), normalmente de llama o res, acompañada de mote (maíz cocido), papas y una ensalada de tomate y cebolla." 
                        />
                    </div>
                    <div className="h-auto w-full sm:w-1/2  bg-gray-600 bg-opacity-50">
                        <Inventario 
                            titulo="Papas con Queso" 
                            descripcion="Este es un platillo sencillo pero delicioso. Consiste en papas cocidas acompañadas de queso fresco rallado, a veces con cebollas picadas y perejil." 
                        />
                    </div>
                </div>
            </div>
            <div className="m-5 p-4">
                <div className="flex flex-wrap justify-between">
                    <div className="h-auto w-full sm:w-1/2 p-2  bg-gray-600 bg-opacity-50">
                        <Inventario 
                            titulo="Sillpanchic" 
                            descripcion=" Este guiso es característico de la región andina y se prepara con carne de res o cordero, papa, maíz y otros ingredientes locales, como arvejas. Es un plato lleno de sabor, muy representativo de La Paz."
                        />
                    </div>
                    <div className="h-auto w-full sm:w-1/2  bg-gray-200 bg-opacity-50 p-2">
                        <Inventario 
                            titulo="Api" 
                            descripcion="Una bebida caliente, espesa y dulce, hecha con maíz morado. El api se hierve con canela, clavo de olor y azúcar, y se consume comúnmente en el desayuno."
                        />
                    </div>
                    <div className="h-auto w-full sm:w-1/2  bg-gray-900 bg-opacity-50 p-3">
                        <Inventario 
                            titulo="Salteñas" 
                            descripcion="Aunque originarias de la ciudad de Cochabamba, las salteñas se disfrutan mucho en La Paz. Son empanadas rellenas de carne de res, pollo o cerdo, con un jugoso relleno de guiso y un toque de picante. Se comen generalmente en la mañana como desayuno o merienda."
                        />
                    </div>
                    <div className="h-auto w-full sm:w-1/2  bg-gray-600 bg-opacity-200 p-2">
                        <Inventario 
                            titulo="Mondongo" 
                            descripcion="El Mondongo es un plato tradicional de la región andina, especialmente popular en La Paz y otras áreas del altiplano boliviano. Es un guiso sustancioso y nutritivo, ideal para enfrentar el clima frío de la región."
                        />
                    </div>
                </div>
            </div>
        </>
    );
}
function SantaCruz(props) {
    return (
        <>
            <div className="m-5 p-4">
                <div className="flex flex-wrap justify-between m-1 p-1">
                    <div className="h-auto w-full sm:w-1/2  bg-gray-900 bg-opacity-50">
                        <Inventario 
                            titulo="Plato Paceño" 
                            descripcion=" El Plato Paceño es una comida muy completa y sabrosa, que generalmente se sirve en porciones grandes. Está compuesto por una variedad de ingredientes típicos de la región andina" 

                        />
                    </div>
                    <div className="h-auto w-full sm:w-1/2  bg-gray-300 bg-opacity-50">
                        <Inventario 
                            titulo="Sopa de Maní" 
                            descripcion="Es una sopa espesa y reconfortante, elaborada con maní (cacahuate) molido, carne de res o pollo, papas, zanahorias y fideos. Es un platillo tradicional y muy popular en las familias paceñas, especialmente en épocas frías." 
                        />
                    </div>
                    <div className="h-auto w-full sm:w-1/2  bg-gray-100 bg-opacity-50 ">
                        <Inventario 
                            titulo="Charquekan" 
                            descripcion="Este platillo está compuesto por charque (carne deshidratada y cocida), normalmente de llama o res, acompañada de mote (maíz cocido), papas y una ensalada de tomate y cebolla." 
                        />
                    </div>
                    <div className="h-auto w-full sm:w-1/2  bg-gray-600 bg-opacity-50">
                        <Inventario 
                            titulo="Papas con Queso" 
                            descripcion="Este es un platillo sencillo pero delicioso. Consiste en papas cocidas acompañadas de queso fresco rallado, a veces con cebollas picadas y perejil." 
                        />
                    </div>
                </div>
            </div>
            <div className="m-5 p-4">
                <div className="flex flex-wrap justify-between">
                    <div className="h-auto w-full sm:w-1/2 p-2  bg-gray-600 bg-opacity-50">
                        <Inventario 
                            titulo="Sillpanchic" 
                            descripcion=" Este guiso es característico de la región andina y se prepara con carne de res o cordero, papa, maíz y otros ingredientes locales, como arvejas. Es un plato lleno de sabor, muy representativo de La Paz."
                        />
                    </div>
                    <div className="h-auto w-full sm:w-1/2  bg-gray-200 bg-opacity-50 p-2">
                        <Inventario 
                            titulo="Api" 
                            descripcion="Una bebida caliente, espesa y dulce, hecha con maíz morado. El api se hierve con canela, clavo de olor y azúcar, y se consume comúnmente en el desayuno."
                        />
                    </div>
                    <div className="h-auto w-full sm:w-1/2  bg-gray-900 bg-opacity-50 p-3">
                        <Inventario 
                            titulo="Salteñas" 
                            descripcion="Aunque originarias de la ciudad de Cochabamba, las salteñas se disfrutan mucho en La Paz. Son empanadas rellenas de carne de res, pollo o cerdo, con un jugoso relleno de guiso y un toque de picante. Se comen generalmente en la mañana como desayuno o merienda."
                        />
                    </div>
                    <div className="h-auto w-full sm:w-1/2  bg-gray-600 bg-opacity-200 p-2">
                        <Inventario 
                            titulo="Mondongo" 
                            descripcion="El Mondongo es un plato tradicional de la región andina, especialmente popular en La Paz y otras áreas del altiplano boliviano. Es un guiso sustancioso y nutritivo, ideal para enfrentar el clima frío de la región."
                        />
                    </div>
                </div>
            </div>
        </>
    );
}

function Oruro(props) {
    return (
        <>
            <div className="m-5 p-4">
                <div className="flex flex-wrap justify-between m-1 p-1">
                    <div className="h-auto w-full sm:w-1/2  bg-gray-900 bg-opacity-50">
                        <Inventario 
                            titulo="Plato Paceño" 
                            descripcion=" El Plato Paceño es una comida muy completa y sabrosa, que generalmente se sirve en porciones grandes. Está compuesto por una variedad de ingredientes típicos de la región andina" 

                        />
                    </div>
                    <div className="h-auto w-full sm:w-1/2  bg-gray-300 bg-opacity-50">
                        <Inventario 
                            titulo="Sopa de Maní" 
                            descripcion="Es una sopa espesa y reconfortante, elaborada con maní (cacahuate) molido, carne de res o pollo, papas, zanahorias y fideos. Es un platillo tradicional y muy popular en las familias paceñas, especialmente en épocas frías." 
                        />
                    </div>
                    <div className="h-auto w-full sm:w-1/2  bg-gray-100 bg-opacity-50 ">
                        <Inventario 
                            titulo="Charquekan" 
                            descripcion="Este platillo está compuesto por charque (carne deshidratada y cocida), normalmente de llama o res, acompañada de mote (maíz cocido), papas y una ensalada de tomate y cebolla." 
                        />
                    </div>
                    <div className="h-auto w-full sm:w-1/2  bg-gray-600 bg-opacity-50">
                        <Inventario 
                            titulo="Papas con Queso" 
                            descripcion="Este es un platillo sencillo pero delicioso. Consiste en papas cocidas acompañadas de queso fresco rallado, a veces con cebollas picadas y perejil." 
                        />
                    </div>
                </div>
            </div>
            <div className="m-5 p-4">
                <div className="flex flex-wrap justify-between">
                    <div className="h-auto w-full sm:w-1/2 p-2  bg-gray-600 bg-opacity-50">
                        <Inventario 
                            titulo="Sillpanchic" 
                            descripcion=" Este guiso es característico de la región andina y se prepara con carne de res o cordero, papa, maíz y otros ingredientes locales, como arvejas. Es un plato lleno de sabor, muy representativo de La Paz."
                        />
                    </div>
                    <div className="h-auto w-full sm:w-1/2  bg-gray-200 bg-opacity-50 p-2">
                        <Inventario 
                            titulo="Api" 
                            descripcion="Una bebida caliente, espesa y dulce, hecha con maíz morado. El api se hierve con canela, clavo de olor y azúcar, y se consume comúnmente en el desayuno."
                        />
                    </div>
                    <div className="h-auto w-full sm:w-1/2  bg-gray-900 bg-opacity-50 p-3">
                        <Inventario 
                            titulo="Salteñas" 
                            descripcion="Aunque originarias de la ciudad de Cochabamba, las salteñas se disfrutan mucho en La Paz. Son empanadas rellenas de carne de res, pollo o cerdo, con un jugoso relleno de guiso y un toque de picante. Se comen generalmente en la mañana como desayuno o merienda."
                        />
                    </div>
                    <div className="h-auto w-full sm:w-1/2  bg-gray-600 bg-opacity-200 p-2">
                        <Inventario 
                            titulo="Mondongo" 
                            descripcion="El Mondongo es un plato tradicional de la región andina, especialmente popular en La Paz y otras áreas del altiplano boliviano. Es un guiso sustancioso y nutritivo, ideal para enfrentar el clima frío de la región."
                        />
                    </div>
                </div>
            </div>
        </>
    );
}

function Potosi(props) {
    return (
        <>
            <div className="m-5 p-4">
                <div className="flex flex-wrap justify-between m-1 p-1">
                    <div className="h-auto w-full sm:w-1/2  bg-gray-900 bg-opacity-50">
                        <Inventario 
                            titulo="Plato Paceño" 
                            descripcion=" El Plato Paceño es una comida muy completa y sabrosa, que generalmente se sirve en porciones grandes. Está compuesto por una variedad de ingredientes típicos de la región andina" 

                        />
                    </div>
                    <div className="h-auto w-full sm:w-1/2  bg-gray-300 bg-opacity-50">
                        <Inventario 
                            titulo="Sopa de Maní" 
                            descripcion="Es una sopa espesa y reconfortante, elaborada con maní (cacahuate) molido, carne de res o pollo, papas, zanahorias y fideos. Es un platillo tradicional y muy popular en las familias paceñas, especialmente en épocas frías." 
                        />
                    </div>
                    <div className="h-auto w-full sm:w-1/2  bg-gray-100 bg-opacity-50 ">
                        <Inventario 
                            titulo="Charquekan" 
                            descripcion="Este platillo está compuesto por charque (carne deshidratada y cocida), normalmente de llama o res, acompañada de mote (maíz cocido), papas y una ensalada de tomate y cebolla." 
                        />
                    </div>
                    <div className="h-auto w-full sm:w-1/2  bg-gray-600 bg-opacity-50">
                        <Inventario 
                            titulo="Papas con Queso" 
                            descripcion="Este es un platillo sencillo pero delicioso. Consiste en papas cocidas acompañadas de queso fresco rallado, a veces con cebollas picadas y perejil." 
                        />
                    </div>
                </div>
            </div>
            <div className="m-5 p-4">
                <div className="flex flex-wrap justify-between">
                    <div className="h-auto w-full sm:w-1/2 p-2  bg-gray-600 bg-opacity-50">
                        <Inventario 
                            titulo="Sillpanchic" 
                            descripcion=" Este guiso es característico de la región andina y se prepara con carne de res o cordero, papa, maíz y otros ingredientes locales, como arvejas. Es un plato lleno de sabor, muy representativo de La Paz."
                        />
                    </div>
                    <div className="h-auto w-full sm:w-1/2  bg-gray-200 bg-opacity-50 p-2">
                        <Inventario 
                            titulo="Api" 
                            descripcion="Una bebida caliente, espesa y dulce, hecha con maíz morado. El api se hierve con canela, clavo de olor y azúcar, y se consume comúnmente en el desayuno."
                        />
                    </div>
                    <div className="h-auto w-full sm:w-1/2  bg-gray-900 bg-opacity-50 p-3">
                        <Inventario 
                            titulo="Salteñas" 
                            descripcion="Aunque originarias de la ciudad de Cochabamba, las salteñas se disfrutan mucho en La Paz. Son empanadas rellenas de carne de res, pollo o cerdo, con un jugoso relleno de guiso y un toque de picante. Se comen generalmente en la mañana como desayuno o merienda."
                        />
                    </div>
                    <div className="h-auto w-full sm:w-1/2  bg-gray-600 bg-opacity-200 p-2">
                        <Inventario 
                            titulo="Mondongo" 
                            descripcion="El Mondongo es un plato tradicional de la región andina, especialmente popular en La Paz y otras áreas del altiplano boliviano. Es un guiso sustancioso y nutritivo, ideal para enfrentar el clima frío de la región."
                        />
                    </div>
                </div>
            </div>
        </>
    );
};
function Chuquisaca(props) {
    return (
        <>
            <div className="m-5 p-4">
                <div className="flex flex-wrap justify-between m-1 p-1">
                    <div className="h-auto w-full sm:w-1/2  bg-gray-900 bg-opacity-50">
                        <Inventario 
                            titulo="Plato Paceño" 
                            descripcion=" El Plato Paceño es una comida muy completa y sabrosa, que generalmente se sirve en porciones grandes. Está compuesto por una variedad de ingredientes típicos de la región andina" 

                        />
                    </div>
                    <div className="h-auto w-full sm:w-1/2  bg-gray-300 bg-opacity-50">
                        <Inventario 
                            titulo="Sopa de Maní" 
                            descripcion="Es una sopa espesa y reconfortante, elaborada con maní (cacahuate) molido, carne de res o pollo, papas, zanahorias y fideos. Es un platillo tradicional y muy popular en las familias paceñas, especialmente en épocas frías." 
                        />
                    </div>
                    <div className="h-auto w-full sm:w-1/2  bg-gray-100 bg-opacity-50 ">
                        <Inventario 
                            titulo="Charquekan" 
                            descripcion="Este platillo está compuesto por charque (carne deshidratada y cocida), normalmente de llama o res, acompañada de mote (maíz cocido), papas y una ensalada de tomate y cebolla." 
                        />
                    </div>
                    <div className="h-auto w-full sm:w-1/2  bg-gray-600 bg-opacity-50">
                        <Inventario 
                            titulo="Papas con Queso" 
                            descripcion="Este es un platillo sencillo pero delicioso. Consiste en papas cocidas acompañadas de queso fresco rallado, a veces con cebollas picadas y perejil." 
                        />
                    </div>
                </div>
            </div>
            <div className="m-5 p-4">
                <div className="flex flex-wrap justify-between">
                    <div className="h-auto w-full sm:w-1/2 p-2  bg-gray-600 bg-opacity-50">
                        <Inventario 
                            titulo="Sillpanchic" 
                            descripcion=" Este guiso es característico de la región andina y se prepara con carne de res o cordero, papa, maíz y otros ingredientes locales, como arvejas. Es un plato lleno de sabor, muy representativo de La Paz."
                        />
                    </div>
                    <div className="h-auto w-full sm:w-1/2  bg-gray-200 bg-opacity-50 p-2">
                        <Inventario 
                            titulo="Api" 
                            descripcion="Una bebida caliente, espesa y dulce, hecha con maíz morado. El api se hierve con canela, clavo de olor y azúcar, y se consume comúnmente en el desayuno."
                        />
                    </div>
                    <div className="h-auto w-full sm:w-1/2  bg-gray-900 bg-opacity-50 p-3">
                        <Inventario 
                            titulo="Salteñas" 
                            descripcion="Aunque originarias de la ciudad de Cochabamba, las salteñas se disfrutan mucho en La Paz. Son empanadas rellenas de carne de res, pollo o cerdo, con un jugoso relleno de guiso y un toque de picante. Se comen generalmente en la mañana como desayuno o merienda."
                        />
                    </div>
                    <div className="h-auto w-full sm:w-1/2  bg-gray-600 bg-opacity-200 p-2">
                        <Inventario 
                            titulo="Mondongo" 
                            descripcion="El Mondongo es un plato tradicional de la región andina, especialmente popular en La Paz y otras áreas del altiplano boliviano. Es un guiso sustancioso y nutritivo, ideal para enfrentar el clima frío de la región."
                        />
                    </div>
                </div>
            </div>
        </>
    );
}
function Tarija(props) {
    return (
        <>
            <div className="m-5 p-4">
                <div className="flex flex-wrap justify-between m-1 p-1">
                    <div className="h-auto w-full sm:w-1/2  bg-gray-900 bg-opacity-50">
                        <Inventario 
                            titulo="Plato Paceño" 
                            descripcion=" El Plato Paceño es una comida muy completa y sabrosa, que generalmente se sirve en porciones grandes. Está compuesto por una variedad de ingredientes típicos de la región andina" 

                        />
                    </div>
                    <div className="h-auto w-full sm:w-1/2  bg-gray-300 bg-opacity-50">
                        <Inventario 
                            titulo="Sopa de Maní" 
                            descripcion="Es una sopa espesa y reconfortante, elaborada con maní (cacahuate) molido, carne de res o pollo, papas, zanahorias y fideos. Es un platillo tradicional y muy popular en las familias paceñas, especialmente en épocas frías." 
                        />
                    </div>
                    <div className="h-auto w-full sm:w-1/2  bg-gray-100 bg-opacity-50 ">
                        <Inventario 
                            titulo="Charquekan" 
                            descripcion="Este platillo está compuesto por charque (carne deshidratada y cocida), normalmente de llama o res, acompañada de mote (maíz cocido), papas y una ensalada de tomate y cebolla." 
                        />
                    </div>
                    <div className="h-auto w-full sm:w-1/2  bg-gray-600 bg-opacity-50">
                        <Inventario 
                            titulo="Papas con Queso" 
                            descripcion="Este es un platillo sencillo pero delicioso. Consiste en papas cocidas acompañadas de queso fresco rallado, a veces con cebollas picadas y perejil." 
                        />
                    </div>
                </div>
            </div>
            <div className="m-5 p-4">
                <div className="flex flex-wrap justify-between">
                    <div className="h-auto w-full sm:w-1/2 p-2  bg-gray-600 bg-opacity-50">
                        <Inventario 
                            titulo="Sillpanchic" 
                            descripcion=" Este guiso es característico de la región andina y se prepara con carne de res o cordero, papa, maíz y otros ingredientes locales, como arvejas. Es un plato lleno de sabor, muy representativo de La Paz."
                        />
                    </div>
                    <div className="h-auto w-full sm:w-1/2  bg-gray-200 bg-opacity-50 p-2">
                        <Inventario 
                            titulo="Api" 
                            descripcion="Una bebida caliente, espesa y dulce, hecha con maíz morado. El api se hierve con canela, clavo de olor y azúcar, y se consume comúnmente en el desayuno."
                        />
                    </div>
                    <div className="h-auto w-full sm:w-1/2  bg-gray-900 bg-opacity-50 p-3">
                        <Inventario 
                            titulo="Salteñas" 
                            descripcion="Aunque originarias de la ciudad de Cochabamba, las salteñas se disfrutan mucho en La Paz. Son empanadas rellenas de carne de res, pollo o cerdo, con un jugoso relleno de guiso y un toque de picante. Se comen generalmente en la mañana como desayuno o merienda."
                        />
                    </div>
                    <div className="h-auto w-full sm:w-1/2  bg-gray-600 bg-opacity-200 p-2">
                        <Inventario 
                            titulo="Mondongo" 
                            descripcion="El Mondongo es un plato tradicional de la región andina, especialmente popular en La Paz y otras áreas del altiplano boliviano. Es un guiso sustancioso y nutritivo, ideal para enfrentar el clima frío de la región."
                        />
                    </div>
                </div>
            </div>
        </>
    );
}

function Pando(props) {
    return (
        <>
            <div className="m-5 p-4">
                <div className="flex flex-wrap justify-between m-1  p-1">
                    <div className="h-auto w-full sm:w-1/2  bg-gray-900 bg-opacity-50">
                        <Inventario 
                            titulo="Plato Paceño" 
                            descripcion=" El Plato Paceño es una comida muy completa y sabrosa, que generalmente se sirve en porciones grandes. Está compuesto por una variedad de ingredientes típicos de la región andina" 

                        />
                    </div>
                    <div className="h-auto w-full sm:w-1/2  bg-gray-300 bg-opacity-50">
                        <Inventario 
                            titulo="Sopa de Maní" 
                            descripcion="Es una sopa espesa y reconfortante, elaborada con maní (cacahuate) molido, carne de res o pollo, papas, zanahorias y fideos. Es un platillo tradicional y muy popular en las familias paceñas, especialmente en épocas frías." 
                        />
                    </div>
                    <div className="h-auto w-full sm:w-1/2  bg-gray-100 bg-opacity-50 ">
                        <Inventario 
                            titulo="Charquekan" 
                            descripcion="Este platillo está compuesto por charque (carne deshidratada y cocida), normalmente de llama o res, acompañada de mote (maíz cocido), papas y una ensalada de tomate y cebolla." 
                        />
                    </div>
                    <div className="h-auto w-full sm:w-1/2  bg-gray-600 bg-opacity-50">
                        <Inventario 
                            titulo="Papas con Queso" 
                            descripcion="Este es un platillo sencillo pero delicioso. Consiste en papas cocidas acompañadas de queso fresco rallado, a veces con cebollas picadas y perejil." 
                        />
                    </div>
                </div>
            </div>
            <div className="m-5 p-4">
                <div className="flex flex-wrap justify-between">
                    <div className="h-auto w-full sm:w-1/2 p-2  bg-gray-600 bg-opacity-50">
                        <Inventario 
                            titulo="Sillpanchic" 
                            descripcion=" Este guiso es característico de la región andina y se prepara con carne de res o cordero, papa, maíz y otros ingredientes locales, como arvejas. Es un plato lleno de sabor, muy representativo de La Paz."
                        />
                    </div>
                    <div className="h-auto w-full sm:w-1/2  bg-gray-200 bg-opacity-50 p-2">
                        <Inventario 
                            titulo="Api" 
                            descripcion="Una bebida caliente, espesa y dulce, hecha con maíz morado. El api se hierve con canela, clavo de olor y azúcar, y se consume comúnmente en el desayuno."
                        />
                    </div>
                    <div className="h-auto w-full sm:w-1/2  bg-gray-900 bg-opacity-50 p-3">
                        <Inventario 
                            titulo="Salteñas" 
                            descripcion="Aunque originarias de la ciudad de Cochabamba, las salteñas se disfrutan mucho en La Paz. Son empanadas rellenas de carne de res, pollo o cerdo, con un jugoso relleno de guiso y un toque de picante. Se comen generalmente en la mañana como desayuno o merienda."
                        />
                    </div>
                    <div className="h-auto w-full sm:w-1/2  bg-gray-600 bg-opacity-200 p-2">
                        <Inventario 
                            titulo="Mondongo" 
                            descripcion="El Mondongo es un plato tradicional de la región andina, especialmente popular en La Paz y otras áreas del altiplano boliviano. Es un guiso sustancioso y nutritivo, ideal para enfrentar el clima frío de la región."
                        />
                    </div>
                </div>
            </div>
        </>
    );
}

function Beni(props) {
    return (
        <>
            <div className="m-5 p-4">
                <div className="flex flex-wrap justify-between m-1 p-1">
                    <div className="h-auto w-full sm:w-1/2  bg-gray-900 bg-opacity-50">
                        <Inventario 
                            titulo="Plato Paceño" 
                            descripcion=" El Plato Paceño es una comida muy completa y sabrosa, que generalmente se sirve en porciones grandes. Está compuesto por una variedad de ingredientes típicos de la región andina" 

                        />
                    </div>
                    <div className="h-auto w-full sm:w-1/2  bg-gray-300 bg-opacity-50">
                        <Inventario 
                            titulo="Sopa de Maní" 
                            descripcion="Es una sopa espesa y reconfortante, elaborada con maní (cacahuate) molido, carne de res o pollo, papas, zanahorias y fideos. Es un platillo tradicional y muy popular en las familias paceñas, especialmente en épocas frías." 
                        />
                    </div>
                    <div className="h-auto w-full sm:w-1/2  bg-gray-100 bg-opacity-50 ">
                        <Inventario 
                            titulo="Charquekan" 
                            descripcion="Este platillo está compuesto por charque (carne deshidratada y cocida), normalmente de llama o res, acompañada de mote (maíz cocido), papas y una ensalada de tomate y cebolla." 
                        />
                    </div>
                    <div className="h-auto w-full sm:w-1/2  bg-gray-600 bg-opacity-50">
                        <Inventario 
                            titulo="Papas con Queso" 
                            descripcion="Este es un platillo sencillo pero delicioso. Consiste en papas cocidas acompañadas de queso fresco rallado, a veces con cebollas picadas y perejil." 
                        />
                    </div>
                </div>
            </div>
            <div className="m-5 p-4">
                <div className="flex flex-wrap justify-between">
                    <div className="h-auto w-full sm:w-1/2 p-2  bg-gray-600 bg-opacity-50">
                        <Inventario 
                            titulo="Sillpanchic" 
                            descripcion=" Este guiso es característico de la región andina y se prepara con carne de res o cordero, papa, maíz y otros ingredientes locales, como arvejas. Es un plato lleno de sabor, muy representativo de La Paz."
                        />
                    </div>
                    <div className="h-auto w-full sm:w-1/2  bg-gray-200 bg-opacity-50 p-2">
                        <Inventario 
                            titulo="Api" 
                            descripcion="Una bebida caliente, espesa y dulce, hecha con maíz morado. El api se hierve con canela, clavo de olor y azúcar, y se consume comúnmente en el desayuno."
                        />
                    </div>
                    <div className="h-auto w-full sm:w-1/2  bg-gray-900 bg-opacity-50 p-3">
                        <Inventario 
                            titulo="Salteñas" 
                            descripcion="Aunque originarias de la ciudad de Cochabamba, las salteñas se disfrutan mucho en La Paz. Son empanadas rellenas de carne de res, pollo o cerdo, con un jugoso relleno de guiso y un toque de picante. Se comen generalmente en la mañana como desayuno o merienda."
                        />
                    </div>
                    <div className="h-auto w-full sm:w-1/2  bg-gray-600 bg-opacity-200 p-2">
                        <Inventario 
                            titulo="Mondongo" 
                            descripcion="El Mondongo es un plato tradicional de la región andina, especialmente popular en La Paz y otras áreas del altiplano boliviano. Es un guiso sustancioso y nutritivo, ideal para enfrentar el clima frío de la región."
                        />
                    </div>
                </div>
            </div>
        </>
    );
}



function Text() {
    const [isOpen, setIsOpen] = useState(false);
    const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 768);
    const location = useLocation();

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 768) {
                setIsSmallScreen(true); 
            } else {
                setIsSmallScreen(false); 
            }

            if (window.innerWidth > 768 && isOpen) {
                setIsOpen(false);
            }
        };

        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, [isOpen]); 
    const toggleOpen = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="h-screen">
            <>
                <NavBar abrirCerrar={toggleOpen}></NavBar>
                {isOpen && <MenuCito abrirCerrarNuevo={toggleOpen}></MenuCito>}
            </>

            <Routes>
                <Route path="/" element={(!isSmallScreen || location.pathname === "/") && <Uno />}></Route>
                <Route path="/dos" element={<Dos />}></Route>
                <Route path="/LaPaz" element={<LaPaz/>}></Route>
                <Route path="/Cochabamba" element={<Cochabamba/>}></Route>
                <Route path="/SantaCruz" element={<SantaCruz/>}></Route>
                <Route path="/Oruro" element={<Oruro/>}></Route>
                <Route path="/Potosi" element={<Potosi/>}></Route>
                <Route path="/Chuquisaca" element={<Chuquisaca/>}></Route>
                <Route path="/Tarija" element={<Tarija/>}></Route>
                <Route path="/Beni" element={<Beni/>}></Route>
                <Route path="/Pando" element={<Pando/>}></Route>
                <Route path="/Contacto" element={<Contacto/>}></Route>
        

            </Routes>
        </div>
    );
}

export default Text;

