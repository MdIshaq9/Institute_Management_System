import { Component } from '@angular/core';

@Component({
  selector: 'app-marks',
  templateUrl: './marks.component.html',
  styleUrls: ['./marks.component.scss']
})
export class MarksComponent {

  public marksheets: any = [
    {name:'Tom', marks:50, grade:'a'},
    {name:'Sam', marks:40, grade:'b'},
    {name:'Tom', marks:50, grade:'c'},
    {name:'Sam', marks:30, grade:'b'}
  ]

}
