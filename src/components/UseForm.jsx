// UseForm.jsx
import React from 'react';
import { useForm } from 'react-hook-form';

function UseForm() {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log(data); // Puedes ver los datos del formulario en la consola
  };

  return (
    <div>
      <h2>Formulario de contacto</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="nombre">Nombre:</label>
          <input
            type="text"
            id="nombre"
            {...register('nombre', { required: 'Este campo es obligatorio' })}
          />
          {errors.nombre && <p>{errors.nombre.message}</p>}
        </div>
        
        <div>
          <label htmlFor="email">Correo electrónico:</label>
          <input
            type="email"
            id="email"
            {...register('email', {
              required: 'Este campo es obligatorio',
              pattern: {
                value: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/,
                message: 'Por favor ingresa un correo válido'
              }
            })}
          />
          {errors.email && <p>{errors.email.message}</p>}
        </div>

        <div>
          <button type="submit">Enviar</button>
        </div>
      </form>
    </div>
  );
}

export default UseForm;

