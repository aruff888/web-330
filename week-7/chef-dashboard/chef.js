/*
  Pragmatic JavaScript
  Chapter 3
  Programming Assignment

  Author: Amanda Ruff
  Date: 12/07/25
  Filename: chefs.js
*/

"use strict";

// --- CHEF DATA ---
const chefs = [
  {
    name: "Gordon Ramsay",
    specialty: "Fine Dining",
    weakness: "Patience",
    location: "London, UK"
  },
  {
    name: "Alice Waters",
    specialty: "Farm-to-Table",
    weakness: "Technology",
    location: "Berkeley, CA"
  },
  {
    name: "Masaharu Morimoto",
    specialty: "Japanese Fusion",
    weakness: "Taking Breaks",
    location: "New York, NY"
  }
];

// --- PROMISE FUNCTIONS ---

function getChef1() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      Math.random() < 0.7 ? resolve(chefs[0]) : reject("Error: Chef 1 data failed to load.");
    }, 2000);
  });
}

function getChef2() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      Math.random() < 0.7 ? resolve(chefs[1]) : reject("Error: Chef 2 data failed to load.");
    }, 3000);
  });
}

function getChef3() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      Math.random() < 0.7 ? resolve(chefs[2]) : reject("Error: Chef 3 data failed to load.");
    }, 4000);
  });
}

// --- HANDLE PROMISES ---
Promise.allSettled([getChef1(), getChef2(), getChef3()])
  .then(results => {

    results.forEach((result, index) => {
      const output = document.querySelector(`#chef${index + 1} .output`);

      if (result.status === "fulfilled") {
        const chef = result.value;
        output.innerHTML = `
          <strong>Name:</strong> ${chef.name}<br>
          <strong>Specialty:</strong> ${chef.specialty}<br>
          <strong>Weakness:</strong> ${chef.weakness}<br>
          <strong>Location:</strong> ${chef.location}
        `;
      } else {
        output.innerHTML = `<span class="error">${result.reason}</span>`;
      }
    });

  });
