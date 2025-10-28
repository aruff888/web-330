/*
  Pragmatic JavaScript
  Chapter 1
  Programming Assignment

  Author: Amanda Ruff
  Date: 10/27/25
  Filename: script.js
*/

"use strict";

//Create a closure-based character factory function
function createCharacter(name, gender, characterClass) {
  // Private variables (not directly accessible)
  let _name = name;
  let _gender = gender;
  let _class = characterClass;

  // Return an object exposing only getter methods
  return {
    getName: function () {
      return _name;
    },
    getGender: function () {
      return _gender;
    },
    getClass: function () {
      return _class;
    },
  };
}

//Add event listener for the "Generate Hero" button
document.getElementById("generateHero").addEventListener("click", function (e) {
  e.preventDefault(); // Prevent page reload

  //Get form values
  const name = document.getElementById("heroName").value.trim();
  const gender = document.getElementById("heroGender").value;
  const heroClass = document.getElementById("heroClass").value;

  // Input validation
  if (!name || !gender || !heroClass) {
    alert("Please complete all fields before generating your hero!");
    return;
  }

  //Create a new character using the closure
  const newHero = createCharacter(name, gender, heroClass);

  //Display the hero’s information
  const output = document.getElementById("characterOutput");
  output.innerHTML = `
    <h2>Your Hero Has Been Created!</h2>
    <p><strong>Name:</strong> ${newHero.getName()}</p>
    <p><strong>Gender:</strong> ${newHero.getGender()}</p>
    <p><strong>Class:</strong> ${newHero.getClass()}</p>
  `;
});
