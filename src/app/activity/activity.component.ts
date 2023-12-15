import { Component } from '@angular/core';
import { ActivityService } from '../activity.service';

@Component({
  selector: 'app-activity',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.scss']
})
export class ActivityComponent {
  public activities: any = {};
  constructor(private _activities:ActivityService){

    this. _activities.getActivity().subscribe(
      (data:any)=>{
        this.activities = data;
      },
      (err:any)=>{
        console.log('Internal Server Erro');
      }
    )

    
  }
  button(){
    this. _activities.getActivity().subscribe(
      (data:any)=>{
        this.activities = data;
      },
      (err:any)=>{
        console.log('Internal Server Erro');
      }
    )
  }
  
}

