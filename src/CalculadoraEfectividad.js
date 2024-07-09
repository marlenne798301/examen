import React, { useState } from 'react';

const CalculadoraEfectividad = () => {
  const [realizados, setRealizados] = useState('');
  const [total, setTotal] = useState('');
  const [resultado, setResultado] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    const realizadosNum = parseFloat(realizados);
    const totalNum = parseFloat(total);

    if (realizadosNum > totalNum) {
      alert('El número de logros alcanzados no puede ser mayor que el número total de objetivos.');
      return;
    }

    const efectividad = (realizadosNum / totalNum) * 100;
    setResultado(`Efectividad: ${efectividad.toFixed(2)}%`);
  };

  return (
    <div style={styles.container}>
      <h1>Calculadora de Efectividad</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="realizados">Logros alcanzados:</label>
        <input
          type="number"
          id="realizados"
          name="realizados"
          min="0"
          required
          value={realizados}
          onChange={(e) => setRealizados(e.target.value)}
          style={styles.input}
        />
        <label htmlFor="total">Total de objetivos:</label>
        <input
          type="number"
          id="total"
          name="total"
          min="1"
          required
          value={total}
          onChange={(e) => setTotal(e.target.value)}
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

export default CalculadoraEfectividad;
