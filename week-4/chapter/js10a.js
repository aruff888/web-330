"use strict";
/*  JavaScript 7th Edition
    Chapter 10
    Chapter case

    Oak Top House
    Author: Amanda Ruff
    Date:   11/11/25

    Filename: js10a.js
*/


window.addEventListener("load", setupRoom);

function setupRoom() {
   let room = document.getElementById("room");
   let storageTables = document.querySelectorAll("#storage > div.table");
   let zIndexCounter = 0;

   function countSeats() {
      let guests = 0;
      let seatCount = document.getElementById("seatCount");
      let tablesToCount = document.querySelectorAll("#room > div.table");
      for (let table of tablesToCount) {
         guests += Number(table.textContent);
      }
      seatCount.textContent = guests;
   }

   for (let table of storageTables) {
      table.onclick = function () {
         let storageCopy = table.cloneNode(true);
         room.appendChild(storageCopy);

         zIndexCounter++;
         storageCopy.style.zIndex = zIndexCounter;

         countSeats();
      }
   }
}
