import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AccountsService } from '../accounts.service';
import { CreateAccountsService } from '../create-accounts.service';


@Component({
  selector: 'app-create-accounts',
  templateUrl: './create-accounts.component.html',
  styleUrls: ['./create-accounts.component.scss']
})
export class CreateAccountsComponent {

  public accountsForm: FormGroup = new FormGroup({
    account_name: new FormControl(),
    available_balance: new FormControl(),
    account_number: new FormControl(),
    city: new FormControl(),
    profie_picture: new FormControl()
  })

  constructor(private _accountsService:CreateAccountsService){ }

  submit(){
    console.log(this.accountsForm);

    this. _accountsService.createAccounts(this.accountsForm).subscribe(
      (data:any)=>{
        alert("Your Accounts form submitted Succesfully");
      },
      (data:any)=>{
        alert("Internal server error");
      }
    )
  }

}
