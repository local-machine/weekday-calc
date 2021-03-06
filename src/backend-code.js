export class Date {
  constructor(year, month, dayOfMonth) {
    this.year = year;
    this.month = month;
    this.dayOfMonth = dayOfMonth;
    this.y;
    this.c;
    this.dayOfWeek;
  }

  convertDate() {
    if (this.month === "January" || this.month === "February") {
      this.year = this.year -1;
    }
    this.c = this.year.toString();
    this.c = parseInt(this.c.charAt(0) + this.c.charAt(1));
    this.y = this.year.toString();
    this.y = parseInt(this.y.charAt(2) + this.y.charAt(3));

    const months = ["March", "April", "May", "June", "July", "August", "September", "October", "November", "December", "January", "February"]
    this.month = months.indexOf(this.month) + 1;
  }

  getDayOfWeek() {
    const d = this.dayOfMonth;
    const m = this.month;
    const y = this.y;
    const c = this.c;

    this.dayOfWeek = Math.floor((d + (2.6*m - 0.2) + y + y/4 + c/4 - 2*c) % 7);

    if (this.dayOfWeek < 0) {
      this.dayOfWeek += 7;
    }
  }

  getDayName() {
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    this.dayOfWeek = days[this.dayOfWeek];
  }

  getOutput () {
    this.convertDate();
    this.getDayOfWeek();
    this.getDayName();
  }
}
