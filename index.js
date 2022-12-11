const verMenu = document.querySelector(".Helados__Content--link");
const idMenu = document.getElementById("Menu");
const itemsDiv = document.querySelector(".Items");

verMenu.addEventListener("click", (e) => {
    e.preventDefault();
    idMenu.scrollIntoView({ behavior: "smooth" })
})

const Helados = async () => {
    const heladosFetch = await fetch('helados.json');
    const heladosJson = await heladosFetch.json();
    heladosJson.forEach(hel => {
        const { id, name, price, descripcion, image } = hel;
        itemsDiv.innerHTML +=
            ` 
                <li>
                    <div class="Items__Image">
                        <h2>${name} </h2>                       
                        <img src="./assets/images/helados/${hel.image}" alt="" />
                    </div>
                    <div class="Item__Info">
                        <span class="Item__Description"> ${descripcion} </span>
                        <span class="Item__Price"> <strong>Precio: </strong> ${price} </span>                       
                    </div>
                </li>
            `
    });
}

Helados();






