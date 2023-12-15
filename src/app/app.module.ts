import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarsComponent } from './cars/cars.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EventComponent } from './event/event.component';
import { LoginComponent } from './login/login.component';
import { MarksComponent } from './marks/marks.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PipesComponent } from './pipes/pipes.component';
import { ProductsComponent } from './products/products.component';
import { StructuralDirectivesComponent } from './structural-directives/structural-directives.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UsersComponent } from './users/users.component'
import { HttpClientModule } from '@angular/common/http';
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
import { PricePipe } from './price.pipe';
import { AccountsPipe } from './accounts.pipe';
import { UserDetailsComponent } from './user-details/user-details.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';

@NgModule({
  declarations: [
    AppComponent,
    CarsComponent,
    DashboardComponent,
    EventComponent,
    LoginComponent,
    MarksComponent,
    PageNotFoundComponent,
    PipesComponent,
    ProductsComponent,
    StructuralDirectivesComponent,
    UsersComponent,
    AccountsComponent,
    VehiclesComponent,
    CreateUserComponent,
    CreateVehiclesComponent,
    CreateAccountsComponent,
    FlipkartComponent,
    MailComponent,
    ActivityComponent,
    MemesComponent,
    UserFormComponent,
    StudentFormComponent,
    PricePipe,
    AccountsPipe,
    UserDetailsComponent,
    ParentComponent,
    ChildComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
