/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let suits = ["♠", "♥", "♣", "♦"];
  let picksuits = suits[Math.floor(Math.random() * suits.length)];

  let cards = ["A", 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"];
  let pickcards = cards[Math.floor(Math.random() * cards.length)];

  let icon1 = document.createElement("I");
  let icon2 = document.createElement("I");
  let cardvalue = document.createElement("SPAN");

  icon1.innerHTML = picksuits;
  icon2.innerHTML = picksuits;
  cardvalue.innerHTML = pickcards;
  if (picksuits == "♠") icon1.classList.add("spade");
  if (picksuits == "♠") icon2.classList.add("spade");
  if (picksuits == '"♣"') icon1.classList.add("clubs");
  if (picksuits == "♣") icon2.classList.add("clubs");
  if (picksuits == "♥") icon1.classList.add("hearts");
  if (picksuits == "♥") icon2.classList.add("hearts");
  if (picksuits == "♦") icon1.classList.add("diamonds");
  if (picksuits == "♦") icon2.classList.add("diamonds");

  let whitebox = document.querySelector(".card");
  whitebox.append(icon1);
  whitebox.append(cardvalue);
  whitebox.append(icon2);
};
