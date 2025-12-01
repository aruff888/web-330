"use strict";
/*    JavaScript 7th Edition
      Chapter 11
      Project 11-02

      Project to city and state information from a provided postal code
      Author: Amanda Ruff
      Date:   12/01/25

      Filename: project11-02.js
*/

let postalCode = document.getElementById("postalCode");
let place = document.getElementById("place");
let region = document.getElementById("region");
let country = document.getElementById("country");

postalCode.onblur = function() {

   // Declare codeValue and countryValue
   let codeValue = postalCode.value;
   let countryValue = country.value;

   // Clear the place and region fields
   place.value = "";
   region.value = "";

   // Fetch request to Zippopotam API
   fetch(`https://api.zippopotam.us/${countryValue}/${codeValue}`)
      .then(response => response.json())        // Parses JSON
      .then(json => {                           // Uses the parsed JSON
         place.value = json.places[0]["place name"];
         region.value = json.places[0]["state abbreviation"];
      })
      .catch(error => {
         console.log(error);                     // Log error text if the response is rejected
      });
};



