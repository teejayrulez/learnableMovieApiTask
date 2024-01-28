const readline = require("readline");

// List of available movies
const movies = [
  { id: 1, name: "Mission Impossible" },
  { id: 2, name: "Mad Max: Fury Road" },
  { id: 3, name: "Pirates of the Caribbean" },
  { id: 4, name: "Paw Patrol: The Movie" },
  { id: 5, name: "Power Rangers" },
];

class Movie {
  constructor(title, moviesList) {
    this.title = title;
    this.moviesList = moviesList;
    this.rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });
  }

  displayMovies() {
    console.log("Available Movies:");
    console.log("--------------------");
    this.moviesList.forEach((movie) => {
      console.log(`${movie.id}. ${movie.name}`);
    });
    console.log("--------------------");
  }

  rent() {
    this.rl.question(
      "Enter the ID of the movie you want to rent: ",
      (movieId) => {
        const id = parseInt(movieId);
        const movieToRent = this.moviesList.find((movie) => movie.id === id);
        if (movieToRent) {
            console.log(`You rented "${movieToRent.name}" and it will be due in a month.`);
            console.log("--------------------");
            console.log("Thanks for patronizing us");
          this.rl.close();
        } else {
          console.log("Movie not found.");
          this.rent(); // Calling rent method recursively if movie not found
        }
      }
    );
  }
}

// Example usage:
const movieStore = new Movie("Movie Rental", movies);

// Display available movies
console.log("Welcome to The Box Office");
console.log("--------------------");
movieStore.displayMovies();

// Rent a movie
movieStore.rent();
