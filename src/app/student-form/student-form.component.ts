import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { max } from 'rxjs';

@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.scss']
})
export class StudentFormComponent {

  public studentForm: FormGroup = new FormGroup({
    name: new FormControl(null, [Validators.required, Validators.minLength(3), Validators.maxLength(10)]),
    class: new FormControl(null, [Validators.required, Validators.min(1), Validators.max(12)]),
    email: new FormControl(null, [Validators.required, Validators.email]),
    // pincode: new FormControl(null, [Validators.required, Validators.min(100000), Validators.max(999999)]),
    percentage: new FormControl(null, [Validators.required, Validators.min(1), Validators.max(100)]),
    address: new FormGroup({
      addressline: new FormControl(),
      city: new FormControl(),
      state: new FormControl(),
      pincode: new FormControl(null, [Validators.required, Validators.min(100000), Validators.max(999999)])
    }),
    
  
    cards: new FormArray([]),
    type: new FormControl(),
    busfees: new FormControl(),
    hostelfees: new FormControl()
})

  get cardsFromArray(){
    return this.studentForm.get('cards') as FormArray
  }

  add(){
    this.cardsFromArray.push(
      new FormGroup({
        class: new FormControl(),
        percentage: new FormControl()
      })
    )
  }

  delete(i:number){
    this.cardsFromArray.removeAt(i);
  }

  submit() {
    console.log(this.studentForm);
  }



}
