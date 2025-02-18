import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerComponent } from './customer.component';
import { CrudcustomerComponent } from './crudcustomer/crudcustomer.component';
import { RouterModule } from '@angular/router';
import { AllcustomerComponent } from './allcustomer/allcustomer.component';


@NgModule({
  declarations: [
    CustomerComponent,
    CrudcustomerComponent,
    AllcustomerComponent
  ],
  imports: [
    CommonModule,RouterModule
  ]
})
export class CustomerModule { }
