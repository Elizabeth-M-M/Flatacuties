document.addEventListener("DOMContentLoaded", function () {
    fetchData();
})
function fetchData() {
    fetch('http://localhost:3000/characters').then(resp => resp.json()).then(cartoons =>countVotes(cartoons))
}

function countVotes(cartoons) {
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
    buttons.forEach((btn) => {
        btn.addEventListener("click", (event) => {
            const clicked = event.target.className;
            cartoons.forEach((cartoon) => {
                if (cartoon.id == clicked) {
                    cartoonTitle.textContent = cartoon.name;
                    cartoonSrc.src = cartoon.image;
                    // voting
                    let count = cartoon.votes;

                    addVote.addEventListener('click', function (event) {
                        event.preventDefault();
                        const countDisplay = document.querySelector('#countDisplay span');
                        
                        if (input === '') {
                            inputPlace.placeholder = "Add your vote in numbers";
                            countDisplay.textContent = cartoon.votes;

                        } else {
                            let input = document.querySelector('form div input').value;
                            let inputValue = parseInt(input, 10);
                            count += inputValue;
        
                            countDisplay.textContent = count;
                            cartoon.votes = count;
                            // form.reset(); 
                        };
        

                    });
                    resetVote.addEventListener('click', (event) => {
                            event.preventDefault();

                            count = 0;
                            countDisplay.textContent = count;
                            cartoon.votes = count;
    })
                }
            });
        });
    });
    // VOTING
   
    // addVote.addEventListener('click', function(event){
    //     event.preventDefault();
    //     const cartoonArray = Array.from(cartoons);
    //     cartoonArray.reduce(addCounts, 0)
    //     function addCounts(init, cartoon) {
    //         let count = cartoon.votes; 
    //         console.log(count)
    //         console.log(init)
    //     }
        
        // cartoons.forEach((cartoon) => {
        //     let count = cartoon.votes;
        // console.log(count)
        //     const countDisplay = document.querySelector('#countDisplay span');
        //     let inputPlace = document.querySelector('form div input');
        //     let input = inputPlace.value;
            
        //      if (input === '') {
        //     inputPlace.placeholder = "Add your vote in numbers";
        //     countDisplay.textContent = count;

        // } else {
        //    let inputValue = parseInt(input, 10);
        // count += inputValue;
        //  countDisplay.textContent = count;
        // // form.reset(); 
        // }
        // })
        
    // })
    
}


