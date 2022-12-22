//Crear variables a necesitar

let saldoCajero = 0;
let totalDinero = 0;
//Crear un array
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
    console.log("Datos ingresados con éxito");
    //Verificamos que el usuario exista en el arreglo
    const verificaruser = usuarios.find(user =>user.documento === documentIngreso);
    //Si el usuario existe, confirmamos que su contraseña sea correcta y tomamos acciones según el tipo de usuario que sea
    if (verificaruser){
        if (verificaruser.contrasena === contrasenaIngreso){
            alert("Ha iniciado sesión correctamente");
            // Si el usuario es administrador
            if (verificaruser.tipoUser===1){
                console.log("Usted es administrador");
                cargarDinero();
                iniciar();
            }
            // Si el usuario es cliente
            if (verificaruser.tipoUser===2){
                console.log("Usted es cliente");
                if (saldoCajero > 0){
                    console.log("hasta aquí funciona inicio");
                    retirarDinero();
                }
                //Si el cajero no posee dinero indicamos al usuario que no está disponible y volvemos a ejecutar el programa.
                else {
                    console.log("Cajero en mantenimiento, vuelva pronto.");
                    iniciar();
                }
            }
        }

    }
    //Si el usuario no existe, se reinicia el programa.
    else{
        console.log("El usuario no existe");
        iniciar();
    }
}


// Le pedimos al administrador que ingrese cuántos billetes desea cargar al cajero y los agregamos al arreglo. Sumamos los billetes multiplicados por sus denominaciones y obtenemos el total.
function cargarDinero(){
    console.log("entré")
    //billetes.forEach(function billeticos(){})
    deposito.cinco +=parseInt(prompt("Digite el numero de billete de 5.000 que ingresa: "));
    deposito.diez += parseInt(prompt("Digite el numero de billete de 10.000 que ingresa: "));
    deposito.veinte += parseInt(prompt("Digite el numero de billete de 20.000 que ingresa: "));
    deposito.cincuenta += parseInt(prompt("Digite el numero de billete de 50.000 que ingresa: "));
    deposito.cien += parseInt(prompt("Digite el numero de billete de 100.000 que ingresa: "));
    console.log(deposito);
    saldoCajero = saldoCajero + (deposito.diez * 10000) + (deposito.cinco * 5000) + (deposito.veinte * 20000) +(deposito.cincuenta * 50000) +(deposito.cien * 100000) ;
    depositoEnConsola();
}


// Mostramos en consola la cantidad de billetes por denominación que posee el cajero.
function depositoEnConsola(){
    console.log("En billetes de $5.000 el cajero contiene $" + (deposito.cinco * 5000));
    console.log("En billetes de $10.000 el cajero contiene $" + (deposito.diez * 10000));
    console.log("En billetes de $20.000 el cajero contiene $" + (deposito.veinte * 20000));
    console.log("En billetes de $50.000 el cajero contiene $" + (deposito.cincuenta * 50000));
    console.log("En billetes de $100.000 el cajero contiene $" + (deposito.cien * 100000));
    console.log("El total de dinero en el cajero es:" + saldoCajero);
}


function retirarDinero(){
    //Solicitamos al usuario  la cantidad que desea retirar
    const cantidadRetirar=parseInt(prompt("Ingrese la cantidad de dinero que desea retirar: "));
    //verificamos que el cajero sea capaz de entregar este dinero con las denominaciones disponibles. En caso contrario volvemos a solicitar un monto nuevo.
    if (cantidadRetirar % 5000 ===0){
        //Si la cantidad que el usuario desea retirar está disponible en el cajero iniciamos un ciclo para escoger los billetes a entregar.
        if(saldoCajero >= cantidadRetirar){
            depositoEnConsola();
            // Dividimos la cantidad solicitada entre los billetes de nuestra mayor denominación hasta el momento y lo redondeamos para saber cuántos billetes de esa denominación podemos entregar.
            let saldoPorDividir = cantidadRetirar;
            while(saldoPorDividir>0){
                const divisionCien = Math.floor(saldoPorDividir/100000);
                if (divisionCien > 0){
                    const billetesCienRetiro = divisionCien;
                    // Restamos los billetes a entregar del arreglo del dinero del cajero
                    deposito.cien = deposito.cien - billetesCienRetiro;
                    // Restamos el dinero que ya entregamos para saber cuánto nos falta por dar y lo pasamos a la siguiente denominación.
                    saldoPorDividir = saldoPorDividir - (billetesCienRetiro * 100000);
                    // Mostramos en consola cuántos billetes entregamos de la denominación correspondiente.
                    console.log("Se entregan "+ billetesCienRetiro + " billetes de cien.");
                }
                const divisionCincuenta = Math.floor(saldoPorDividir/50000);
                if (divisionCincuenta > 0){
                    const billetesCincuentaRetiro = divisionCincuenta;
                    deposito.cincuenta = deposito.cincuenta - billetesCincuentaRetiro;
                    saldoPorDividir = saldoPorDividir - (billetesCincuentaRetiro * 50000);
                    console.log("Se entregan "+ billetesCincuentaRetiro + " billetes de cincuenta.");
                    }
                const divisionVeinte = Math.floor(saldoPorDividir/20000);
                if (divisionVeinte > 0){
                    const billetesVeinteRetiro = divisionCincuenta;
                    deposito.veinte = deposito.veinte - billetesVeinteRetiro;
                    saldoPorDividir = saldoPorDividir - (billetesVeinteRetiro * 20000);
                    console.log("Se entregan "+ billetesVeinteRetiro + " billetes de veinte.");
                    }
                const divisionDiez = Math.floor(saldoPorDividir/10000);
                if (divisionDiez > 0){
                    const billetesDiezRetiro = divisionDiez;
                    deposito.diez = deposito.diez - billetesDiezRetiro;
                    saldoPorDividir = saldoPorDividir - (billetesDiezRetiro * 10000);
                    console.log("Se entregan "+ billetesDiezRetiro + " billetes de diez.");
                    }
                    const divisionCinco = Math.floor(saldoPorDividir/5000);
                    if (divisionCinco > 0){
                        const billetesCincoRetiro = divisionCinco;
                        deposito.cinco = deposito.cinco - billetesCincoRetiro;
                        saldoPorDividir = saldoPorDividir - (billetesCincoRetiro * 100000);
                        console.log("Se entregan "+ billetesCincoRetiro + " billetes de cinco.");
                    }
                }
            //Restamos la cantidad retirada del saldo del cajero y lo mostramos en consola.
            saldoCajero = saldoCajero - cantidadRetirar;
            console.log("El saldo restante es " + saldoCajero);
            iniciar();
                }
        else{
            console.log("Saldo insuficiente. Vuelva a intentarlo.");
            retirarDinero();
            }
    }
    else{
        console.log("Los billetes disponibles no permiten entregar esta cantidad. Vuelva a intentarlo.")
        retirarDinero();
    }

}