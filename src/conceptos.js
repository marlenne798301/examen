import React from 'react';
import swal from 'sweetalert';
import './estilos.css';
import img1 from './img/riesgos.jpg'

const Conceptos = () => {

  const mostrarAlerta = (concepto) => {
    swal({
      title: 'Definicion  ',
      buttons: false,
      content: {
        element: "div",
        attributes: {
          innerHTML: `
            <div class="text-dark-800 text-justify tracking-wide leading-relaxed font-sans">
              ${concepto.replace(/\n/g, '<br>')}
            </div>
            <button class="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700" onclick="swal.close()">Cerrar</button>
          `
        }
      },
      closeOnClickOutside: true,
    });

  };

  const mostrarAlertaConImagen = (imagenUrl) => {
    swal({
      title: 'Modelo de Creación Propia',
      buttons: false,
      content: {
        element: "img",
        attributes: {
          src: imagenUrl,
          className: "h-full",
          alt: "Imagen del concepto"
        }
      },
      closeOnClickOutside: true,
    });
  };
  

  return (
    <div style={{ textAlign: 'center' }}>
      <h2 className='font-bold text-5xl my-12'>Conceptos Básicos <strong>Parcial 1</strong> </h2>
      <p className='mb-12 text-blue-900 font-bold animate-bounce'>Haga click en el boton para desplegar la descripcion de cada concepto</p>
      <div>
        <div style={{ display: 'inline-block' }}>
          <button className='m-6 bg-transparent hover:bg-cyan-500 text-cyan-700 font-semibold hover:text-white text-xl py-4 px-8 border border-cyan-500 hover:border-transparent rounded ' onClick={() => mostrarAlerta('Concepto 1: La Administración es el empleo de la autoridad para organizar, dirigir y controlar a subordinados responsables (y consiguiente, a los grupos que ellos comandan), con el fin de que todos los servicios que se prestan sean debidamente coordinados en el logro del fin de la empresa.\n\nConcepto 2: Se centra en las organizaciones humanas, así como las técnicas y procedimientos disponibles para su planificación, organización, dirección y control de sus recursos, en pro de obtener de ellos el mayor beneficio posible.\n\nConcepto 3: La administración eficaz se refiere a lograr los objetivos de la organización de manera efectiva y eficiente mediante la coordinación de recursos y procesos.')}>Administración</button>
          <button className='m-6 bg-transparent hover:bg-sky-500 text-sky-700 font-semibold hover:text-white text-xl py-4 px-8 border border-sky-500 hover:border-transparent rounded ' onClick={() => mostrarAlerta('Concepto 1: Conjunto de entradas y salidas necesarias para lograr un objetivo concreto. Los proyectos pueden variar de sencillos a complejos y pueden gestionarlos una persona o cien.\n\n Concepto 2:Forma de planear, organizar, dirigir y controlar una serie de actividades realizadas por un grupo de personas que tienen un objetivo específico. ')}>Administración de Proyectos</button>
          <button className='m-6 bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white text-xl py-4 px-8 border border-blue-500 hover:border-transparent rounded ' onClick={() => mostrarAlerta('Concepto 1: Proceso de comunicación entre al menos dos partes dirigido a alcanzar un acuerdo sobre intereses que se perciben como divergentes. \n\n Concepto 2: Es un procedimiento, en el que dos o más personas que tienen intereses comunes, intentan llegar a un acuerdo sobre aquellos puntos en que no concuerdan, con la intención de resolver las diferencias y lograr un convenio beneficioso para las dos partes. ')}>Negociación</button>
          <button className='m-6 bg-transparent hover:bg-indigo-500 text-indigo-700 font-semibold hover:text-white text-xl py-4 px-8 border border-indigo-500 hover:border-transparent rounded ' onClick={() => mostrarAlerta('Concepto: Conjunto de funciones administrativas dentro de una organización u empresa que buscan aprovechar al máximo los recursos existentes de forma correcta, rápida y eficaz. El proceso administrativo se compone de cuatro etapas elementales: planeación, organización, ejecución y control.')}>Proceso Administrativo</button>
        </div>
        <div style={{ display: 'inline-block' }}>
          <button className='m-6 bg-transparent hover:bg-violet-500 text-violet-700 font-semibold hover:text-white text-xl py-4 px-8 border border-violet-500 hover:border-transparent rounded ' onClick={() => mostrarAlerta('Concepto 1: Es una práctica comunicativa e interaccional, en la cual el manipulador ejerce control sobre otras personas, generalmente en contra de su voluntad o en contra de sus intereses.\n\n Concepto 2: Acción realizada con las manos sobre un objeto. Control de la conducta de otros por medio de métodos encubiertos y con fines desconocidos para ellos.')}>Manipulación</button>
          <button className='m-6 bg-transparent hover:bg-purple-500 text-purple-700 font-semibold hover:text-white text-xl py-4 px-8 border border-purple-500 hover:border-transparent rounded ' onClick={() => mostrarAlerta('Concepto: Grado de consecución de objetivos fijados de antemano que tenga un proceso, una dinámica de trabajo o incluso una persona. Por lo tanto, algo es eficaz cuando obtiene el resultado esperado.')}>Eficacia</button>
          <button className='m-6 bg-transparent hover:bg-fuchsia-500 text-fuchsia-700 font-semibold hover:text-white text-xl py-4 px-8 border border-fuchsia-500 hover:border-transparent rounded ' onClick={() => mostrarAlerta('Concepto: Es la capacidad que tiene una persona o un proceso para utilizar adecuadamente las herramientas con el fin de lograr los objetivos marcados; ejecuta solo las acciones necesarias.')}>Eficiencia</button>
          <button className='m-6 bg-transparent hover:bg-pink-500 text-pink-700 font-semibold hover:text-white text-xl py-4 px-8 border border-pink-500 hover:border-transparent rounded ' onClick={() => mostrarAlerta('Riesgos\n\n Concepto 1: Es la probabilidad de que una amenaza se convierta en un desastre. La vulnerabilidad o las amenazas, por separado, no representan un peligro. Pero si se juntan, se convierten en un riesgo, o sea, en la probabilidad de que ocurra un desastre. \n\n Concepto 2: Se define como la combinación de la probabilidad de que se produzca un evento y sus consecuencias negativas. Los factores que lo componen son la amenaza y la vulnerabilidad. \n\n Conceptos 3: : Proximidad o posibilidad de que suceda un daño o perjuicio y sus posibles consecuencias. Este daño puede afectar a una persona o grupo y es el resultado de un suceso o una acción \n\n Riesgos en Proyectos \n\n Concepto 1: Es todo aquello que pueda afectar al éxito del proyecto, puede ser algo que cause retrasos en el cronograma del proyecto, que haga que se exceda el presupuesto previsto o cualquier cosa que derive en la disminución del rendimiento del equipo de un modo u otro.\n\n Concepto 2: Son los eventos o condiciones inciertas que, en caso de ocurrir, tiene un efecto positivo o negativo sobre los objetivos de un proyecto.')}>Riesgos en Proyectos</button>
          <button className='m-6 bg-transparent hover:bg-rose-500 text-rose-700 font-semibold hover:text-white text-xl py-4 px-8 border border-rose-500 hover:border-transparent rounded 'onClick={() => mostrarAlertaConImagen(img1)} >Modelo de Creación Propia</button>
        </div>
        {/* <div style={{ display: 'inline-block' }}>
          <button style={{ margin: '5px' }} onClick={() => mostrarAlertaConImagen('./img/riesgos.jpg')}>Modelo de Creación Propia</button>
        </div> */}
      </div>
      <div className='my-12'/>

      <div className='mt-12'>
        <a href="https://timetreeapp.com/calendars/G5eiqZxxsAWi" target='_blank' className=' bg-transparent hover:bg-green-500 text-green-700 font-semibold hover:text-white text-xl py-4 px-8 border border-green-500 hover:border-transparent rounded' rel="noreferrer">Link directo al administrador de proyectos elegido</a>
      </div>
    </div>
  );
}

export default Conceptos;
