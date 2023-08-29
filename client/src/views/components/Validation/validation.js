
  
  
  const validation = (input) => {
    let errors = {};
    
  let noEmpty = /\S+/;
  let validateName = /^[a-zA-ZñÑ]*$/;
  let validateNum = /^\d+$/;
  let validateUrl = /^(ftp|http|https):\/\/[^\s/$.?#].[^\s]*$/;
  
    if (!noEmpty.test(input.name) || !validateName.test(input.name) || input.name.length < 3) {
      errors.name = "Nombre necesario. Mayor de 3 letras y unico"
    }

    if (!validateNum.test(input.hp) || parseInt(input.hp) < 1 || parseInt(input.hp) > 999) {
      errors.hp = "ingrese un HP entre 1 y 999"
    }

    if (!validateUrl.test(input.sprites)) {
      errors.sprites = "URL inválida o no cumple con el patrón requerido";
    }
    if (!validateNum.test(input.attack) || parseInt(input.attack) < 1 || parseInt(input.attack) > 999) {
      errors.attack = "ingrese un Attack entre 1 y 999"
    }
    if (!validateNum.test(input.defense) || parseInt(input.defense) < 1 || parseInt(input.defense) > 999) {
      errors.defense = "ingrese un Defense entre 1 y 999"
    }
    if (!validateNum.test(input.speed) || parseInt(input.speed) < 1 || parseInt(input.speed) > 999) {
      errors.speed = "ingrese un Speed entre 1 y 999"
    }
    if (!validateNum.test(input.height) || parseInt(input.height) < 1 || parseInt(input.height) > 999) {
      errors.height = "ingrese un Height entre 1 y 999"
    }
    if (!validateNum.test(input.weight) || parseInt(input.weight) < 1 || parseInt(input.weight) > 999) {
      errors.weight = "ingrese un Weight entre 1 y 999"
    }
    return errors
  }
export default validation