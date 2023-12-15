import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { StructuralDirectivesComponent } from './structural-directives/structural-directives.component';
import { MarksComponent } from './marks/marks.component';
import { PipesComponent } from './pipes/pipes.component';
import { EventComponent } from './event/event.component';
import { CarsComponent } from './cars/cars.component';
import { ProductsComponent } from './products/products.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { UsersComponent } from './users/users.component';
import { AccountsComponent } from './accounts/accounts.component';
import { VehiclesComponent } from './vehicles/vehicles.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { CreateVehiclesComponent } from './create-vehicles/create-vehicles.component';
import { CreateAccountsComponent } from './create-accounts/create-accounts.component';
import { FlipkartComponent } from './flipkart/flipkart.component';
import { MailComponent } from './mail/mail.component';
import { ActivityComponent } from './activity/activity.component';
import { MemesComponent } from './memes/memes.component';
import { UserFormComponent } from './user-form/user-form.component';
import { StudentFormComponent } from './student-form/student-form.component';
import { AuthenticationGuard } from './authentication.guard';
import { NotifyGuard } from './notify.guard';
import { UserDetailsComponent } from './user-details/user-details.component';
import { ParentComponent } from './parent/parent.component';
import { ItemsComponent } from './items/items.component';
import { NavComponent } from './nav/nav.component';
import { CartComponent } from './cart/cart.component';

const routes: Routes = [

  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  {
    path: 'dashboard', canActivate:[AuthenticationGuard], component: DashboardComponent, children: [
      {path: 'structuraldirectives', component: StructuralDirectivesComponent},
      {path: 'marks', component: MarksComponent},
      {path: 'pipes', component: PipesComponent},
      {path: 'event', component: EventComponent},
      {path: 'cars', component: CarsComponent},
      {path: 'products', component: ProductsComponent},
      {path: 'users', component: UsersComponent},
      {path: 'accounts', component: AccountsComponent},
      {path: 'vehicles', component: VehiclesComponent},
      {path: 'createuser', canDeactivate:[NotifyGuard], component:CreateUserComponent},
      {path: 'createvehicles', canDeactivate:[NotifyGuard], component:CreateVehiclesComponent},
      {path: 'createaccounts', canActivate:[NotifyGuard], component:CreateAccountsComponent},
      {path: 'flipkart', component:FlipkartComponent},
      {path: 'mail', component:MailComponent},
      {path: 'activity', component:ActivityComponent},
      {path: 'memes', component:MemesComponent},
      {path: 'userform', component:UserFormComponent},
      {path: 'studentform',component:StudentFormComponent},
      {path: 'user-details/:id', component:UserDetailsComponent},
      {path: 'edit-user/:id', component:CreateUserComponent},
      {path: 'parent', component:ParentComponent},
      {path: 'items', component:ItemsComponent},
      {path: 'nav', component:NavComponent},
      {path: 'cart', component:CartComponent}
    
    ]
  },
  {path: '**', component: PageNotFoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
