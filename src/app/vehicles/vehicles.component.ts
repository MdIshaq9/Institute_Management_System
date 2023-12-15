import { Component } from '@angular/core';
import { VehiclesService } from '../vehicles.service';

@Component({
  selector: 'app-vehicles',
  templateUrl: './vehicles.component.html',
  styleUrls: ['./vehicles.component.scss']
})
export class VehiclesComponent {
  public vehicles: any = [];

  constructor(private _products:VehiclesService){
    _products.getVehicles().subscribe(
      (data:any) => {
        this.vehicles = data;
      },
      (err:any) => {
        alert('Internal Server Error');
      }
    )

    
  }

}
