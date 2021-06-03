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

function renderPerson(person) {
  let containerDiv = document.createElement('div');
  containerDiv.className = 'card';

  let nameElement = document.createElement('h2'); //<h2>First Name Last Name</h2>
  nameElement.innerText = `${examplePerson.firstName} ${examplePerson.lastName}`

  let hobbiesElement = document.createElement('h4');
  hobbiesElement.innerText = 'Hobbies';

  let hobbiesUlElement = document.createElement('ul')

  for(let index = 0; index < examplePerson.hobbies.length; index += 1){
    let hobbiesIndex = examplePerson.hobbies[index]
    let listItem = document.createElement('li')
    listItem.innerText = hobbiesIndex
    hobbiesUlElement.append(listItem)  
  }
  containerDiv.append(nameElement,hobbiesElement,hobbiesUlElement);
  document.body.append(containerDiv);
}

renderPerson(examplePerson);

/*
---------------------------------------------------------------------------
Part Two
Create a new person.  
Your object should look very similar to the Person object above!
But you should use different values.  Put whatever you want for the values.
Call renderPerson() and pass your new person object in as an argument to 
render your person to the page.
*/

// Your Code Here




/*
---------------------------------------------------------------------------
Part Three
Modify the person object to change them to bart.  
Follow the instruction on my.kenzie
*/

function changePersonToBart(person) {
  // Your Code Here


}

  // Then, call the function with the argument examplePerson
  // Assign the result to a new variable.  Then call renderPerson with the 
  // new variable

/*
---------------------------------------------------------------------------
Part Four (Optional Practice)
Create your own object!
*/

  // Your Code Here