//Crear variables a necesitar

let saldoCajero = 0;
let totalDinero = 0;

let deposito = {
    cinco:0,
    diez:0,
    veinte:0,
    cincuenta:0,
    cien:0,
}

//1. Crear un array de objetos con una lista de usuarios. Los administradores son tipo 1 y los clientes 2.
const usuarios = [
    {
    name: "Administrador Juan",
    documento: "1018",
    contrasena: "1234",
    tipoUser: 1,
    },
    {
    name: "Administrador Camilo",
    documento: "1019",
    contrasena: "papitas",
    tipoUser: 1,
    },
    {
    name: "Diana Perez",
    documento: "1050",
    contrasena: "ajiacocundiboyacense",
    tipoUser: 2,
    },
    {
    name: "Andrés Martínez",
    documento: "1056",
    contrasena: "numeritos2",
    tipoUser: 2,
    },
];

// Se inicializa el programa
iniciar();


function iniciar(){
    //Se solicitan los datos de inicio de sesión
    let documentIngreso = prompt("Ingrese su número de documento: ");
    let contrasenaIngreso = prompt("Ingrese su contraseña: ");
    console.log("papitas fritas");
    //Verificamos que el usuario exista en el arreglo
    const verificaruser = usuarios.find(user =>user.documento === documentIngreso);
    //console.log(verificaruser)
    //Si el usuario existe, confirmamos que su contraseña sea correcta y tomamos acciones según el tipo de usuario que sea
    if (verificaruser){
        if (verificaruser.contrasena === contrasenaIngreso){
            alert("Ha iniciado sesión correctamente");
            // Si el usuario es administrador
            if (verificaruser.tipoUser===1){
                alert("Usted es administrador");
                cargarDinero();
                iniciar()
            }
            // Si el usuario es cliente
            if (verificaruser.tipoUser===2){
                alert("Usted es cliente");
                if (saldoCajero === 0){
                    console.log("Cajero en mantenimiento, vuelva pronto.");
                    iniciar();
                }
                else{
                    retirarDinero();
                }
            }
        }

    }
    //Si el usuario no existe, se reinicia el programa.
    else{
        alert("El usuario no existe");
        iniciar();
    }
}



function cargarDinero(){
    console.log("entré")
    deposito.cinco +=parseInt(prompt("Digite el numero de billete de 5.000 que ingresa: "));
    deposito.diez += parseInt(prompt("Digite el numero de billete de 10.000 que ingresa: "));
    deposito.veinte += parseInt(prompt("Digite el numero de billete de 20.000 que ingresa: "));
    deposito.cincuenta += parseInt(prompt("Digite el numero de billete de 50.000 que ingresa: "));
    deposito.cien += parseInt(prompt("Digite el numero de billete de 100.000 que ingresa: "));
    console.log(deposito);
//deposito.forEach(e => {saldoCajero += deposito[e]});
(deposito.diez * 10000) + (deposito.cinco * 5000) + (deposito.veinte * 20000) +(deposito.cincuenta * 50000) +(deposito.cien * 100000) ;
depositoEnConsola();
}



function depositoEnConsola(){
    console.log("En billetes de $5.000 el cajero contiene $" + (deposito.cinco * 5000));
    console.log("En billetes de $10.000 el cajero contiene $" + (deposito.diez * 10000));
    console.log("En billetes de $20.000 el cajero contiene $" + (deposito.veinte * 20000));
    console.log("En billetes de $50.000 el cajero contiene $" + (deposito.cincuenta * 50000));
    console.log("En billetes de $100.000 el cajero contiene $" + (deposito.cien * 100000));
    console.log("El total de dinero en el cajero es:" + saldoCajero);
}


function retirarDinero(){

    cantidadRetirar=parseInt(prompt("Ingrese la cantidad de dinero que desea retirar: "));
    if(cantidadRetirar % 5000 === 0 ){
        if(saldoCajero>= cantidadRetirar){
            console.log("A diana le gusta el posole");
            const centenas= centenasDeMil(cantidadRetirar);
            const decenas = decenasDeMil(cantidadRetirar);
            const unidades = unidadesDeMil(cantidadRetirar);
            console.log(centenas);
            console.log(decenas);
            console.log(unidades);


        }
        else{
            console.log("Saldo insuficiente. Vuelva a intentarlo.");
            retirarDinero();
        }
    }
    else {
        console.log("Cajero solo permite multiplos de 5000");
    }
}

function centenasDeMil(cantidad){
    return Math.floor(cantidad/100000);
}

function decenasDeMil(cantidad){
    if (cantidad < 100000){
        return Math.floor(cantidad/10000);
    }
    else {
        const number = Math.floor(cantidad/10000);
        const tens = number % 10000;
    }
}

function unidadesDeMil(cantidad){
    return (cantidad % 10000)/1000;
}