const list = document.querySelector("#List");
const input = document.querySelector("#input");
const form = document.querySelector("#form");

let counter =0;
// create a function that helps you create a new list
function addItem(e){
     e.preventDefault();
     const val = input.value;
     input.value="";
     const id = `list-${counter}` ;
//create a list element
   const newList = document.createElement("li");
   newList.id= id;
   //create a button 
  newList.innerHTML = `${val} <button onclick="removeList('${id}')"> Remove </button>`;
  list.appendChild(newList);
  counter++;
 }
 //create a function that removes the button when you click on it
 function removeList(newListid){
  const newList = document.querySelector(`#${newListid}`);
     list.removeChild(newList);
 }
 //when the submit button is clicked, let the add function item run
 
form.addEventListener("submit", addItem);
