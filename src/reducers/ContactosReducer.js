/**
 * Reducer de Contactos que recibe dos parametros
 * @param {array} state
 * @param {string} action
 */
export const ContactosReducer = (state, action) => {
  // Toda action tiene u tipo para lo cual un switch-case para determinar que tipo es.
  switch (action.type) {
    case "add":
      // Payloadcontiene la información con los nuevos datos:
      return [...state, action.payload];
    case "delete":
      return state.filter((actual) => actual.id !== action.payload);
    default:
      return state;
  }
};
