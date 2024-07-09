import React, { useState } from 'react';

const CalculadoraEficiencia = () => {
  const [eficacia, setEficacia] = useState('');
  const [eficiencia, setEficiencia] = useState('');
  const [resultado, setResultado] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    const eficaciaNum = parseFloat(eficacia);
    const eficienciaNum = parseFloat(eficiencia);

    if (eficaciaNum > 100 || eficienciaNum > 100) {
      alert('Los valores de eficacia y eficiencia no pueden ser mayores que 100%.');
      return;
    }

    const efectividad = (eficaciaNum * eficienciaNum) / 100;
    setResultado(`Efectividad: ${efectividad.toFixed(2)}%`);
  };

  return (
    <div style={styles.container}>
      <h1>Calculadora de Efectividad a partir de Eficacia y Eficiencia</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="eficacia">Eficacia:</label>
        <input
          type="number"
          id="eficacia"
          name="eficacia"
          min="0"
          max="100"
          step="0.01"
          required
          value={eficacia}
          onChange={(e) => setEficacia(e.target.value)}
          style={styles.input}
        />
        <label htmlFor="eficiencia">Eficiencia:</label>
        <input
          type="number"
          id="eficiencia"
          name="eficiencia"
          min="0"
          max="100"
          step="0.01"
          required
          value={eficiencia}
          onChange={(e) => setEficiencia(e.target.value)}
          style={styles.input}
        />
        <button type="submit" style={styles.button}>Calcular</button>
      </form>
      {resultado && <div style={styles.resultado}>{resultado}</div>}
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

export default CalculadoraEficiencia;
