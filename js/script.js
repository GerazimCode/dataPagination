/*
Treehouse Techdegree:
FSJS Project 2 - Data Pagination and Filtering
*/


/*
For assistance:
   Check out the "Project Resources" section of the Instructions tab: https://teamtreehouse.com/projects/data-pagination-and-filtering#instructions
   Reach out in your Slack community: https://treehouse-fsjs-102.slack.com/app_redirect?channel=unit-2
*/


/*
Create the `showPage` function
This function will create and insert/append the elements needed to display a "page" of nine students
*/
function showPage(list, page){

   // following variables represent the first and last student of the list.
   let itemsPerPage = 9;
   let startIndex = (page * itemsPerPage) - itemsPerPage;
   let endIndex = page * itemsPerPage;

   let studentList = document.querySelector(".student-list");
   studentList.innerHTML = "";

   // looping through the data and dynamically generating displaying on the page.
   for(let i=0; i<list.length; i++){
      if(i >= startIndex && i < endIndex){

         // html structure for our data, extracting it from data.js using dot notation
         let studentItems =` 
         <li class="student-item cf">
            <div class="student-details">
               <img class="avatar" src=${list[i].picture.medium} alt="Profile Picture">
               <h3>${list[i].name.first} ${list[i].name.last}</h3>
               <span class="email">${list[i].email}</span>
            </div>
            <div class="joined-details">
               <span class="date">Registered on: ${list[i].registered.date}</span>
            </div>
       </li>
         `
         studentList.insertAdjacentHTML('beforeend', studentItems);
      }
   }
   
}
/*
Create the `addPagination` function
This function will create and insert/append the elements needed for the pagination buttons
*/

function addPagination(list){
   // this variable determines the number of pagination buttons we will need
   let numOfPages = Math.ceil(list.length / 9);

   let linkList = document.querySelector(".link-list");
   linkList.innerHTML = "";

   for(let i=1; i<=numOfPages; i++){
      let button =`
       <li>
         <button type="button">${i}</button>
       </li>
      `
      linkList.insertAdjacentHTML("beforeend", button);
   }

   // selecting the first button and making it active by assigning it to the active class
   let firstButton = linkList.querySelector("button");
   firstButton.className = "active";

   // an event listener that will when there is a click on the buttons
   linkList.addEventListener("click", (e) => {
      if(e.target.tagName === "BUTTON"){
         let activeElement = document.querySelector(".active");
         activeElement.className = "";
         e.target.className = "active";

         // stores the page number to be called in the showPage function call.
         let currentPage = e.target.textContent;

         showPage(list, currentPage);
      }
   })

}

// Call functions
showPage(data, 1);
addPagination(data);