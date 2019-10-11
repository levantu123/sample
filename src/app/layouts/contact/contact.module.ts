import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactRoutingModule } from './contact-routing.module';
import { AddContactComponent } from './add-contact/add-contact.component';
import { AllContactComponent } from './all-contact/all-contact.component';


@NgModule({
  declarations: [AddContactComponent, AllContactComponent],
  imports: [
    CommonModule,
    ContactRoutingModule
  ]
})
export class ContactModule { }
