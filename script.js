let pantalla = document.getElementById("pantalla");

const num1 = document.getElementById("num1");
const num2 = document.getElementById("num2");
const num3 = document.getElementById("num3");
const num4 = document.getElementById("num4");
const num5 = document.getElementById("num5");
const num6 = document.getElementById("num6");
const num7 = document.getElementById("num7");
const num8 = document.getElementById("num8");
const num9 = document.getElementById("num9");
const num0 = document.getElementById("num0");
const num00 = document.getElementById("num00");
const igual = document.getElementById("igual");
const punto = document.getElementById("punto");
const suma = document.getElementById("sum");
const resta = document.getElementById("resta");
const multiplicacion = document.getElementById("multi");
const division = document.getElementById("divi");
const deshacer = document.getElementById("borrar");
const limpiar = document.getElementById("limpiar");

let numAnt;
let operador;
let numDes;

function agregarNumero(numero) {
    pantalla.value += numero;
}

function operacion(op){
    operador = op;
    numAnt = Number(pantalla.value);
    pantalla.value = "";
}

function ig() {
    numDes = Number(pantalla.value);

    let resultado;

    if (operador === "+") {
        resultado = numAnt + numDes;
    } else if (operador === "-") {
        resultado = numAnt - numDes;
    } else if (operador === "x") {
        resultado = numAnt * numDes;
    } else if (operador === "÷") {
        resultado = numAnt / numDes;
    }
    if (resultado === undefined) {
        return;
    } else if (!Number.isFinite(resultado)) {
        pantalla.value = "Math Error";
    } else {
        pantalla.value = resultado;
    }   
    numAnt = undefined;
    operador = undefined;
    numDes = undefined;
}

num1.addEventListener("click", () => agregarNumero(1));
num2.addEventListener("click", () => agregarNumero(2));
num3.addEventListener("click", () => agregarNumero(3));
num4.addEventListener("click", () => agregarNumero(4));
num5.addEventListener("click", () => agregarNumero(5));
num6.addEventListener("click", () => agregarNumero(6));
num7.addEventListener("click", () => agregarNumero(7));
num8.addEventListener("click", () => agregarNumero(8));
num9.addEventListener("click", () => agregarNumero(9));
num0.addEventListener("click", () => agregarNumero(0));
num00.addEventListener("click", () => agregarNumero("00"));
punto.addEventListener("click", () => agregarNumero("."));

suma.addEventListener("click", () => operacion("+"))
resta.addEventListener("click", () => operacion("-"))
multiplicacion.addEventListener("click", () => operacion("x"))
division.addEventListener("click", () => operacion("÷"))
igual.addEventListener("click", () => ig())

deshacer.addEventListener("click", function(){
    pantalla.value = pantalla.value.slice(0, -1);
})

limpiar.addEventListener("click", function(){
    pantalla.value = "";
})