

const timeElement = document.querySelector('.time_start')
const dateElement = document.querySelector('.date_start')


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


 

































// import Timer from "./Timer.js";

// new Timer(
//     document.querySelector(".countdown")
// );
