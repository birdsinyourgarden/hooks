import React, { useState } from 'react';
import UseForm from './components/UseForm'; 
import UseLoadData from './components/UseLoadData'; 

function App() {
  const [userData, setUserData] = useState({
    nombre: 'Juan Pérez',
    email: 'juan@example.com',
  });

  return (
    <div>
      <h1>Aplicación de Formularios</h1>
      
      <UseForm />

      <hr />
      
      <UseLoadData userData={userData} />
    </div>
  );
}

export default App;
