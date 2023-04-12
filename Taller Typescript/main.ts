import {series} from './data.js';

var Tabla = document.getElementById("eTabla")!;
var suma : number=0;


for(var entry of series){
    var Row = document.createElement("tr");

    Tabla.insertAdjacentElement("beforeend", Row);
    Tabla.insertAdjacentHTML("beforeend", `<tr id=${entry.id}></tr>`);


    Row.insertAdjacentHTML("beforeend", `<td onclick="cardM('${entry.image}','${entry.link}','${entry.synopsis}','${entry.title}')">${entry.id}</td>`);

    Row.insertAdjacentHTML("beforeend", `<td onclick="cardM('${entry.image}','${entry.link}','${entry.synopsis}','${entry.title}')">${entry.title}</td>`);

    Row.insertAdjacentHTML("beforeend", `<td onclick="cardM('${entry.image}','${entry.link}','${entry.synopsis}','${entry.title}')">${entry.channel}</td>`);

    Row.insertAdjacentHTML("beforeend", `<td onclick="cardM('${entry.image}','${entry.link}','${entry.synopsis}','${entry.title}')">${entry.seasons}</td>`);
    suma+=entry.seasons;
}

var promedio = suma/series.length;

var texto = document.createElement("p")!;
texto.innerHTML = "Seasons average es: "+promedio;

Tabla.insertAdjacentElement("afterend", texto);
Tabla.insertAdjacentHTML("afterend", `<p id="promedio"></p>`);

