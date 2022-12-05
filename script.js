const form = document.querySelector('form')
    // define cartoon title holder
    const cartoonTitle = document.querySelector('.container-content-width h3');
    // define cartoon image source
    const cartoonSrc = document.querySelector('.container-content-image img');
    // define voting buttons
   const addVote = document.getElementById('addVote');
    const resetVote = document.getElementById('resetVote');
    
    // target individual buttons
    const buttons = document.querySelectorAll('.container-header-buttons button');
document.addEventListener("DOMContentLoaded", function () {
    fetchData();
})
function fetchData() {
    fetch('http://localhost:3000/characters').then(resp => resp.json()).then(cartoons =>countVotes(cartoons))
}

