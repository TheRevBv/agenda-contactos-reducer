import { useState } from "react";
import { v4 as uuid } from "uuid";
import { useForm } from "react-hook-form";

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
    // Validamos que los campos no estén vacíos:
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
      {error &&
        setTimeout(() => {
          setError(false);
        }, 3000) && (
          <div className="alert alert-danger text-center">
            Todos los campos son requeridos
          </div>
        )}
      <form className="container col-md-6">
        <div className="mb-3">
          <label className="mx-1 d-grid gap-2">Nombre: {""}</label>
          <input
            onChange={handleChange}
            name="nombre"
            value={nombre}
            type="text"
            className="form-control"
            autoComplete="off"
          />
          {!nombre && error && (
            <span className="text-danger">El nombre es requerido</span>
          )}
        </div>
        <div className="mb-3">
          <label className="mx-1 d-grid gap-2">Número: {""}</label>
          <input
            onChange={handleChange}
            name="numero"
            value={numero}
            type="text"
            className="form-control"
            autoComplete="off"
          />
          {!numero && error && (
            <span className="text-danger">El número es requerido</span>
          )}
        </div>
        <div className="mb-3">
          <label className="mx-1 d-grid gap-2">Sexo: {""}</label>
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
          {!sexo && error && (
            <span className="text-danger">El campo sexo es requerido</span>
          )}
        </div>
        <div className="mb-3">
          <label className="mx-1 d-grid gap-2">Fecha de nacimiento: {""}</label>
          <input
            onChange={handleChange}
            name="fechaNacimiento"
            value={fechaNacimiento}
            type="date"
            className="form-control"
            autoComplete="off"
          />
          {!fechaNacimiento && error && (
            <span className="text-danger">
              El campo fecha de nacimiento es requerido
            </span>
          )}
        </div>
        <div className="mb-3">
          <label className="mx-1 d-grid gap-2">Avatar: {""}</label>
          <input
            onChange={handleChange}
            name="avatar"
            value={avatar}
            type="text"
            className="form-control"
            autoComplete="off"
          />
          {!avatar && error && (
            <span className="text-danger">El campo avatar es requerido</span>
          )}
        </div>
        <div className="mx-1 d-grid gap-2">
          <button className="btn btn-dark mt-2" onClick={handleAdd}>
            Agregar
          </button>
        </div>
      </form>
    </>
  );
};

export default FormularioAdd;
