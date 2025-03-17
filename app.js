// Array para almacenar los nombres de los amigos
let amigos = [];

function agregarAmigo() {
  // Captura el valor del campo de entrada
  let input = document.getElementById("amigo");
  let nombre = input.value;
// Validar que el campo no esté vacío
  if (nombre === "") {
    alert("Por favor, inserte un nombre.");
    return; 
  }
// Actualizar el array de amigos
  amigo.push(nombre);
// Limpiar el campo de entrada
  input.value = "";
  input.focus();
  renderizarAmigos();
}

 function renderizarAmigos() {
  let lista = document.getElementById("listaAmigos");
// Limpiar la lista existente
  lista.innerHTML = "";

  // Iterar sobre el arreglo y agregar elementos a la lista
  for (let i = 0; i< amigo.length; i++) {
    // Crear un nuevo elemento de lista <li>
    let item = document.createElement("li");
    elemento.textContent = amigo[i];
    item.textContent = amigo[i]
    // Agregar el elemento <li> a la lista
    lista.appendChild(item);
  }
}

// sorteo AMIGO

function sortearAmigo() {
  if (amigo.length === "") {
    alert("No hay amigos para sortear.");
    return;
  }
let amigoSorteado = amigo[Math.floor(Math.random() * amigo.length)];
let resultado = document.getElementById("resultado");
resultado.innerHTML = `El amigo sorteado es: ${amigoSorteado}`;

let limpiarLista = document.getElementById("listaAmigos");
limpiarLista.innerHTML = "";
}
