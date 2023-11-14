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
    case edad >= 31 && edad <= 64:
      categoria = "adulto";
      break;
    case edad >= 65 && edad <= 100:
      categoria = "xubilado";
      break;
    default:
      alert("Idade fora do rango permitido.");
  }

  if (categoria) {
    alert("Eres un " + categoria + ".");
  }
}
