import React, { useState } from 'react';
import swal from 'sweetalert';
import './estilos.css';
import img1 from './img/ibarra1.jpeg'
import img2 from './img/luna1.png'

const Alumnos = () => {
    const [openCollapse, setOpenCollapse] = useState(null);
  
    const toggleCollapse = (index) => {
      setOpenCollapse(openCollapse === index ? null : index);
    };
  
    const mostrarAlertaConImagen = (imagenUrl) => {
      swal({
        title: 'Foto profesional',
        buttons: false,
        content: {
          element: "img",
          attributes: {
            src: imagenUrl,
            className: "w-full",
            alt: "Imagen profesional"
          }
        },
        closeOnClickOutside: true,
      });
    };
    const abrirArchivo = (ruta) => {
        window.open(ruta, '_blank');
      };
  
    return (
      <div className="text-center">
        <h2 className="font-bold text-5xl my-12">Sección de Alumnos <strong>Parcial 1</strong></h2>
        <p className="mb-12 text-blue-900 font-bold animate-bounce">Haga click en el nombre para desplegar imagen y CV</p>
  
        <div className="space-y-8 ">
          {[
           { title: 'Ibarra Ortega Marlenne Imelda', img: img1, ruta: '/cv/ibarra_cv.pdf' },
           { title: 'Luna Hernandez Jose Luis', img: img2, ruta: '/cv/luna_cv.pdf' },
           { title: 'Gomez Hernandez Alan', img: '', ruta: '/cv/gomez_cv.pdf' },
          ].map((collapse, index) => (
            <div key={index} className=" border border-gray-300 rounded">
              <button
                className="w-full py-8 px-4 text-center font-semibold text-gray-700 hover:bg-gray-100"
                onClick={() => toggleCollapse(index)}
              >
                {collapse.title}
              </button>
              {openCollapse === index && (
                <div className="p-4 space-y-2">
                  <button
                    className="w-4/12 mx-6 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700"
                    onClick={() => mostrarAlertaConImagen(collapse.img)}
                  >
                    Mostrar Foto Profesional
                  </button>
                  <button
                    className="w-4/12 bg-green-500 text-white py-2 px-4 rounded hover:bg-green-700"
                    onClick={() => abrirArchivo(collapse.ruta)}
                    >
                    Descargar Curriculum
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    );
  };

export default Alumnos;
