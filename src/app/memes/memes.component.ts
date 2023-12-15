import { Component } from '@angular/core';
import { MemesService } from '../memes.service';

@Component({
  selector: 'app-memes',
  templateUrl: './memes.component.html',
  styleUrls: ['./memes.component.scss']
})
export class MemesComponent {

  public memes: any = [];
  constructor(private _memesService:MemesService){
    _memesService.getMemes().subscribe(
      (memesdata:any)=>{
        this.memes = memesdata.data.memes;
      },
      (err:any)=>{
        alert('Internal server error');
      }
    )
  }
}
