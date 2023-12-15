import { Component } from '@angular/core';
import { UserService } from '../user.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent { 

  public studentsdata: any = [];
  public term:string = "";
  public column:string = "";
  public order:string= "";
  public pageno:number=0;

  constructor(private userservice: UserService, private _router: Router) {

    userservice.getusers().subscribe(
      (data: any) => {
        this.studentsdata = data;
      },
      (error: any) => {
        alert("Internal server error");
      }
    )
  }

  gerFilteredUsers(){

    this.userservice.getFilteredUsers(this.term).subscribe(
      (data:any)=>{
        this.studentsdata=data;
      },
      (err:any)=>{
        alert('internal server error')
      }
    )
  }

  sort(){

    this.userservice.getSortedUsers(this.column,this.order).subscribe(
      (data:any)=>{
        this.studentsdata=data;
      },
      (err:any)=>{
        alert("internal server error");
      }
    )

  }

  page(){
    this.userservice.getPagedUsers(this.pageno).subscribe(
      (data:any)=>{
        this.studentsdata=data;
      },
      (err:any)=>{
        alert("Internal Server error");
      }
    )
  }

  delete(id:string){
    this.userservice.deleteUser(id).subscribe(
      (data:any)=>{
        alert("deleted successfully");
        location.reload();
      },
      (err:any)=>{
        alert("internal server error");
      }
    )
  }

  view(id:number){
    this._router.navigateByUrl("/dashboard/user-details/"+id)
  }

  edit(id:number){
    this._router.navigateByUrl("/dashboard/edit-user/"+id);
  }
}
