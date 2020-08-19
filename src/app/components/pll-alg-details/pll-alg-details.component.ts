import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, FormArray, FormControl, ValidatorFn} from '@angular/forms';

import { pllAlgs } from 'src/assets/pllAlgs';

@Component({
  selector: 'app-pll-alg-details',
  templateUrl: './pll-alg-details.component.html',
  styleUrls: ['./pll-alg-details.component.css']
})
export class PllAlgDetailsComponent implements OnInit {
  pllAlg;
  pllAlgName;
  form: FormGroup;
  memorisedChecking = [
    {id: 100, name: 'Memorised'},
    {id: 200, name: 'Muscle Memory'},
];

constructor(
  private route: ActivatedRoute,
  private formBuilder: FormBuilder) { 
    this.form = this.formBuilder.group({
      memorisationForm: new FormArray([])
    });

    this.addCheckboxes();
  }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
        this.pllAlgName = params.get('name');
      this.pllAlg = pllAlgs[pllAlgs.map(e => e.name).indexOf(this.pllAlgName)];
    });
  }

  checkMemorised(algMemo) {
    
  }

  isMemorised() {
    window.alert('Congrats! You\'ve memorised this algorithm');
  }

  private addCheckboxes() {
    this.memorisedChecking.forEach((o, i) => {
      const control = new FormControl(); // if first item set to true, else false
      (this.form.controls.memorisationForm as FormArray).push(control);
    });
  }

  submit(){ 
    const memoId = this.form.value.memorisationForm
    .map((v, i) => (v ? this.memorisedChecking[i].id : null))
    .filter(v => v !== null);
    console.log(memoId);
    window.alert('Congrats! You\'ve memorised this algorithm');
  }
}