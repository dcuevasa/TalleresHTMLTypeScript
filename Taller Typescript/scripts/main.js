import { series } from './data.js';
var Tabla = document.getElementById("eTabla");
var suma = 0;
for (var _i = 0, series_1 = series; _i < series_1.length; _i++) {
    var entry = series_1[_i];
    var Row = document.createElement("tr");
    Tabla.insertAdjacentElement("beforeend", Row);
    Tabla.insertAdjacentHTML("beforeend", "<tr id=".concat(entry.id, "></tr>"));
    Row.insertAdjacentHTML("beforeend", "<td onclick=\"cardM('".concat(entry.image, "','").concat(entry.link, "','").concat(entry.synopsis, "','").concat(entry.title, "')\">").concat(entry.id, "</td>"));
    Row.insertAdjacentHTML("beforeend", "<td onclick=\"cardM('".concat(entry.image, "','").concat(entry.link, "','").concat(entry.synopsis, "','").concat(entry.title, "')\">").concat(entry.title, "</td>"));
    Row.insertAdjacentHTML("beforeend", "<td onclick=\"cardM('".concat(entry.image, "','").concat(entry.link, "','").concat(entry.synopsis, "','").concat(entry.title, "')\">").concat(entry.channel, "</td>"));
    Row.insertAdjacentHTML("beforeend", "<td onclick=\"cardM('".concat(entry.image, "','").concat(entry.link, "','").concat(entry.synopsis, "','").concat(entry.title, "')\">").concat(entry.seasons, "</td>"));
    suma += entry.seasons;
}
var promedio = suma / series.length;
var texto = document.createElement("p");
texto.innerHTML = "Seasons average es: " + promedio;
Tabla.insertAdjacentElement("afterend", texto);
Tabla.insertAdjacentHTML("afterend", "<p id=\"promedio\"></p>");
