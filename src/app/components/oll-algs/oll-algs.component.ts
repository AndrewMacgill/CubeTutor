import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ollAlgs } from 'src/assets/ollAlgs';

@Component({
  selector: 'app-oll-algs',
  templateUrl: './oll-algs.component.html',
  styleUrls: ['./oll-algs.component.css']
})
export class OllAlgsComponent {
  
  ollAlgs = ollAlgs;
  constructor(private router: Router){};

}
