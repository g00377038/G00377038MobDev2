import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.page.html',
  styleUrls: ['./timer.page.scss'],
})
export class TimerPage implements OnInit {

  time: BehaviorSubject<string> = new BehaviorSubject("35");
  message: string = "";
  timer: number;
  interval;

  //variable begins in 'stop' value
  state: 'start' | 'stop' = 'stop'; 

  constructor() {}

  startTimer(duration: number) {
    this.state = 'start';

    //do not create multiple intervals
    clearInterval(this.interval);
    this.timer = duration;

    //countdown begins immediately
    this.updateTimeValue();

    //change duration value every second
    this.interval = setInterval(() => {
      this.updateTimeValue();
    }, 1000);
  }

  updateTimeValue() {
    let seconds: any = this.timer;
    const text = seconds;
    this.time.next(text);

    //stop when timer reaches 0 seconds
    if (seconds < 0) {
      this.stopTimer();
    }

    //decrement timer by 1 second
    --this.timer;
  }

  stopTimer() {
    this.state = 'stop';

    //reset timer
    clearInterval(this.interval);
    this.time.next('35');
  }

  ngOnInit() {
  }

}
