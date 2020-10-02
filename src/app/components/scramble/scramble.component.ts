import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-scramble',
  templateUrl: './scramble.component.html',
  styleUrls: ['./scramble.component.css']
})
export class ScrambleComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {}

  scramble: string;
  scrambleGenerated: boolean = false;
  movesList: string[][];
  timerDisp: number;
  countdownRunning: boolean = false;
  
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
    var moveSeq: string[][] = [];
    var scrambleString: string = '';
    var prevMove: string[] = [];
    var currMove: string[] = [];
    while (moveSeq.length < 12) {
      var proposedMove: string[] = this.moves[Math.floor(Math.random() * 18)];
      
      console.log('prev move: ' + prevMove + '\n'+ 'curr move: ' + currMove + '\n' + 'proposed move: ' + proposedMove);
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
    return this.scramble;
  }

  startCountdown() {
    this.countdownRunning = true;
    var counter = 15;

    const interval = setInterval(() => {
      this.timerDisp = counter;
      counter--;

      if (counter < 0) {
        clearInterval(interval);
        this.countdownRunning = false;
      }
    }, 1000);
  }

  @HostListener('window:keydown', ['$event'])
  keyEvent(event: KeyboardEvent) {
    if (event.key === 'Enter') {
      document.getElementById("scrambleButton").click();
      this.scrambleGenerated = true;
    }
    if (event.key === ' ' && this.scrambleGenerated && !this.countdownRunning) {
      document.getElementById("timer").click();
    }
  }

}
