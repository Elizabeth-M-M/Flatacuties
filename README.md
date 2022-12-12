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
 
 Next I ran `fetchData()` function that acquires the data and iterates through each using a forEach() method and returns a `getEachAnimal(cartoon)` , the `cartoon` parameter being each individual cartoon from the server. 
 
 `getEachAnimal(cartoons)` targets the buttons and iterates through each button using forEach() method. It looks if the button class name is strictly equal to the passed cartoon id. If a match is found, then that cartoon is passed in as a parameter in the `displayCartoon(cartoon` function. That function has a variety of tasks including:
 
 ###### Task 1: Display the cartoon name, image and the votes. 
- I targeted the card container `div` with the class name of `container-content-width` and passed in an inner HTML. Using an already coded inner HTML, the cartoon keys/ properties were passed in various sections of the inner HTML using the object.key notation.
 
  ###### Task 2:Add Votes
- The `Add Votes` button had a click event that added all the votes being put in the input space and displayed the total count on the `.container-content-width p span` query selector element.
   ###### Task 2:Reset Votes
- The `Reset Vote` button resets the count to 0;


#### Live server
Using `db.json`, I had a live server accesing my object data needed for my app functionality and update the votes using PATCH.

