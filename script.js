document.addEventListener("DOMContentLoaded", function () {
    handleData();
})

function handleData() {
    // fetch data here
    const cartoons = [
        {
        id:1,
        name: "pup",
        imageSrc: "https://media2.giphy.com/media/rgq4Sar77s85W/giphy.gif?cid=ecf05e479b0fhn5x7ezokgh8v34fubi129l8wzpw4vxuy95c&rid=giphy.gif&ct=g ",
        count: 0
        },
        {
        id:2,
        name: "scoobie",
        imageSrc: "https://media1.giphy.com/media/69FmYZBku9m81vhGH3/200.webp?cid=ecf05e4724lsxj5s68tax6uhrxkyma95q3ij6z5tyk8vcqxk&rid=200.webp&ct=g",
        count: 0
        },
        {
        id:3,
        name: "pus",
        imageSrc: "https://media3.giphy.com/media/YkbRS1WViDoZqBiQNq/200w.webp?cid=ecf05e4724lsxj5s68tax6uhrxkyma95q3ij6z5tyk8vcqxk&rid=200w.webp&ct=g",
        count: 0
        },
        {
        id:4,
        name: "pus",
        imageSrc: "https://media3.giphy.com/media/YkbRS1WViDoZqBiQNq/200w.webp?cid=ecf05e4724lsxj5s68tax6uhrxkyma95q3ij6z5tyk8vcqxk&rid=200w.webp&ct=g",
        count: 0
        },
    ]
    countVotes(cartoons);
    // forEach(countVotes)
}
function countVotes(cartoons) {
   
    const form = document.querySelector('form')
    const cartoonTitle = document.querySelector('.container-content-width h3');
    
    const cartoonSrc = document.querySelector('.container-content-image img');
   
    
    // SELECT BUTTONS
    const buttons = document.querySelectorAll('.container-header-buttons button');
    buttons.forEach((btn) => {
    btn.addEventListener("click", (event) => {
      const clicked = event.target.className;
      cartoons.forEach((cartoon) => {
          
          if (cartoon.id == clicked) {
            
              cartoonTitle.textContent = cartoon.name;
              cartoonSrc.src = cartoon.imageSrc;
          }
        
})
});
});

    


    // VOTING
   
    const addVote = document.getElementById('addVote');
   
    const resetVote = document.getElementById('resetVote');
   
   let count = 0;
       
    addVote.addEventListener('click', function(event){
        event.preventDefault();
        const countDisplay = document.querySelector('#countDisplay span');
        let inputPlace = document.querySelector('form div input');
        let input = inputPlace.value;
        
        if (input === '') {
            inputPlace.placeholder = "Add your vote in numbers";
            countDisplay.textContent = count;

        } else {
           let inputValue = parseInt(input, 10);
        count += inputValue;
         countDisplay.textContent = count;
        // form.reset(); 
        }
    })
    resetVote.addEventListener('click', (event) => {
        event.preventDefault();
        count = 0;
            countDisplay.textContent = count;
    })


}


