import { Component, OnInit } from '@angular/core';
import { ollAlgs } from 'src/assets/ollAlgs';
import { Router } from '@angular/router';
import { ModalService } from '../_modal';

@Component({
  selector: 'app-oll-algs',
  templateUrl: './oll-algs.component.html',
  styleUrls: ['./oll-algs.component.css']
})
export class OllAlgsComponent {

  ollAlgs=ollAlgs;

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