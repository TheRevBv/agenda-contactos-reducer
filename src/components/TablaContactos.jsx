/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

const getEdad = (fechaNacimiento) => {
  const fecha = new Date();
  const edad = fecha.getFullYear() - fechaNacimiento;
  return edad;
};

const TablaContactos = ({ contactos = [], dispatch }) => {
  // Definimos el método handleDelete:
  const handleDelete = (id) => {
    // Definimos el action para delete:
    const deleteAction = {
      type: "delete",
      payload: id,
    };

    dispatch(deleteAction);
  };

  return (
    <div>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Apellido</th>
            <th>Fecha de Nacimiento</th>
            <th>Edad</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {contactos.map((contacto) => (
            <tr key={contacto.id}>
              <td>{contacto.nombre}</td>
              <td>{contacto.apellido}</td>
              <td>{contacto.fechaNacimiento}</td>
              <td>{getEdad(contacto.fechaNacimiento)}</td>
              <td>
                <button
                  className="btn btn-danger"
                  onClick={() => handleDelete(contacto.id)}
                >
                  Borrar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TablaContactos;
