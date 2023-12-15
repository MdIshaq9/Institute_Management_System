import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { VehiclesService } from '../vehicles.service';


@Component({
  selector: 'app-create-vehicles',
  templateUrl: './create-vehicles.component.html',
  styleUrls: ['./create-vehicles.component.scss']
})
export class CreateVehiclesComponent {
  public vehicleForm: FormGroup = new FormGroup({

    Vehicle: new FormControl(),
    manufacturer: new FormControl(),
    model: new FormControl(),
    type: new FormControl(),
    fuel: new FormControl(),
    color: new FormControl(),
    image: new FormControl(),

  })

  submit(){
    console.log(this.vehicleForm);
    this._createVehicles.createVehicles(this.vehicleForm.value).subscribe(
      (data:any)=>{
        alert("Vehicle has been submited successfully");
      },
      (err:any)=>{
        alert("Internal server error");
      }
    )
  }

  constructor(private _createVehicles:VehiclesService){}

}
