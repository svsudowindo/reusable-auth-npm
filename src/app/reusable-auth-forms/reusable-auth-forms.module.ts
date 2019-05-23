import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReusableAuthFormsComponent } from './reusable-auth-forms.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ReusableAuthFormsService } from './reusable-auth-forms.service';

@NgModule({
  declarations: [ReusableAuthFormsComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule
  ],
  exports: [
    ReusableAuthFormsComponent
  ],
  providers: [
    ReusableAuthFormsService
  ]
})
export class ReusableAuthFormsModule { }
