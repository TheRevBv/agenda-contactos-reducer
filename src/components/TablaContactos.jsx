/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

const getEdad = (fechaNacimiento) => {
  const fecha = new Date();
  const fechaNac = new Date(fechaNacimiento);
  const edad = fecha.getFullYear() - fechaNac.getFullYear();
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
            const { id, nombre, numero, sexo, fechaNacimiento, avatar } =
              contacto;
            const edad = getEdad(fechaNacimiento);
            const uid = id.split("-");
            return (
              <tr key={contacto.id}>
                <td>{uid[0]}</td>
                <td>
                  <img
                    src={avatar}
                    alt={nombre}
                    width={50}
                    height={50}
                    className="rounded-circle"
                  />
                </td>

                <td>{nombre}</td>
                <td>{numero}</td>
                <td>{sexo}</td>
                <td>{edad}</td>
                <td>
                  <button
                    className="btn btn-danger"
                    onClick={() => handleDelete(contacto.id)}
                  >
                    Borrar
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default TablaContactos;
