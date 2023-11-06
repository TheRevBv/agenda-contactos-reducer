import { useState } from "react";
import { v4 as uuid } from "uuid";
import { useForm } from "react-hook-form";
import {
  contactoValidator,
  contactoValidatorMessages,
} from "../data/validators";

const FormularioAdd = ({ dispatch }) => {
  // Agregamos un state:
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    nombre: "",
    numero: "",
    sexo: "",
    fechaNacimiento: "",
    avatar: "",
  });

  const onSubmit = (data, e) => {
    // console.log(data);
    // console.log(e);
    const { nombre, numero, sexo, fechaNacimiento, avatar } = data;
    const newContacto = {
      id: uuid(),
      nombre,
      numero,
      sexo,
      fechaNacimiento,
      avatar,
    };
    // console.log(newContacto);
    dispatch({
      type: "add",
      payload: newContacto,
    });
    // Reseteamos el formulario:
    e.target.reset();
  };

  return (
    <>
      {/* Agregar una alerta de error */}
      {Object.keys(errors).length > 0 && (
        <div className="alert alert-danger text-center" role="alert">
          El formulario contiene errores
        </div>
      )}
      <h3 className="mt-3">Agregar Contacto</h3>
      <form className="container col-md-6" onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-3">
          <label className="mx-1 d-grid gap-2">Nombre: {""}</label>
          <input
            {...register("nombre", contactoValidator.nombre)}
            type="text"
            className="form-control"
            autoComplete="off"
          />
          {errors.nombre && (
            <span className="text-danger">
              {contactoValidatorMessages.nombre[errors.nombre.type]}
            </span>
          )}
        </div>
        <div className="mb-3">
          <label className="mx-1 d-grid gap-2">Número: {""}</label>
          <input
            {...register("numero", contactoValidator.numero)}
            type="text"
            className="form-control"
            autoComplete="off"
          />
          {errors.numero && (
            <span className="text-danger">
              {contactoValidatorMessages.numero[errors.numero.type]}
            </span>
          )}
        </div>
        <div className="mb-3">
          <label className="mx-1 d-grid gap-2">Sexo: {""}</label>
          <select
            id="sexo"
            className="form-select"
            {...register("sexo", contactoValidator.sexo)}
          >
            <option value="">Seleccione...</option>
            <option value="M">Masculino</option>
            <option value="F">Femenino</option>
            <option value="Otro">Otro</option>
          </select>
          {errors.sexo && (
            <span className="text-danger">
              {contactoValidatorMessages.sexo[errors.sexo.type]}
            </span>
          )}
        </div>
        <div className="mb-3">
          <label className="mx-1 d-grid gap-2">Fecha de nacimiento: {""}</label>
          <input
            {...register("fechaNacimiento", contactoValidator.fechaNacimiento)}
            type="date"
            className="form-control"
            autoComplete="off"
          />
          {errors.fechaNacimiento && (
            <span className="text-danger">
              {
                contactoValidatorMessages.fechaNacimiento[
                  errors.fechaNacimiento.type
                ]
              }
            </span>
          )}
        </div>
        <div className="mb-3">
          <label className="mx-1 d-grid gap-2">Avatar: {""}</label>
          <input
            {...register("avatar", contactoValidator.avatar)}
            type="text"
            className="form-control"
            autoComplete="off"
          />
          {errors.avatar && (
            <span className="text-danger">
              {contactoValidatorMessages.avatar[errors.avatar.type]}
            </span>
          )}
        </div>
        <div className="mx-1 d-grid gap-2">
          <input className="btn btn-dark mt-2" type="submit" value="Agregar" />
        </div>
      </form>
    </>
  );
};

export default FormularioAdd;
