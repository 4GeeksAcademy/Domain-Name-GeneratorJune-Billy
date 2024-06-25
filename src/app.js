/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";
import { Button } from "bootstrap";

let pronoun = ["the", "our", "that", "they", "you", "those"];
let adj = ["great", "big", "small", "vibrant", "radiant", "blissful"];
let noun = ["jogger", "racoon", "harbor", "maple", "galaxy", "echo"];
let domainHacks = [".com", ".net", ".io", ".us"];

//
function generateDomain() {
  let rdmn1 = Math.floor(Math.random() * pronoun.length);
  let rdmn2 = Math.floor(Math.random() * adj.length);
  let rdmn3 = Math.floor(Math.random() * noun.length);
  let rdmn4 = Math.floor(Math.random() * domainHacks.length);

  let domain = `${pronoun[rdmn1]}${adj[rdmn2]}${noun[rdmn3]}${domainHacks[rdmn4]}`;
  document.getElementById("domainName").innerHTML = domain;
}

window.onload = generateDomain();

document
  .getElementById("generateDomainName")
  .addEventListener("click", generateDomain);
