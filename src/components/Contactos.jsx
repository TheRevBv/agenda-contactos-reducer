/* eslint-disable no-unused-vars */
import React, { useEffect, useReducer, useState } from "react";
import { ContactosReducer } from "../reducers/ContactosReducer";

import FormularioAdd from "./FormularioAdd";
import TablaContactos from "./TablaContactos";

// Datos de prueba:
// const contactos = [
//   {
//     id: "c1",
//     nombre: "Raúl",
//     numero: "477539652",
//   },
//   {
//     id: "c2",
//     nombre: "Ana",
//     numero: "477539652",
//   },
// ];

const init = () => {
  const contactos = localStorage.getItem("contactos");
  return contactos ? JSON.parse(contactos) : [];
};

const Contactos = () => {
  // Creamos el useReducer pasándole el Reducer y un initial state:
  const [state, dispatch] = useReducer(ContactosReducer, [], init);

  useEffect(() => {
    localStorage.setItem("contactos", JSON.stringify(state));
  }, [state]);

  const [formView, setFormView] = useState(false);

  return (
    <div className="container mt-3">
      <button
        onClick={() => setFormView(!formView)}
        className="btn btn-success"
      >
        {!formView ? "+ Agregar Contacto" : "- Cerrar Formulario"}
      </button>
      {formView && <FormularioAdd dispatch={dispatch} />}
      <TablaContactos contactos={state} dispatch={dispatch} />
    </div>
  );
};

export default Contactos;
