// const months = [
//   "January",
//   "February",
//   "March",
//   "April",
//   "May",
//   "June",
//   "July",
//   "August",
//   "September",
//   "October",
//   "November",
//   "December",
// ];
// const weekdays = [
//   "Sunday",
//   "Monday",
//   "Tuesday",
//   "Wednesday",
//   "Thursday",
//   "Friday",
//   "Saturday",
// ];
// export default class Timer {
//   constructor(root) {
//     root.innerHTML = Timer.getHtml();

//     this.el = {
//       months: root.querySelector(".months"),
//       weeks: root.querySelector(".weeks"),
//       days: root.querySelector(".days"),
//       hours: root.querySelector(".hours"),
//       minutes: root.querySelector(".minutes"),
//       seconds: root.querySelector(".seconds"),
//       control: root.querySelector(".timer__btn--control"),
//       reset: root.querySelector(".timer__btn--reset"),
//     };
//     this.interval = null;
//     this.remainingSeconds = 0;
  

//     // this.remainingMinutes = 90;
//     // this.remainingHours = 90;
//     // this.remainingDays = 90;
//     // this.remainingWeeks = 90;

//     // this.updateInterfaceTime();

//     this.el.control.addEventListener("click", () => {
//      if (this.interval === null){
//         this.start();
//      }else{
//         this.stop();
//      }
//     });
//       this.el.reset.addEventListener("click", () => {
//           const inputMonths = prompt("Enter number of months:")
//           if(inputMonths < 12){
//        this.stop();
//        this.remainingSeconds = inputMonths * 60;
//        this.updateInterfaceTime();
//       }
//       });
//   }

//   // getRemainingTime() {
//   //   let futureDate = new Date();
//   //   let futureTime = futureDate.getTime();
//   //   const today = new Date().getTime();
//   //   const t = futureTime - today;

//   //   // console.log(t);

//   //       // 1s = 1000ms
//   //       // 1m = 60s
//   //       // 1hr = 60min
//   //       // 1d = 24hr
//   //       // values in ms
//   //       const oneMonth = 4 * 7 * 24 * 60 * 60 * 1000;
//   //       const oneWeek = 7 * 24 * 60 * 60 * 1000;
//   //       const oneDay = 24 * 60 * 60 * 1000;
//   //       const oneHour = 60 * 60 * 1000;
//   //       const oneMinute = 60 * 1000;
//   //       // calculate all value
//   //       let months = t / oneMonth;
//   //       months = Math.floor(months);
//   //       let weeks = Math.floor((t % oneMonth) / oneWeek)
//   //       let days = Math.floor((t % oneWeek) / oneDay)
//   //       let hours = Math.floor((t % oneDay) / oneHour);
//   //       let minutes = Math.floor((t % oneHour) / oneMinute);
//   //       let seconds = Math.floor((t % oneMinute) / 1000);
//   //       console.log(months, weeks, days, hours, minutes, seconds);
//   // }

//   updateInterfaceTime() {
//     // this.getRemainingTime()
//     let futureDate = new Date();
//     let futureTime = futureDate.getTime();
//     const today = new Date().getTime();
//     const t = futureTime - today;

//     const oneMonth = 4 * 7 * 24 * 60 * 60 * 1000;
//     const oneWeek = 7 * 24 * 60 * 60 * 1000;
//     const oneDay = 24 * 60 * 60 * 1000;
//     const oneHour = 60 * 60 * 1000;
//     const oneMinute = 60 * 1000;
//         // calculate all value
//         let months = t / oneMonth;
//         months = Math.floor(months);
//         let weeks = Math.floor((t % oneMonth) / oneWeek)
//         let days = Math.floor((t % oneWeek) / oneDay)
//         let hours = Math.floor((t % oneDay) / oneHour);
//         let minutes = Math.floor((t % oneHour) / oneMinute);
//         let seconds = Math.floor((t % oneMinute) / 1000);

//     console.log(months, weeks, days, hours, ':' +  minutes, ':' + seconds);

//     this.el.months.textContent = months.toString().padStart(2, '0');
//     this.el.weeks.textContent = weeks.toString().padStart(2, '0');
//     this.el.days.textContent = days.toString().padStart(2, '0');
//     this.el.hours.textContent = hours.toString().padStart(2, '0');
//     this.el.minutes.textContent = minutes.toString().padStart(2, '0');
//     this.el.seconds.textContent = seconds.toString().padStart(2, '0');
//   }

//   updateInterfaceControls(){
//       if (this.interval === null){
//           // this.el.control.innerHTML = `<i class="bi bi-play-fill"></i>`
//           this.el.control.classList.add("bi-play-fill")
//           this.el.control.classList.remove("bi-pause-fill")
//       }else{
//           // this.el.control.innerHTML = `<i class="bi bi-pause-fill"></i>`
//           this.el.control.classList.remove("bi-play-fill")
//           this.el.control.classList.add("bi-pause-fill")
//       }
//   }

//   start (){
//       if (this.remainingSeconds === 0) return;

//       this.interval = setInterval(() => {
//           this.remainingSeconds--;
//           this.updateInterfaceTime();

//           if (this.remainingSeconds === 0) {
//               this.stop();
//           }
//       }, 1000);

//       this.updateInterfaceControls();
//   }

//   stop() {
//       clearInterval(this.interval);

//       this.interval = null;

//       this.updateInterfaceControls();
//   }

//   static getHtml() {
//     return ` <div class="count_text">
//         <i class="uil uil-exclamation-triangle"></i>
//         <p>Countdown to Exam</p>
//       </div>

//       <div class="count_input">
//         <div class="mwd">
//           <div class="time">
//             <span class="num months">00</span>
//             <span class="text">months</span>
//           </div>
//           <p class="semiColoumn">:</p>
//           <div class="time">
//             <span class="num weeks">00</span>
//             <span class="text">weeks</span>
//           </div>
//           <p class="semiColoumn">:</p>
//           <div class="time">
//             <span class="num days">00</span>
//             <span class="text">days</span>
//           </div>
//         </div>

//         <div class="hms">
//           <span class="hours">00 :</span>
//           <span class="minutes">00 :</span>
//           <span class="seconds">00</span>
//         </div>
//         <i class="bi bi-alarm timer__btn--reset"></i>
//         <i class="bi bi-play-fill timer__btn--control"></i>
//       </div>`;
//   }
// }
