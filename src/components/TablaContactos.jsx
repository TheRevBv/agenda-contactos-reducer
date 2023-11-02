/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

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
    <table className="table col-md-6">
      <thead>
        <tr>
          <th>ID</th>
          <th>Avatar</th>
          <th>Nombre</th>
          <th>Número</th>
          <th>Sexo</th>
          <th>Edad</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        {contactos.map((contacto) => {
          const finalId = contacto.id.split("-");

          return (
            <tr key={contacto.id}>
              <td>{finalId[0]}</td>
              <td>
                <img
                  src={contacto.avatar}
                  alt={contacto.nombre}
                  width={50}
                  height={50}
                  className="rounded-circle"
                />
              </td>
              <td>{contacto.nombre}</td>
              <td>{contacto.numero}</td>
              <td>{contacto.sexo}</td>
              <td>{2023 - contacto.fechaNacimiento}</td>
              <td>
                <button
                  className="btn btn-danger"
                  onClick={() => handleDelete(contacto.id)}
                >
                  Eliminar
                </button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default TablaContactos;
