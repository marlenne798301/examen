import React, { useState } from 'react';

const CalculadoraRio = () => {
  const [inversion, setInversion] = useState('');
  const [beneficio, setBeneficio] = useState('');
  const [resultadoROI, setResultadoROI] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    const inversionNum = parseFloat(inversion);
    const beneficioNum = parseFloat(beneficio);

    if (isNaN(inversionNum) || isNaN(beneficioNum)) {
      setResultadoROI('Error: Ingrese valores numéricos válidos.');
      return;
    }

    const roi = ((beneficioNum - inversionNum) / inversionNum) * 100;

    if (roi >= 0) {
      setResultadoROI(`ROI: ${roi.toFixed(2)}%`);
    } else {
      setResultadoROI(`ROI: -${(-roi).toFixed(2)}% (Pérdida)`);
    }
  };

  return (
    <div style={styles.container}>
      <h1>Calculadora de Retorno de Inversión</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="inversion">Inversión:</label>
        <input
          type="number"
          id="inversion"
          name="inversion"
          min="0"
          required
          value={inversion}
          onChange={(e) => setInversion(e.target.value)}
          style={styles.input}
        />
        <label htmlFor="beneficio">Beneficio:</label>
        <input
          type="number"
          id="beneficio"
          name="beneficio"
          min="0"
          required
          value={beneficio}
          onChange={(e) => setBeneficio(e.target.value)}
          style={styles.input}
        />
        <button type="submit" style={styles.button}>Calcular ROI</button>
      </form>
      <div className="resultado" style={styles.resultado}>{resultadoROI}</div>
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
    marginBottom: '10px',
    border: '1px solid #ccc'
  },
  button: {
    backgroundColor: '#4CAF50',
    color: 'white',
    padding: '10px 20px',
    border: 'none',
    cursor: 'pointer'
  },
  resultado: {
    fontWeight: 'bold',
    marginTop: '20px'
  }
};

export default CalculadoraRio;
