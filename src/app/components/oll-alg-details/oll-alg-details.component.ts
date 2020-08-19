import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, FormArray, FormControl, ValidatorFn} from '@angular/forms';

import { ollAlgs } from 'src/assets/ollAlgs';

@Component({
  selector: 'app-oll-alg-details',
  templateUrl: './oll-alg-details.component.html',
  styleUrls: ['./oll-alg-details.component.css']
})
export class OllAlgDetailsComponent implements OnInit{
  ollAlg;
  ollAlgName;
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
      this.ollAlgName = params.get('name');
      this.ollAlg = ollAlgs[ollAlgs.map(e => e.name).indexOf(this.ollAlgName)];
    });
  }

  isMemorised() {
    window.alert('Congrats! You\'ve memorised this algorithm');
  }

  submit(){ 
    const memoId = this.form.value.memorisationForm
    .map((v, i) => (v ? this.memorisedChecking[i].id : null))
    .filter(v => v !== null);
    console.log(memoId);
    window.alert('Congrats! You\'ve memorised this algorithm');
  }

  private addCheckboxes() {
    this.memorisedChecking.forEach((o, i) => {
      const control = new FormControl(); // if first item set to true, else false
      (this.form.controls.memorisationForm as FormArray).push(control);
    });
  }
}