

const timeElement = document.querySelector('.current_time');
const dateElement = document.querySelector('.current_date');


/** 
 * @param{Date} date
 */
function formatTime(date){
  const hours12 = date.getHours() % 12 || 12;
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();
  const isAm = date.getHours() < 12;

  return `${hours12.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")} ${isAm ? "AM" : "PM"}`;
}

/** 
 * @param{Date} date
 */

function formatDate(date){
  const Months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const DAYS = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  return `${DAYS[date.getDay()]}, ${Months[date.getMonth()]} ${date.getDate()} ${date.getFullYear()}`;
}


setInterval(() => {
  const current = new Date();
  

  timeElement.textContent = formatTime(current);
  dateElement.textContent = formatDate(current);
  
}, 200);


 
const submit = document.querySelector('.submit_btn');
const futureDateElement = document.querySelector('.future_date')
const futureDateInput = document.querySelector('.future_date--input')

submit.addEventListener('click', () =>{
  const MONTHS = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const DAYS= [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

let dateInput = futureDateInput.value
let month =  dateInput.getMonth();
month = MONTHS[month]
let day = DAYS[dateInput.getDay()];
let date = dateInput.getDate();
let year = dateInput.getFullYear();

// console.log("DAYS[dateInput.getDay()]", MONTHS[dateInput.getMonth()], dateInput.getDate(), dateInput.getFullYear());
futureDateElement.textContent =
 `
${day}
${month}
${date},
${year}
  `;
});


// let futureDate = new Date()




























// import Timer from "./Timer.js";

// new Timer(
//     document.querySelector(".countdown")
// );
