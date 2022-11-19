class Helados {
    constructor(nombre, precio) {
        this.nombre = nombre;
        this.precio = precio;
    }
}


const inputName = document.getElementById("inputName");
const inputPrice = document.getElementById("inputPrice");
const btnAdd = document.getElementById("btnAdd");
const orderDesc = document.getElementById("orderDescription");

let productos = [];

if (localStorage.getItem("helados")) {
    productos = JSON.parse(localStorage.getItem("helados"))
}

btnAdd.onclick = () => {
    const heladoNuevo = new Helados(inputName.value, inputPrice.value);
    productos.push(heladoNuevo);
    localStorage.setItem("helados", JSON.stringify(productos))
    inputName.value = "";
    inputPrice.value = "";
    console.log(productos)
}

// Seleccionar helado
const selectHelado = document.getElementById("Helado");
const heladosArray = JSON.parse(localStorage.getItem("helados"));

heladosArray.forEach(e => {
    const optionHelado = document.createElement('option');
    optionHelado.innerText = `${e.nombre}`
    optionHelado.setAttribute('id', `${e.nombre}`)
    selectHelado.append(optionHelado);
});

selectHelado.onchange = (e) => {
    orderDesc.innerHTML = "";
    const indexHelado = selectHelado.selectedIndex -1
    const helSelectd = heladosArray[indexHelado]
    orderDesc.append('Vas a comprar ', `${helSelectd.nombre}`, ' el total a pagar es: $', `${helSelectd.precio}`)
}

