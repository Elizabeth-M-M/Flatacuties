const form = document.querySelector('form')
    // define cartoon title holder
let cartoonTitle = document.querySelector('.container-content-width h3');
    // define cartoon image source
const cartoonSrc = document.querySelector('.container-content-image img');
    // define voting buttons
const cartoonVotes = document.querySelector('#countDisplay span');
const addVote = document.getElementById('addVote');
const resetVote = document.getElementById('resetVote');
    // target individual buttons
const buttons = document.querySelectorAll('.container-header-buttons button');
// target vote input
let input = document.getElementById('voteCount');

// Adding DOM loaded event listener
document.addEventListener("DOMContentLoaded", function () {
    fetchData();
})
// function that fetches data
function fetchData() {
    fetch('http://localhost:3000/characters').then(resp => resp.json()).then(cartoons => getEachAnimal(cartoons))
}
// function that gets each individual cartoons
function getEachAnimal(cartoons) {
    cartoons.forEach(addAnimalFunctionality)
}
// display and voting mechanism of the cartoon characters
function addAnimalFunctionality(cartoon) {
    console.log()
    buttons.forEach(btn => {
        btn.addEventListener('click', displayCartoon)
    })
    // display image and name and initial vote
    function displayCartoon(event) {
        if (event.target.className == cartoon.id) {
            console.log(cartoon)
            cartoonTitle.textContent = cartoon.name;
            cartoonSrc.src = cartoon.image;
            cartoonSrc.parentElement.style.border = "none";
            cartoonVotes.textContent = cartoon.votes;
            let animalVotes = cartoon.votes;
            // vote summation of each cartoon character
            addVote.addEventListener('click', (event) => {
                event.preventDefault();
                if (input.value === '') {
                    input.classList = 'verifyCount';
                } else {
                    animalVotes += parseInt(input.value, 10);
                    cartoonVotes.textContent = animalVotes;
                    input.classList.remove('verifyCount');
                form.reset();
                }
            })
            // reset vote to initial 0
            resetVote.addEventListener('click', (event) => {
                event.preventDefault();
                animalVotes = 0;
                cartoonVotes.textContent = animalVotes;
                form.reset();
            })
        }
    }
}

// Still looking for a solution to maintain the vote count when switching between different cartoon characters

