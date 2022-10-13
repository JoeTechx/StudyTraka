

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


function getWeekNumber(date){
  const firstDayOfTheYear = new Date(date.getFullYear(), 0, 1);
  const pastDaysOfYear = (date - firstDayOfTheYear) / 86400000;

  return Math.ceil((pastDaysOfYear + firstDayOfTheYear.getDay() + 1) / 7)
}

function isLeapYear(year){
  return year % 100 === 0 ? year % 400 === 0 : year % 4 === 0;
}

class Day {
  constructor(date = null, lang = 'default'){
    date = date ?? new Date();

    this.Date = date;
    this.date = date.getDate();
    this.day = date.toLocaleString(lang, { weekday: 'long'})
    this.dayNumber = date.getDay() + 1;
    this.dayShort =date.toLocaleString(lang, { weekday: 'short'});
    this.year = date.getFullYear();
    this.yearShort = Number(
      date.toLocaleString(lang, {year: '2-digit'})
    );
    this.monthNumber = Number(
      date.toLocaleString(lang, {month: '2-digit'})
    );
    this.month = date.toLocaleString(lang, {month: 'long'})
    this.monthShort = date.toLocaleString(lang, {month: 'short'})
    this. timestamp = date.getTime();
    this.hour = date.getHours();
    this.minute = date.getMinutes();
    this.seconds = date.getSeconds();
    this.week = getWeekNumber(date)
  }

  get isToday(){
    return this.isEqualTo(new Date());
  }

  isEqualTo(date){
    date = date instanceof Day ? date.Date : date;

    return (date.getDate() === this.date &&
    date.getMonth() === this.monthNumber - 1 && 
    date.getFullYear() === this.year
    );
  }

  format(formatStr){
    return formatStr
    .replace(/\bYYYY\b/, this.year)
    .replace(/\bYYY\b/, this.yearShort)
    .replace(/\bWW\b/, this.week.toString().padStart(2, '0'))
    .replace(/\bW\b/, this.week)
    .replace(/\bDDDD\b/, this.day)
    .replace(/\bDDD\b/, this.dayShort)
    .replace(/\bDD\b/, this.date.toString().padStart(2, '0'))
    .replace(/\bD\b/, this.date)
    .replace(/\bMMMM\b/, this.month)
    .replace(/\bMMM\b/, this.monthShort)
    .replace(/\bMM\b/, this.monthNumber.toString().padStart(2, '0'))
    .replace(/\bM\b/, this.monthNumber)
    
  }
}

// const day = new Day();

// console.log('--day', day, day.format('MM (MMM, MMMM) DD ( DDD, DDDD/WW), YYYY YYY') )

class Month{
  constructor (date = null, lang = "default"){
    const day = new Day(date, lang);
    const monthSize = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
    this.lang = lang;

    this.name = day.month;
    this.number = day.monthNumber;
    this.year = day.year;
    this.numberOfDays = monthSize[this.number - 1]

    if(this.number === 2){
    this.numberOfDays += isLeapYear(day.year) ? 1 : 0;
    }
    this[Symbol.iterator] = function* () {
      let number = 1;
      yield this.getDay(number);
      while(number < this.numberOfDays){
        ++number;
        yield this.getDay(number)
      }
    }
  }

  getDay(date){
    return new Day( new Date(this.year, this.number - 1, date), this.lang)
  }

}

// const month = new Month()

// console.log(month, month.getDay(14))

// console.log([...month])

class Calendar{
  weekDays = Array.from({length: 7})
  constructor(year = null, monthNumber = null, lang = 'default') {
    this.today = new Day(null, lang)
    this.year = year ?? this.today.year;
    this.month = new Month(new Date(this.year, (monthNumber || this.today.monthNumber) - 1), lang);
    this.lang = lang;

    this[Symbol.iterator] = function* () {
      let number = 1;
      yield this.getMonth(number);
      while(number < 12){
        ++number;
        yield this.getMonth(number)
      }
    }

    this.weekDays.forEach((_, i) => {
      const day = this.month.getDay(i + 1);
      if(!this.weekDays.includes(day.day)){
        this.weekDays[day.dayNumber - 1] = day.day; 
      }
    })
  }
    get isLeapYear(){
      return isLeapYear(this.year);
    }
  getMonth(monthNumber){
    return new Month(new Date(this.year, monthNumber - 1), this.lang);
  }

  getPreviousMonth() {
    if(this.month.number === 1)
    {
      return new Month(new Date(this.year - 1, 11), this.lang);
    }
    
      return new Month(new Date(this.year, this.month.number - 2), this.lang);
  }

  getNextMonth(){
    if(this.month.number === 12)
    {
      return new Month(new Date(this.year + 1, 0), this.lang);
    }
      return new Month(new Date(this.year, this.month.number + 2), this.lang);
  }

  goToDate(monthNumber, year){
    this.month = new Month(new Date(year, monthNumber - 1), this.lang);
    this.year = year;
  }
  goToNextYear(){
    this.year += 1;
    this.month = new Month(new Date(this.year, 0), this.lang);
  }

  goToNextYear(){
    this.year -= 1;
    this.month = new Month(new Date(this.year,  11), this.lang);
  }
  goToNextMonth(){
    if(this.month.number === 12)   {
      return this.goToNextYear();
    }
      this.month = new Month(new Date(this.year, (this.month.number + 1) - 1), this.lang);
    }
  goToPreviousMonth(){
    if(this.month.number === 12)   {
      return this.goToPreviousYear();
    }
      this.month = new Month(new Date(this.year, (this.month.number - 1) - 1), this.lang);
  }
}

// const cal = new Calendar();

// console.log(cal)

// for(month of cal){
//   console.log(month)
// }

























// import Timer from "./Timer.js";

// new Timer(
//     document.querySelector(".countdown")
// );
