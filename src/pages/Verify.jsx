import { useState, useEffect } from 'react';

const Verify = () => {
  const [verificado, setVerificado] = useState(false);
  const [mensaje, setMensaje] = useState('Verificando tu correo...');
  const [error, setError] = useState(null);

  useEffect(() => {
    // Obtener el token de la URL
    const params = new URLSearchParams(window.location.search);
    const token = params.get('token');

    if (token) {
      verificarToken(token);
    } else {
      setError('No se proporcionó un token de verificación.');
    }
  }, []);

  const verificarToken = async (token) => {
    try {
      const response = await fetch(`https://back-belehrten.onrender.com/users/verificar?token=${token}`, {
        method: 'GET',
      });

      const data = await response.json();

      if (response.ok) {
        setVerificado(true);
        setMensaje(data.message);
      } else {
        setError(data.error || 'Error al verificar el correo.');
      }
    } catch (err) {
      setError('Error al conectar con el servidor. Inténtalo más tarde.');
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h1 style={styles.title}>Verificación de Correo Electrónico</h1>
        <p style={styles.text}>
          {error ? error : mensaje}
        </p>
        {verificado && (
          <p style={styles.success}>Tu correo ha sido verificado exitosamente. Puedes cerrar esta ventana.</p>
        )}
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundColor: '#f4f4f4',
  },
  card: {
    backgroundColor: '#fff',
    padding: '40px',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    textAlign: 'center',
    maxWidth: '400px',
    width: '100%',
  },
  title: {
    fontSize: '24px',
    color: '#333',
    marginBottom: '20px',
  },
  text: {
    fontSize: '16px',
    color: '#666',
    marginBottom: '30px',
  },
  button: {
    backgroundColor: '#4CAF50',
    color: 'white',
    border: 'none',
    padding: '12px 24px',
    fontSize: '16px',
    borderRadius: '5px',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
  },
  buttonHover: {
    backgroundColor: '#45a049',
  },
};

export default Verify;
