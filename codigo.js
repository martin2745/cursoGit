let edad = prompt("Por favor, introduce a túa idade:");
edad = parseInt(edad);

if (isNaN(edad)) {
  alert("Por favor, introduce un número válido para a idade.");
} else {
  let categoria;

  switch (true) {
    case edad >= 0 && edad <= 12:
      categoria = "neno";
      break;
    case edad >= 13 && edad <= 18:
      categoria = "adolescente";
      break;
    case edad >= 19 && edad <= 30:
      categoria = "xoven";
      break;
    case edad >= 31 && edad <= 100:
      categoria = "adulto";
      break;
    default:
      alert("Modificado en master.");
  }

  if (categoria) {
    alert("Eres un " + categoria + ".");
  }
}
