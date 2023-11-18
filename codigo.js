let edad = prompt("Por favor, introduce a túa idade:");
edad = parseInt(edad);

if (isNaN(edad)) {
  alert(
    "Por favor, introduce un número válido para a idade. Commit para arreglar Issue"
  );
} else {
  let categoria;

  switch (true) {
    case edad >= 0 && edad <= 12:
      categoria = "ninhO";
      break;
    case edad >= 13 && edad <= 18:
      categoria = "muchachO";
      break;
    case edad >= 19 && edad <= 30:
      categoria = "xoveN";
      break;
    case edad >= 31 && edad <= 100:
      categoria = "adulto";
      break;
    default:
      alert("Modificado en rebase.");
  }

  if (categoria) {
    alert("Eres un " + categoria + "editada en rama rebaseB.");
  }
}
