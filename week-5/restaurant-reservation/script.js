/*
  Pragmatic JavaScript
  Chapter 2
  Programming Assignment

  Author: Amanda Ruff
  Date: 11/17/25
  Filename: scripts.js
*/

// In-memory table objects
let tables = [
  { tableNumber: 1, capacity: 2, isReserved: false },
  { tableNumber: 2, capacity: 4, isReserved: false },
  { tableNumber: 3, capacity: 6, isReserved: false },
  { tableNumber: 4, capacity: 4, isReserved: false }
];

// Reserve table function
function reserveTable(tableNumber, callback, time) {
  const table = tables.find(t => t.tableNumber === parseInt(tableNumber));

  if (!table) {
    callback("Error: Table not found.");
    return;
  }

  if (table.isReserved) {
    callback(`Error: Table ${tableNumber} is already reserved.`);
  } else {
    table.isReserved = true;
    setTimeout(() => {
      callback(`Success! Table ${tableNumber} has been reserved.`);
    }, time);
  }
}

// Form submission
document.getElementById("reservationForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const tableNumber = document.getElementById("tableNumber").value;

  reserveTable(tableNumber, function(message) {
    document.getElementById("message").textContent = `${name}: ${message}`;
  }, 1000); // 1-second simulated delay
});
