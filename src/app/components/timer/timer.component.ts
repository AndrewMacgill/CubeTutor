import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})
export class TimerComponent implements OnInit {

  constructor() { }

  stopwatchRunning: boolean = false;
  
  stopwatchSubSeconds: string;
  stopwatchSeconds: string;
  stopwatchMinutes: string;

  ngOnInit(): void {}

  testTimer() {
    this.stopwatchRunning = true;

    var stopwatchTime = 0;
    const timerInterval = setInterval(() => {
      ((stopwatchTime % 100).toString().length == 1)?this.stopwatchSubSeconds = '0' + (stopwatchTime % 100).toString() : this.stopwatchSubSeconds = (stopwatchTime % 100).toString();
      (Math.floor((stopwatchTime/100) % 60).toString().length == 1)?this.stopwatchSeconds = '0' + Math.floor((stopwatchTime/100) % 60).toString() : this.stopwatchSeconds =  Math.floor((stopwatchTime/100) % 60).toString();
      (Math.floor((stopwatchTime/6000) % 60).toString().length == 1)?this.stopwatchMinutes = '0' + Math.floor((stopwatchTime/6000) % 60).toString() : this.stopwatchMinutes = Math.floor((stopwatchTime/6000) % 60).toString();
      stopwatchTime ++;
      if (!this.stopwatchRunning) {
        clearInterval(timerInterval);
      }
    }, 10);
  }

  @HostListener('window:keydown', ['$event'])
  keyEvent(event: KeyboardEvent) {
    if (event.key === ' ' && this.stopwatchRunning) {
      this.stopwatchRunning = false;
    }
    else if (event.key === ' ' && !this.stopwatchRunning) {
      document.getElementById("timerButton").click();
    }
    
  }

}
