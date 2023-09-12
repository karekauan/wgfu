import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  formatted_hour = '';

  ngOnInit() {
    setInterval(() => {
      this.updateTime();
    }, 1000);
  }

  updateTime() {
    const date = new Date();
    date.setHours(date.getHours());
    const hours = this.padZero(date.getHours());
    const minutes = this.padZero(date.getMinutes());
    const seconds = this.padZero(date.getSeconds());

    this.formatted_hour = `${hours}:${minutes}:${seconds}`;
  }

  padZero(num: number) {
    return num < 10 ? `0${num}` : `${num}`;
  }
}
