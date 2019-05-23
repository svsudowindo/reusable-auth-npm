import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReusableAuthFormsComponent } from './reusable-auth-forms.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [ReusableAuthFormsComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule
  ],
  exports: [
    ReusableAuthFormsComponent
  ]
})
export class ReusableAuthFormsModule { }
