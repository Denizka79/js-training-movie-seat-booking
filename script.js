let numberOfSeats = document.querySelectorAll(".seat").length;
let ticketsCount = document.getElementById("count");
let totalSum = document.getElementById("total");
let movieSelect = document.getElementById("movie");
//console.log(seats);
let selectedSeatCounter = 0;

for (let i = 0; i < numberOfSeats; i++) {
    document.querySelectorAll(".seat")[i].addEventListener("click", function() {
        if (this.classList.contains("occupied") === false) {
            if (this.classList.contains("selected") === false) {
                this.classList.add("selected");
                selectedSeatCounter = selectedSeatCounter + 1;
            } else {
                this.classList.remove("selected");
                selectedSeatCounter = selectedSeatCounter - 1;
            }
        }
        ticketsCount.innerHTML = selectedSeatCounter;
        totalSum.innerHTML = parseInt(movieSelect.value) * selectedSeatCounter;
        console.log(selectedSeatCounter);
    });
}