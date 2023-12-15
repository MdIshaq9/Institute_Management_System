import { Component } from '@angular/core';
import { FlipkartService } from '../flipkart.service';

@Component({
  selector: 'app-flipkart',
  templateUrl: './flipkart.component.html',
  styleUrls: ['./flipkart.component.scss']
})
export class FlipkartComponent {

  public items: any = [];
  constructor(private _getItems:FlipkartService){

    _getItems.getItems().subscribe(
      
      (data:any)=>{
        this.items = data;
      },
      (err:any)=>{
        alert("Internal server error");
      }
    )

  }

}
