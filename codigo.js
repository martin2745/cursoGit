let edad = prompt("Por favor, introduce a túa idade:");
edad = parseInt(edad);

if (isNaN(edad)) {
  alert("Por favor, introduce un número válido para a idade.");
} else {
  let categoria;

  switch (true) {
    case edad >= 0 && edad <= 12:
      categoria = "ninho";
      break;
    case edad >= 13 && edad <= 18:
      categoria = "muchacho";
      break;
    case edad >= 19 && edad <= 30:
      categoria = "xoven";
      break;
    case edad >= 31 && edad <= 100:
      categoria = "adulto";
      break;
    default:
      alert("Modificado en ramaConflicto.");
  }

  if (categoria) {
    alert("Eres un " + categoria + ".");
  }
}
