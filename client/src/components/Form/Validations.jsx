const validations = (input) => {
    let errors = {}; 
    let regexImage = /^(http|https):\/\/[^\s]+(\.jpg|\.jpeg|\.png|\.gif)$/;

    if (!input.name) {
      errors.name = "Se requiere un nombre";
    } else if (input.name.length > 20) {
      errors.name = "Debe ser menor a 20 caracteres";
    } else if (/\s/.test(input.name)) {
      errors.name = "No debe contener espacios";
    }

    if (!regexImage.test(input.image)) errors.image = "Ingresa una URL válida"; 
    

    if (input.hp <= 0) {
      errors.hp = "No puede ser menor o igual a 0";
    } else if (input.hp >= 150){
      errors.hp = "No puede ser mayor a 150";
    }

     if (!input.attack) {
      errors.attack = "No puede estar vacío";
    } else if (input.attack <= 0) {
      errors.attack = "No puede ser menor o igual a 0";
    } else if (input.attack >= 150){
      errors.attack = "Debe ser menor a 150";
    }

     if (!input.defense) {
      errors.defense = "No puede estar vacío";
    } else if (input.defense <= 0) {
      errors.defense = "No puede ser menor o igual a 0";
    } else if (input.defense >= 150){
      errors.defense = "Debe ser menor a 150";
    }


    if (input.speed < 0) {
      errors.speed = "No puede ser menor a 0";
    }

    if (input.weight < 0) {
      errors.weight = "No puede ser menor a 0";
    }

    if (input.types?.length <= 0) {
      errors.types = "Debes elegir al menos 1 tipo"; 
    }
    

    if (!errors.types) errors.types = []; 

    return errors;
};

export default validations; 