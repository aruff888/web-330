/*
  Pragmatic JavaScript
  Chapter 4
  Programming Assignment

  Author: Amanda Ruff
  Date: 12/14/25
  Filename: script.js
*/

"use strict";

// In-memory movie array
const movies = [
  {
    title: "Inception",
    director: "Christopher Nolan",
    year: 2010,
    synopsis: "A thief steals information by infiltrating dreams."
  },
  {
    title: "The Matrix",
    director: "The Wachowskis",
    year: 1999,
    synopsis: "A hacker learns reality is a simulated world."
  },
  {
    title: "Interstellar",
    director: "Christopher Nolan",
    year: 2014,
    synopsis: "Explorers travel through a wormhole to save humanity."
  },
  {
    title: "Home Alone",
    director: "Chris Columbus",
    year: 1990,
    synopsis: "A young boy defends his home from burglars while his family is away."
  }
];

// Simulated fetch function using Promise
function fetchMovie(title) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const movie = movies.find(
        m => m.title.toLowerCase() === title.toLowerCase()
      );

      if (movie) {
        resolve(movie);
      } else {
        reject("Movie not found. Please try another title.");
      }
    }, 1000);
  });
}

// Form submission handler
document.getElementById("movie-form").addEventListener("submit", async (event) => {
  event.preventDefault();

  const titleInput = document.getElementById("title-input").value;
  const errorMessage = document.getElementById("error-message");

  // Clear previous messages
  errorMessage.textContent = "";
  document.getElementById("movie-title").textContent = "";
  document.getElementById("movie-director").textContent = "";
  document.getElementById("movie-year").textContent = "";
  document.getElementById("movie-synopsis").textContent = "";

  try {
    const movie = await fetchMovie(titleInput);

    document.getElementById("movie-title").textContent = movie.title;
    document.getElementById("movie-director").textContent =
      "Director: " + movie.director;
    document.getElementById("movie-year").textContent =
      "Release Year: " + movie.year;
    document.getElementById("movie-synopsis").textContent =
      "Synopsis: " + movie.synopsis;
  } catch (error) {
    errorMessage.textContent = error;
  }
});
