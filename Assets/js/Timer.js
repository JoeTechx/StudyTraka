const months = [
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
const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
export default class Timer {
  constructor(root) {
    root.innerHTML = Timer.getHtml();

    this.el = {
      months: root.querySelector(".months"),
      weeks: root.querySelector(".weeks"),
      days: root.querySelector(".days"),
      hours: root.querySelector(".hours"),
      minutes: root.querySelector(".minutes"),
      seconds: root.querySelector(".seconds"),
      control: root.querySelector(".timer__btn--control"),
      reset: root.querySelector(".timer__btn--reset"),
    };
    this.interval = null;
    this.remainingSeconds = 90;
    // this.remainingMinutes = 90;
    // this.remainingHours = 90;
    // this.remainingDays = 90;
    // this.remainingWeeks = 90;

    this.updateInterfaceControls()

    this.el.control.addEventListener("click", () => {
     if (this.interval === null){
        this.start();
     }else{
        this.stop();
     }
    });
    this.el.reset.addEventListener("click", () => {
        const inputMinutes = prompt("Enter number of minutes:")
        if(inputMinutes < 60){
     this.stop();
     this.remainingSeconds = inputMinutes * 60;
     this.updateInterfaceTime();
    }
    });
  }


    updateInterfaceTime(){

        const months = Math.floor(this.remainingSeconds / 60)
        const weeks = Math.floor(this.remainingSeconds / 60)
        const days = Math.floor(this.remainingSeconds / 60)
        const hours = Math.floor(this.remainingSeconds / 60)
        const minutes = Math.floor(this.remainingSeconds / 60);
        const seconds = this.remainingSeconds % 60;
         
        // console.log(months, weeks, days, hours, minutes, seconds);

        this.el.months.textContent = months.toString().padStart(2, '0');
        this.el.weeks.textContent = weeks.toString().padStart(2, '0');
        this.el.days.textContent = days.toString().padStart(2, '0');
        this.el.hours.textContent = hours.toString().padStart(2, '0');
        this.el.minutes.textContent = minutes.toString().padStart(2, '0');
        this.el.seconds.textContent = seconds.toString().padStart(2, '0');
    }

        updateInterfaceControls(){
            if (this.interval === null){
                // this.el.control.innerHTML = `<i class="bi bi-play-fill"></i>`
                this.el.control.classList.add("bi-play-fill")
                this.el.control.classList.remove("bi-pause-fill")
            }else{
                // this.el.control.innerHTML = `<i class="bi bi-pause-fill"></i>`
                this.el.control.classList.remove("bi-play-fill")
                this.el.control.classList.add("bi-pause-fill")
            }
        }


        start (){
            if (this.remainingSeconds === 0) return;

            this.interval = setInterval(() => {
                this.remainingSeconds--;
                this.updateInterfaceTime();

                if (this.remainingSeconds === 0) {
                    this.stop();
                }
            }, 1000);

            this.updateInterfaceControls();
        }

    stop() {
        clearInterval(this.interval);

        this.interval = null;

        this.updateInterfaceControls();
    }


  static getHtml() {
    return ` <div class="count_text">
        <i class="uil uil-exclamation-triangle"></i>
        <p>Countdown to Exam</p>
      </div>

      <div class="count_input">
        <div class="mwd">
          <div class="time">
            <span class="num months">00</span>
            <span class="text">months</span>
          </div>
          <p class="semiColoumn">:</p>
          <div class="time">
            <span class="num weeks">00</span>
            <span class="text">weeks</span>
          </div>
          <p class="semiColoumn">:</p>
          <div class="time">
            <span class="num days">00</span>
            <span class="text">days</span>
          </div>
        </div>

        <div class="hms">
          <span class="hours">00 :</span>
          <span class="minutes">00 :</span>
          <span class="seconds">00</span>
        </div>
        <i class="bi bi-alarm timer__btn--reset"></i>
        <i class="bi bi-play-fill timer__btn--control"></i>
      </div>`;
  }
}
