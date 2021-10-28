function calcularPromedio() { // 1. Inicio
// 2. Definir c1, c2, c3, c4, c5, promedio
var c1;
var c2;
var c3;
var c4;
var c5;
var promedio;
// 3. Hacer c1 = 10, c2 = 7.5, c3 =   9, c4 = 10, c5 = 10
c1 = document.getElementById("numero1").value;
console.log(c1);
c2 = parseFloat(document.getElementById("numero1").value);
c3 = parseFloat(document.getElementById("numero1").value);
c4 = parseFloat(document.getElementById("numero1").value);
c5 = parseFloat(document.getElementById("numero1").value);
// 4. Hacer promedio =  c1 + c2 + c3 + c4 + c5 = 46.5 / 5 = 9.3
promedio = (c1 + c2 + c3 + c4 + c5) / 5;  
// 5. imprimir promedio
alert("Tu promedio es de " + promedio) ;
}