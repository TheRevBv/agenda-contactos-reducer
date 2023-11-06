const contactoValidator = {
  nombre: {
    required: true,
    minLength: 3,
    maxLength: 20,
  },
  numero: {
    required: true,
    minLength: 10,
    maxLength: 10,
  },
  sexo: {
    required: true,
  },
  fechaNacimiento: {
    required: true,
  },
  avatar: {
    required: true,
  },
};

const contactoValidatorMessages = {
  nombre: {
    required: "El nombre es requerido",
    minLength: "El nombre debe tener al menos 3 caracteres",
    maxLength: "El nombre debe tener máximo 20 caracteres",
  },
  numero: {
    required: "El número es requerido",
    minLength: "El número debe tener 10 caracteres",
    maxLength: "El número debe tener 10 caracteres",
  },
  sexo: {
    required: "El campo sexo es requerido",
  },
  fechaNacimiento: {
    required: "El campo fecha de nacimiento es requerido",
  },
  avatar: {
    required: "El campo avatar es requerido",
  },
};

export { contactoValidator, contactoValidatorMessages };
