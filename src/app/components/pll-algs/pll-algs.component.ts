import { Component, OnInit } from '@angular/core';
import { pllAlgs } from 'src/assets/pllAlgs';
import { Router } from '@angular/router';
import { ModalService } from '../_modal';

@Component({
  selector: 'app-pll-algs',
  templateUrl: './pll-algs.component.html',
  styleUrls: ['./pll-algs.component.css']
})
export class PllAlgsComponent {

  pllAlg;
  pllAlgName;
  pllAlgs = pllAlgs;

  constructor(
    private router: Router,
    private modalService: ModalService) { }

  openModal(id: string) {
    this.modalService.open(id);
  }
  
  closeModal(id: string) {
    this.modalService.close(id);
  }
}
