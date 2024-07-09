import React, { useState } from 'react';
import './estilos.css';
import CalculadoraEfectividad from './CalculadoraEfectividad';
import CalculadoraEficiencia from './CalculadoraEficiencia';
import CalculadoraEmpresarial from './CalculadoraEmpresarial';
import CalculadoraRio from './CalculadoraRio';

const Calculadoras = () => {
  const [mostrarEfectividad, setMostrarEfectividad] = useState(false);
  const [mostrarEficiencia, setMostrarEficiencia] = useState(false);
  const [mostrarEmpresarial, setMostrarEmpresarial] = useState(false);
  const [mostrarRio, setMostrarRio] = useState(false);

  const mostrarContenido = (calculadora) => {
    setMostrarEfectividad(calculadora === 'efectividad');
    setMostrarEficiencia(calculadora === 'eficiencia');
    setMostrarEmpresarial(calculadora === 'empresarial');
    setMostrarRio(calculadora === 'rio');
  };

  return (
    <div style={{ textAlign: 'center' }}>
      <h2 className='font-bold text-5xl my-12'>Calculadoras <strong>Parcial 2</strong> </h2>
      <p className='mb-12 text-blue-900 font-bold animate-bounce'>Haga click en el botón para abrir la calculadora correspondiente</p>
      <div>
        <div style={{ display: 'inline-block' }}>
          <button className='m-6 bg-transparent hover:bg-cyan-500 text-cyan-700 font-semibold hover:text-white text-xl py-4 px-8 border border-cyan-500 hover:border-transparent rounded' onClick={() => mostrarContenido('efectividad')}>Efectividad</button>
          <button className='m-6 bg-transparent hover:bg-sky-500 text-sky-700 font-semibold hover:text-white text-xl py-4 px-8 border border-sky-500 hover:border-transparent rounded' onClick={() => mostrarContenido('eficiencia')}>Eficiencia</button>
          <button className='m-6 bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white text-xl py-4 px-8 border border-blue-500 hover:border-transparent rounded' onClick={() => mostrarContenido('empresarial')}>Empresarial</button>
          <button className='m-6 bg-transparent hover:bg-indigo-500 text-indigo-700 font-semibold hover:text-white text-xl py-4 px-8 border border-indigo-500 hover:border-transparent rounded' onClick={() => mostrarContenido('rio')}>Rio</button>
        </div>
      </div>
      <div className='my-12'/>

      <div id="calculadora-container" className='mt-12'>
        {mostrarEfectividad && <CalculadoraEfectividad />}
        {mostrarEficiencia && <CalculadoraEficiencia />}
        {mostrarEmpresarial && <CalculadoraEmpresarial />}
        {mostrarRio && <CalculadoraRio />}
      </div>

    </div>
  );
}

export default Calculadoras;
