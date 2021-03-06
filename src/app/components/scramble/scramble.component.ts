import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-scramble',
  templateUrl: './scramble.component.html',
  styleUrls: ['./scramble.component.css']
})
export class ScrambleComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {}

  // scramble properties
  scramble: string;
  scrambleGenerated: boolean = false;
  movesList: string[][];
  //countdown timer properties
  countdownTimerDisp: number;
  countdownRunning: boolean = false;
  //stopwatch properties
  stopwatchRunning: boolean = false;
  stopwatchDisplay: boolean = false;
  stopwatchSubSeconds: string;
  stopwatchSeconds: string;
  stopwatchMinutes: string;
  //solvetimes
  solveTimeList: string[];
  
  moves: string[][] = 
    [
      ['X', 'R', 'R'],
      ['X', 'R\'', 'R'],
      ['X', 'R2', 'R'],
      ['X', 'L', 'L'],
      ['X', 'L\'', 'L'],
      ['X', 'L2', 'L'],
      ['Y', 'U', 'U'],
      ['Y', 'U\'', 'U'],
      ['Y', 'U2', 'U'],
      ['Y', 'D', 'D'],
      ['Y', 'D\'', 'D'],
      ['Y', 'D2', 'D'],
      ['Z', 'F', 'F'],
      ['Z', 'F\'', 'F'],
      ['Z', 'F2', 'F'],
      ['Z', 'B', 'B'],
      ['Z', 'B\'', 'B'],
      ['Z', 'B2', 'B'],
    ];

  generateScramble() {
    this.stopwatchDisplay = false;
    this.countdownRunning=false;
    var moveSeq: string[][] = [];
    var scrambleString: string = '';
    var prevMove: string[] = [];
    var currMove: string[] = [];
    while (moveSeq.length < 20) {
      var proposedMove: string[] = this.moves[Math.floor(Math.random() * 18)];
      // if valid move (i.e. no multiple moves of same face or 3 consecutive similar axes turns (e.g. R L R))
      if (proposedMove[2] != currMove[2] && !(proposedMove[0] == prevMove[0] && proposedMove[0] == currMove[0])) {
        moveSeq.push(proposedMove);
        prevMove = currMove;
        currMove = proposedMove;
      }
    }
    moveSeq.forEach(eachMove => {
      scrambleString += eachMove[1] + ' ';
    });
    this.scramble = scrambleString;
    this.scrambleGenerated = true;
    this.countdownRunning = false;
    return this.scramble;
  }

  startCountdown() {
    this.countdownRunning = true;
    this.scrambleGenerated = false;

    var counter = 15;
    const interval = setInterval(() => {
      this.countdownTimerDisp = counter;
      counter--;
      if (counter < 0) {
        document.getElementById("stopwatchButton").click();
      }
      if (counter < 0 || !this.countdownRunning || this.stopwatchRunning) {
        clearInterval(interval);
        this.countdownRunning = false;
      }
    }, 1000);
  }

  startTimer() {
    this.stopwatchRunning = true;
    this.stopwatchDisplay = true;

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
    if (event.key === 'Enter') {
      document.getElementById("scrambleButton").click();
      this.scrambleGenerated = true;
    }
    if (event.key === ' ' && this.scrambleGenerated && !this.countdownRunning) {
      document.getElementById("countdownButton").click();
    }
    else if (event.key === ' ' && this.stopwatchRunning) {
      this.stopwatchDisplay = true;
      this.stopwatchRunning = false;
      this.solveTimeList.push(this.stopwatchMinutes + ':' + this.stopwatchSeconds + ':' + this.stopwatchSubSeconds);
      console.log(this.solveTimeList);
    }
    else if (event.key === ' ' && !this.stopwatchRunning && this.countdownRunning) {
      document.getElementById("stopwatchButton").click();
    }
  }

}
