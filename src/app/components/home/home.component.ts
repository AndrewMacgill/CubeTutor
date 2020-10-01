import { Component, OnInit } from '@angular/core';
import { ModalService } from '../_modal';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private modalService: ModalService) { }

  // for scramble generator
  scramble: string;
  movesList: string[][];

  // for countdown timer
  timerDisp: number;

  moves: string[][] = [
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

  ngOnInit(): void {}
  openModal(id: string) {this.modalService.open(id);}
  closeModal(id: string) {this.modalService.close(id);}
  
  generateScramble() {
    var moveSeq: string[][] = [];
    var scrambleString: string = '';
    var prevMove: string[] = ['W', 'W', 'W'];
    var currMove: string[] = ['W', 'W', 'W'];
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
    return this.scramble;
  }

  startCountdown() {
    var counter = 15;

    const interval = setInterval(() => {
      this.timerDisp = counter;
      counter--;

      if (counter < 0) {
        clearInterval(interval);
      }
    }, 1000);
  }

}
