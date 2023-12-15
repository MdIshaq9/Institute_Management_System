import { Component } from '@angular/core';
import { CreateAccountsService } from '../create-accounts.service';

@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.scss']
})
export class AccountsComponent {

  public accounts: any = [];

  constructor(private _accounts: CreateAccountsService) {

    _accounts.getAccounts().subscribe(
      (data:any)=> {
      this.accounts = data;
    },
    (err:any)=> {
      alert("Inter server error");
    }
    )

  }
}
