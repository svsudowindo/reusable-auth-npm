import { Component } from '@angular/core';
import { FORM_TYPES, VALIDATION_PATTERNS, VALIDATION_TYPES } from './reusable-auth-forms/constants/validation-patterns';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  loginForm = [
    {
      type: FORM_TYPES.TEXT,
      label: 'Email',
      id: 'email',
      required: true,
      formControlName: 'email',
      validators: [VALIDATION_PATTERNS.REQUIRED, VALIDATION_PATTERNS.EMAIL],
      validatorsTypes: [VALIDATION_TYPES.REQUIRED, VALIDATION_TYPES.PATTERN],
      validatorMessages: ['Please enter the email', 'Please enter the valid email'],
    },
    {
      type: FORM_TYPES.PASSWORD,
      label: 'Password',
      id: 'password',
      required: true,
      formControlName: 'password',
      validators: [VALIDATION_PATTERNS.REQUIRED],
      validatorsTypes: [VALIDATION_TYPES.REQUIRED],
      validatorMessages: ['Please enter the password']
    },
    {
      type: FORM_TYPES.SUBMIT,
      label: 'Sign in',
      id: 'sign_in'
    },
    {
      type: FORM_TYPES.LINK,
      label: 'Register Here',
      id: 'register_login',
      hasDescription: true,
      description: 'Dont have account yet ?',
      navigationPath: '/registration'
    }
  ];
}
