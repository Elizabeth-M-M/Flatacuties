# Flatacuties
#### An app where you can vote for the cutest animal!
### Owner
Program by Elizabeth Mwende Muthusi
### Date
03/12/2022.

### About the program
This is a mini web app to practice on array iteration, DOM, Events and Server communications.

### Set up
#### HTML
The `index.html` structure was built out using HTML setting everything inside a `section` tag.

#### CSS
Using `style.css`, I built out the design and layout of the HTML elements.

#### JavaScript
Using `script`, I built out the functionality of the app.

Global variables were declared and hoisted. The functionality basically starts after the DOM content has loaded. 

First I had to make sure the live server was active to get the data. I was able to achieve this using this command:

 `json-server --watch db.json`
 
 Next I ran `fetchData()` function inside that acquires the data and uses the data in the functions to come, next called function being `getEachAnimal(cartoons)`, the `cartoons` parameter being the data from the server. 
 
 `getEachAnimal(cartoons)` iterates over the animals and gets an individual object of each animal passed, which I termed as the `cartoon` parameter, to the `addAnimalFunctionality(cartoon)` function.
 The `addAnimalFunctionality(cartoon)` function has a variety of tasks.
 
 ###### Task 1: Display the cartoon name, image and the votes.
- I added class names to each individual cartoon button to match the cartoon id. If the id matched the class name, then the details of the individual cartoon properties, `name`, `image`, `votes` would be displayed on the DOM using the targeted DOM elements.
 
  ###### Task 2:Add Votes
- The `addVote` button had a click event that added all the votes being put in the input space and displayed the total count on the `p span` tag.
   ###### Task 2:Reset Votes
- The `resetVote` button resets the count to 0;


#### Live server
Using `db.json`, I had a live server accesing my object data needed for my app functionality.

