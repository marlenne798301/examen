import React, { useState } from 'react';

const CalculadoraEmpresarial = () => {
  const [unidadesProducidas, setUnidadesProducidas] = useState('');
  const [tiempoPlaneado, setTiempoPlaneado] = useState('');
  const [tiempoReal, setTiempoReal] = useState('');
  const [eficiencia, setEficiencia] = useState('');
  const [efectividad, setEfectividad] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    const unidadesProducidasNum = parseFloat(unidadesProducidas);
    const tiempoPlaneadoNum = parseFloat(tiempoPlaneado);
    const tiempoRealNum = parseFloat(tiempoReal);

    if (tiempoRealNum <= 0) {
      alert('El tiempo real no puede ser menor o igual a cero.');
      return;
    }

    const eficienciaCalc = (tiempoPlaneadoNum / tiempoRealNum) * 100;
    const efectividadCalc = (unidadesProducidasNum / tiempoPlaneadoNum) * 100;

    setEficiencia(eficienciaCalc.toFixed(2));
    setEfectividad(efectividadCalc.toFixed(2));
  };

  return (
    <div style={styles.container}>
      <h1>Calculadora de Efectividad en la Producción</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="unidades_producidas">Unidades producidas:</label>
        <input
          type="number"
          id="unidades_producidas"
          name="unidades_producidas"
          min="0"
          required
          value={unidadesProducidas}
          onChange={(e) => setUnidadesProducidas(e.target.value)}
          style={styles.input}
        />
        <label htmlFor="tiempo_planeado">Tiempo planeado:</label>
        <input
          type="number"
          id="tiempo_planeado"
          name="tiempo_planeado"
          min="0"
          step="0.01"
          required
          value={tiempoPlaneado}
          onChange={(e) => setTiempoPlaneado(e.target.value)}
          style={styles.input}
        />
        <label htmlFor="tiempo_real">Tiempo real:</label>
        <input
          type="number"
          id="tiempo_real"
          name="tiempo_real"
          min="0"
          step="0.01"
          required
          value={tiempoReal}
          onChange={(e) => setTiempoReal(e.target.value)}
          style={styles.input}
        />
        <button type="submit" style={styles.button}>Calcular</button>
      </form>
      <div style={styles.resultado}>
        {eficiencia && <p>Eficiencia: {eficiencia}%</p>}
        {efectividad && <p>Efectividad: {efectividad}%</p>}
      </div>
    </div>
  );
};

const styles = {
  container: {
    width: '500px',
    margin: '0 auto',
    padding: '20px',
    border: '1px solid #ccc',
    fontFamily: 'sans-serif'
  },
  input: {
    width: '100%',
    padding: '10px',
    border: '1px solid #ccc',
    boxSizing: 'border-box',
    marginBottom: '10px'
  },
  button: {
    backgroundColor: '#4CAF50',
    color: 'white',
    padding: '10px 20px',
    border: 'none',
    cursor: 'pointer'
  },
  resultado: {
    marginTop: '20px',
    border: '1px solid #ccc',
    padding: '10px'
  }
};

export default CalculadoraEmpresarial;
