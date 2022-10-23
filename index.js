const precioSalpiconHelado = 7000;
const precioConoUnaBola = 1500;
const precioEnsaladaFrutas = 8000;
const precioBrownieHelado = 10000;
const precioMalteada = 6000;

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
                total = total + precioSalpiconHelado;
                console.log("El total a pagar es", total);
                break;
            case "2":
                saborHeladoUno = escogerHelado();
                total = total + precioConoUnaBola;
                console.log("El total a pagar es", total);
                break;
            case "3":
                saborHeladoUno = escogerHelado();
                total = total + precioEnsaladaFrutas;
                console.log("El total a pagar es", total);
                break;
            case "4":
                saborHeladoUno = escogerHelado();
                total = total + precioBrownieHelado;
                console.log("El total a pagar es", total);
                break;               
            case "5":
                saborMalteada = escogerMalteada();
                total = total + precioMalteada;
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
    flag = prompt ("Quieres hacer otro pedido ? S/N")

} while (flag == "S" || flag == "s")