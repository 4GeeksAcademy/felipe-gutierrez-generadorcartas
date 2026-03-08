import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function () {

 
  let indicePinta = Math.floor(Math.random() * 4);
  let indiceNumero = Math.floor(Math.random() * 13);


  let pintas = ["♦", "♥", "♠", "♣"];
  let clasesPintas = ["diamond", "heart", "spade", "club"];
  let numeros = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];


  let carta = document.getElementById("carta");
  let pintaArriba = document.getElementById("pinta-arriba");
  let pintaAbajo = document.getElementById("pinta-abajo");
  let numeroCarta = document.getElementById("numero-carta");

  
  pintaArriba.innerHTML = pintas[indicePinta];
  pintaAbajo.innerHTML = pintas[indicePinta];
  numeroCarta.innerHTML = numeros[indiceNumero];


  carta.classList.add(clasesPintas[indicePinta]);
};
