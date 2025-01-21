//ejercicio 1
let texto = document.getElementById("textoQueCambia");
let boton = document.querySelector("button")
const textoCambio = () => {
  texto.textContent = "Texto modificado con JavaScript";
};
boton.addEventListener("click", textoCambio);

//ejercicio 2
const button2 = document.getElementById('button2');
const ul = document.querySelector('ul');

button2.addEventListener('click', function() {
  const newLi = document.createElement('li');
  newLi.textContent = 'nuevo elemento';
  ul.appendChild(newLi);
  alert('Se ha agregado un nuevo elemento');
});