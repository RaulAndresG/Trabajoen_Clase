import React, { useState } from 'react';
import './Appp.css';

function TaskList() {
  const [formulario, setTasks] = useState([]);
  const [newForm, setnewForm] = useState('');

// Función para agregar un nuevo formulario o tarea
const addFormulario = () => {
  // Verificar si el nuevo formulario no está vacío
  if (newForm.trim() !== '') {
    // Agregar el contenido de newForm al estado formulario
    setTasks([...formulario, newForm]);
    
    // Limpiar el valor de newForm (establecerlo como cadena vacía)
    setnewForm('');
  }
};

// Función para editar un formulario o tarea existente en el estado formulario
const editFormulario = (index) => {
  // Solicitar al usuario que ingrese el nuevo contenido para el formulario
  const actualizarform = prompt('Editar form:', formulario[index]);

  // Verificar si el usuario ingresó algo (y no presionó "Cancelar")
  if (actualizarform !== null) {
    // Crear una copia del arreglo formulario
    const actualizarforms = [...formulario];

    // Reemplazar el elemento en la posición 'index' con el nuevo contenido
    actualizarforms[index] = actualizarform;

    // Actualizar el estado formulario con la nueva versión del arreglo
    setTasks(actualizarforms);
  }
};


// Función para eliminar un formulario o tarea existente en el estado formulario
const deleteFormulario = (index) => {
  // Crear una copia del arreglo formulario
  const actualizarform = [...formulario];

  // Utilizar el método splice para eliminar el elemento en la posición 'index'
  actualizarform.splice(index, 1);

  // Actualizar el estado formulario con la nueva versión del arreglo (sin el elemento eliminado)
  setTasks(actualizarform);
};


return (
  <div className="App">
    {/* Input para agregar nuevo formulario */}
    <input
      type="text"
      placeholder="Agregar Nuevo Formulario"
      value={newForm}
      onChange={(e) => setnewForm(e.target.value)}
    />
    <div className="button-container">
      {/* Botón para agregar un nuevo formulario */}
      <button className="add" onClick={addFormulario}>
        Agregar
      </button>
    </div>
    {/* Mapeo y visualización de formularios existentes */}
    {formulario.map((form, index) => (
      <div key={index} className="card">
        {form}
        <div className="button-container">
          {/* Botón para editar un formulario */}
          <button className="edit" onClick={() => editFormulario(index)}>
            Edit
          </button>
          {/* Botón para eliminar un formulario */}
          <button className="delete" onClick={() => deleteFormulario(index)}>
            Delete
          </button>
        </div>
      </div>
    ))}
  </div>
);

}

export default TaskList;
