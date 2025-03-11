import React, { useEffect, useState } from 'react';

function UseLoadData({ userData }) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadData = () => {
      if (userData) {
        setLoading(true);
        setError(null);
        try {
          // Aquí simula la carga de datos, por ejemplo, solo asignamos userData.
          setData(userData);
        } catch (error) {
          setError("Error al cargar los datos");
        } finally {
          setLoading(false);
        }
      }
    };

    loadData();
  }, [userData]);

  if (loading) return <p>Cargando...</p>;
  if (error) return <p>{error}</p>;
  if (!data) return <p>No se encontraron datos.</p>;

  return (
    <div>
      <h2>Datos del Usuario</h2>
      <p><strong>Nombre:</strong> {data.nombre}</p>
      <p><strong>Email:</strong> {data.email}</p>
    </div>
  );
}

export default UseLoadData;


