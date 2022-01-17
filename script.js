let numberOfSeats = document.querySelectorAll(".seat").length;
let ticketsCount = document.getElementById("count");
let totalSum = document.getElementById("total");
let movieSelect = document.getElementById("movie");
let movieSeatsNumbers = [];
//console.log(seats);
let selectedSeatCounter = 0;

for (let i = 0; i < numberOfSeats; i++) {
    document.querySelectorAll(".seat")[i].addEventListener("click", function() {
        if (this.classList.contains("occupied") === false && this.nodeName === "DIV") {
            if (this.classList.contains("selected") === false) {
                this.classList.add("selected");
                selectedSeatCounter = selectedSeatCounter + 1;
                movieSeatsNumbers.push(this.id);
            } else {
                this.classList.remove("selected");
                selectedSeatCounter = selectedSeatCounter - 1;
                let movieSeatIndex =  movieSeatsNumbers.indexOf(this.id);
                movieSeatsNumbers.splice(movieSeatIndex, 1);
            }
        }
        ticketsCount.innerHTML = selectedSeatCounter;
        totalSum.innerHTML = parseInt(movieSelect.value) * selectedSeatCounter;
        console.log(movieSeatsNumbers);
    });
}

movieSelect.addEventListener("change", function() {
    totalSum.innerHTML = parseInt(movieSelect.value) * selectedSeatCounter;
});