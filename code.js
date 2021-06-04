/*
---------------------------------------------------------------------------
Objects - Part One
*/

// Do not modify this object here.
let examplePerson = {
  firstName: "Homer",
  lastName: "Simpson",
  hobbies: ["Television", "Eating Donuts", "Playing with his Kids"],
  address: {
    number: 742,
    street: "Evergreen Terrace",
    city: "Springfield",
    state: "Illinois",
    zipcode: "12345",
  },
  "favorite color": "yellow",
};

/*
Using the function below, print the person to the page according 
to the instructions on my.kenzie
*/

//function that creates elements and sets the inner text of each element based on the activitie's requirements
//function uses the parameter of person so that way we can use this function to display as many objects as we want to the page
function renderPerson(person) {
  //creates the container element
  let containerDiv = document.createElement('div');

  //gives the container element a class
  containerDiv.className = 'card';

  //creates an h2 element
  let nameElement = document.createElement('h2');

  //sets the inner text of the h2 element to display the firstName and lastName of the object. EX - <h2>person.firstName person.lastName</h2>
  nameElement.innerText = `${person.firstName} ${person.lastName}`

  //creates an h4 element
  let hobbiesElement = document.createElement('h4');

  //sets the inner text of the h4 element to display the text of Hobbies EX - <h4>Hobbies</h4>
  hobbiesElement.innerText = 'Hobbies';

  //creates an ul list element EX <ul></ul>
  let hobbiesUlElement = document.createElement('ul')

  //a for loop that loops through the array of hobbies in the object
  for (let index = 0; index < person.hobbies.length; index += 1) {
    //a variable that is used for each item in the hobbies array
    let hobbiesIndex = person.hobbies[index]

    //creates a li element EACH TIME THE LOOP IS RAN. EX - <li></li>
    let listItem = document.createElement('li')

    //sets the inner text of the li element to be each item in the array. Again this is happening EACH TIME THE LOOP IS RAN
    //EX - <li>examplePerson.hobbies[index]</li>
    listItem.innerText = hobbiesIndex

    //adds each of the li elements that are created by the for loop to the ul element
    /*
    EX 
    <ul>
      <li>examplePerson.hobbies[index]</li>    
    </ul>     
    */
    hobbiesUlElement.append(listItem)
  }

  //creates an h4 element
  let addressElement = document.createElement('h4');

  //sets the inner text of the h4 element to display the text of Shipping Address EX - <h4>Shipping Address</h4>
  addressElement.innerText = 'Shipping Address';

  //creates a paragraph element
  let addressText = document.createElement('p');

  //There are a few different ways we can display the address properties.
  //I have two ways to do it listed down below

  //Option A - use template literals and the dot notation for every single property in the address object
  //This way is best when you are accessing the address object one time like in this acitivty.

  addressText.innerText = `${person.firstName} ${person.lastName}
  ${person.address.number} ${person.address.street}
   ${person.address.city}, ${person.address.state} ${person.address.zipcode}`;


  //Option B - use variables that are assigned to each property in the address object
  //This way is best when we are going to use the address properties many times throughout our code.
  let shippingNumber = person.address.number;
  let shippingStreet = person.address.street;
  let shippingCity = person.address.city;
  let shippingState = person.address.state;
  let shippingZip = person.address.zipcode;
  let firstName = person.firstName;
  let lastName = person.lastName;

  addressText.innerText = `${firstName} ${lastName}
   ${shippingNumber} ${shippingStreet} 
   ${shippingCity} ${shippingState} ${shippingZip}`

  //BOTH OF THESE OPTIONS ARE FINE. IT IS UP TO YOU REGARDING WHICH ONE YOU WANT TO USE
  //BUT YOU ONLY NEED TO USE ONE OF THEM. NOT BOTH.

  //creates an h4 element
  let faveColorElement = document.createElement('h4');

  //sets the inner text of the h4 element to be the text of favorite color EX - <h4>Favorite Color</h4>
  faveColorElement.innerText = `Favorite Color`;

  //creates a paragraph element
  let faveColorText = document.createElement('p');

  //sets the inner text of the paragraph element to be the favorite color property of the object EX - <p>person["favorite color"]</p>
  faveColorText.innerText = `${person["favorite color"]}`

  //adds ALL the elements we created above to the container element we created at the top. This will created the card layout we want.
  //Note the ordering of the variables when appending them. The order you place the variables when appending determines the order in which they will appear in the card
  containerDiv.append(nameElement, hobbiesElement, hobbiesUlElement, addressElement, addressText,
    faveColorElement, faveColorText);
  
  //adds the container element to the body of the page so it's actually visable.
  document.body.append(containerDiv);
}

//calls the render person function and uses the example person object. This will cause all the properties of example person to be displayed on the page.
renderPerson(examplePerson);

/*
---------------------------------------------------------------------------
Part Two

Create a new person.  

Your object should look very similar to the Person object above!
But you should use different values.  Put whatever you want for the values.

Call renderPerson() and pass your new person object in as an argument to 
render your person to the page.

a new variable called 'newPerson' is created. We use the properties from the examplePerson objects but we chages the values of the properties

Example
examplePerson.firstName = 'Homer'
newPerson.firstName = 'Joey'

*/
let newPerson = {
  firstName: "Joey",
  lastName: "Brown",
  hobbies: ["Television", "Gaming", "Coding"],
  address: {
    number: 13,
    street: "Whatever Street",
    city: "Indy",
    state: "Indiana",
    zipcode: "121314",
  },
  "favorite color": "blue",
}

//uses the function we made above to display the properties of the newPerson object on the page.
//THIS IS WHY WE USED THE person parameter WHEN WE MADE THE FUNCTION BACK IN STEP 1!!
//It allows us to display multiple objects to the page!
renderPerson(newPerson)

/*
---------------------------------------------------------------------------
Part Three
Modify the person object to change them to bart.  
Follow the instruction on my.kenzie
*/

//function to change the values of an object
function changePersonToBart(person) {
   //changes the property of firstName to be 'Bart'
   person.firstName = 'Bart'

   //changes the property of 'favorite color' to be orange
   person["favorite color"] = "orange"
 
   //removes the last item in the hobbies array
   person.hobbies.pop()
 
   //adds a new item to the hobbies array
   person.hobbies.push('Skateboarding')
 
   //returns the object with the updated properties
   return person
}

//creates a new variable that uses the function above and changes the values of the object examplePerson
let changedToBart = changePersonToBart(examplePerson);

//uses the renderPerson function from step 1 to display the object examplePerson with the updated properties to the page.
renderPerson(changedToBart)

/*
---------------------------------------------------------------------------
Part Four (Optional Practice)
Create your own object!
*/

  // Your Code Here