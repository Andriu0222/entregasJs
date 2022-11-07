const helados = [];
class Helado {
    constructor(id, name, price) {
        this.id = id;
        this.name = name;
        this.price = price;
    }
}

const heladoUno = new Helado(1, 'Salpicon con helado', 7000);
helados.push(heladoUno);
const heladoDos = new Helado(2, 'Cono con una bola', 1500);
helados.push(heladoDos);
const heladoTres = new Helado(3, 'Ensalada de frutas', 8000);
helados.push(heladoTres);
const heladoCuatro = new Helado(4, 'Brownie con helado', 10000);
helados.push(heladoCuatro);
const heladoCinco = new Helado(5, 'Malteada', 6000);
helados.push(heladoCinco);

let flag;
let total = 0;
let opcionErrorPedido = false;
let opcionErrorHelado = false;
do {
    let pedidoInicial;
    if (!opcionErrorHelado) {

        function escogerHelado() {
            let saborHeladoUno;
            saborHeladoUno = prompt(`Con que sabor de helado quieres el salpicon ?
            1. Ron con pasas
            2. Brownie
            3. Vainilla
            4. Vainilla chips
            5. Cafe
            6. Chocolate
             `)
            return saborHeladoUno;
        }

        function escogerMalteada() {
            let saborMalteada;
            saborMalteada = prompt(`Que sabor de malteada quieres ?
            1. Chocolate
            2. Fresa
            3. Arequipe
            4. Vainilla
            5. Cafe
             `)
            return saborMalteada;
        }

        pedidoInicial = prompt(`Ingresa la opcion que quieras comprar
        1. Salpicon con Helado
        2. Cono con una bola
        3. Ensalada de frutas
        4. Brownie con helado
        5. Malteada        `);

        switch (pedidoInicial) {
            case "1":
                saborHeladoUno = escogerHelado();
                total = total + heladoUno.price;
                console.log("El total a pagar es", total);
                break;
            case "2":
                saborHeladoUno = escogerHelado();
                total = total + heladoDos.price;
                console.log("El total a pagar es", total);
                break;
            case "3":
                saborHeladoUno = escogerHelado();
                total = total + heladoTres.price;
                console.log("El total a pagar es", total);
                break;
            case "4":
                saborHeladoUno = escogerHelado();
                total = total + heladoCuatro.price;
                console.log("El total a pagar es", total);
                break;
            case "5":
                saborMalteada = escogerMalteada();
                total = total + heladoCinco.price;
                console.log("El total a pagar es", total);
                break;
            default:
                opcionErrorPedido = true;
                break;
        }
        if (opcionErrorPedido) {
            alert("Ingrese una opción valida");
            opcionErrorPedido = false;
            flag = "S";
            continue;
        } else {
            opcionErrorHelado = false;
        }
    }
    flag = prompt("Quieres hacer otro pedido ? S/N")

} while (flag == "S" || flag == "s")