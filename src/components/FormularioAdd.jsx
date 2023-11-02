import React, { useState } from "react";
import { v4 as uuid } from "uuid";

const FormularioAdd = ({ dispatch }) => {
  // Agregamos un state:
  const [error, setError] = useState(false);
  const [data, setData] = useState({
    nombre: "",
    numero: "",
    sexo: "",
    fechaNacimiento: "",
    avatar: "",
  });

  // Extraemos los valores del state:
  const { nombre, numero, sexo, fechaNacimiento, avatar } = data;

  // Función para manejar los cambios en el formulario:
  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  // Función para manejar el submit del formulario:
  const handleAdd = (e) => {
    e.preventDefault();
    // Validamos los datos:
    if (!validations()) {
      setError(true);
      return;
    }
    // Eliminamos el error:
    setError(false);
    // Agregamos el id:
    data.id = uuid();
    // Enviamos la acción:
    dispatch({
      type: "add",
      payload: data,
    });
    // Limpiamos el formulario:
    setData({
      nombre: "",
      numero: "",
      sexo: "",
      fechaNacimiento: "",
      avatar: "",
    });
  };

  const validations = () => {
    if (
      nombre.trim() === "" ||
      numero.trim() === "" ||
      sexo.trim() === "" ||
      fechaNacimiento.trim() === "" ||
      avatar.trim() === ""
    ) {
      return false;
    }
    return true;
  };

  return (
    <>
      {/* Agregar una alerta de error */}
      {error && (
        <div className="alert alert-danger text-center">
          Todos los campos son obligatorios
        </div>
      )}
      <div className="container col-md-6">
        <label className="mx-1 d-grid gap-2">
          Nombre: {""}
          <input
            onChange={handleChange}
            name="nombre"
            value={nombre}
            type="text"
            className="form-control"
            autoComplete="off"
          />
          {/* {!nombre && (
            <span className="text-danger">El nombre es requerido</span>
          )} */}
        </label>
        <label className="mx-1 d-grid gap-2">
          Número: {""}
          <input
            onChange={handleChange}
            name="numero"
            value={numero}
            type="text"
            className="form-control"
            autoComplete="off"
          />
          {/* {!numero && (
            <span className="text-danger">El número es requerido</span>
          )} */}
        </label>
        <label className="mx-1 d-grid gap-2">
          Sexo: {""}
          <select
            onChange={handleChange}
            name="sexo"
            id="sexo"
            className="form-select"
            value={sexo}
          >
            <option value="">Seleccione...</option>
            <option value="M">Masculino</option>
            <option value="F">Femenino</option>
            <option value="Otro">Otro</option>
          </select>
        </label>
        <label className="mx-1 d-grid gap-2">
          Fecha de nacimiento: {""}
          <input
            onChange={handleChange}
            name="fechaNacimiento"
            value={fechaNacimiento}
            type="date"
            className="form-control"
            autoComplete="off"
          />
        </label>
        <label className="mx-1 d-grid gap-2">
          Avatar: {""}
          <input
            onChange={handleChange}
            name="avatar"
            value={avatar}
            type="text"
            className="form-control"
            autoComplete="off"
          />
        </label>
        <div className="mx-1 d-grid gap-2">
          <button className="btn btn-dark mt-2" onClick={handleAdd}>
            Agregar
          </button>
        </div>
      </div>
    </>
  );
};

export default FormularioAdd;
