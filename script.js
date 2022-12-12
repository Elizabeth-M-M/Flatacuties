
// Adding DOM loaded event listener to fetch data
document.addEventListener("DOMContentLoaded", function () {
    fetchData();
})
//fetch data
function fetchData() {
    fetch('http://localhost:3000/characters')
        .then(resp => resp.json())
        .then(cartoons => cartoons.forEach(cartoon=>
            getEachAnimal(cartoon)))
}
// get each individual cartoon based on their class name
function getEachAnimal(cartoon) {
    const buttons = document.querySelectorAll('.container-header-buttons button');
     buttons.forEach(btn => {
        btn.addEventListener('click', (event)=>{
            if(event.target.className ==cartoon.id){
                displayCartoon(cartoon)
            }
        })
    })
    }
    // display the cartoon when a button is clicked
    function displayCartoon(cartoon){
        let cartoonContainer = document.querySelector('.container-content-width');
        cartoonContainer.innerHTML =`
        <h3>${cartoon.name}</h3>
                <div class="container-content-image">
                    <img  src="${cartoon.image}" alt="A cute animal">
                </div>
                <p id="countDisplay">Total votes: <span>${cartoon.votes}</span></p>
                <form action="">
                    <div>
                        <input type="text" placeholder="Cast your votes here" id="voteCount">
                        <button type="submit" id="addVote">Add Votes</button>
                    </div>

                    <button id="resetVote">Reset Votes</button>
                </form>
        `
        // add votes of a specific cartoon using input of the user and the cartoon votes already present
        document.getElementById('addVote').addEventListener('click', (event) => {
            event.preventDefault();
             let input = document.getElementById('voteCount');let inputVal = input.value;
             if(inputVal===''){
                inputVal=0;
                console.log(inputVal)
                 cartoon.votes+=inputVal;
           document.querySelector('#countDisplay span').innerHTML = cartoon.votes;
        document.querySelector('form').reset();
        updateVotesOnServer(cartoon);

             }else{
                inputVal= parseInt(input.value, 10);
             console.log(inputVal)
cartoon.votes+=inputVal;
           document.querySelector('#countDisplay span').innerHTML = cartoon.votes;
        document.querySelector('form').reset();
        updateVotesOnServer(cartoon)
             }

            });
            // set cartoon vote back to 0
            document.getElementById('resetVote').addEventListener('click', (event)=>{
                event.preventDefault();
                cartoon.votes=0;
                document.querySelector('#countDisplay span').innerHTML = cartoon.votes;
                updateVotesOnServer(cartoon)
            })
    }
    function updateVotesOnServer(cartoon) {
    fetch(`http://localhost:3000/characters/${cartoon.id}`, {
        method:'PATCH',
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify({"votes":cartoon.votes})
    })
        .then(resp => resp.json())
        .then(cartoon => console.log(cartoon))
}


