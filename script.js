let allSeats = document.querySelectorAll(".seat");
let numberOfSeats = document.querySelectorAll(".seat").length;
let ticketsCount = document.getElementById("count");
let totalSum = document.getElementById("total");
let movieSelect = document.getElementById("movie");
let movieSeatsNumbers = [];
let selectedSeatCounter = 0;

function populateUI() {
    let selectedSeats = JSON.parse(localStorage.getItem("selectedSeats"));
    let updatedMovieSeatNumbers = [];
    if (selectedSeats != null && selectedSeats.length > 0) {
        for (let i = 0; i < numberOfSeats; i++) {
            for (let j = 0; j < selectedSeats.length; j++) {
                if (allSeats[i].id === selectedSeats[j]) {
                    allSeats[i].classList.add("selected");
                    updatedMovieSeatNumbers.push(allSeats[i].id);
                }
            }
        }
        movieSeatsNumbers = updatedMovieSeatNumbers;
        selectedSeatCounter = selectedSeats.length;
        ticketsCount.innerHTML = selectedSeatCounter;
    }

    let selectedMovieIndex = localStorage.getItem("selectedMovieIndex");

    if (selectedMovieIndex !== null) {
        movieSelect.selectedIndex = selectedMovieIndex;
        totalSum.innerHTML = parseInt(movieSelect.value) * selectedSeatCounter;
    } else {
        totalSum.innerHTML = parseInt(movieSelect.value) * selectedSeatCounter;
    }
}

populateUI();

for (let i = 0; i < numberOfSeats; i++) {
    allSeats[i].addEventListener("click", function() {
        if (allSeats[i].classList.contains("occupied") === false && allSeats[i].nodeName === "DIV") {
            if (allSeats[i].classList.contains("selected") === false) {
                allSeats[i].classList.add("selected");
                selectedSeatCounter = selectedSeatCounter + 1;
                movieSeatsNumbers.push(allSeats[i].id);
            } else {
                allSeats[i].classList.remove("selected");
                selectedSeatCounter = selectedSeatCounter - 1;
                let movieSeatIndex =  movieSeatsNumbers.indexOf(allSeats[i].id);
                movieSeatsNumbers.splice(movieSeatIndex, 1);
            }
        }
        ticketsCount.innerHTML = selectedSeatCounter;
        totalSum.innerHTML = parseInt(movieSelect.value) * selectedSeatCounter;
        localStorage.setItem("selectedSeats", JSON.stringify(movieSeatsNumbers));
    });
}

movieSelect.addEventListener("change", function(evt) {
    totalSum.innerHTML = parseInt(movieSelect.value) * selectedSeatCounter;
    localStorage.setItem("selectedMovieIndex", evt.target.selectedIndex);
    localStorage.setItem("selectedMoviePrice", evt.target.value);
});