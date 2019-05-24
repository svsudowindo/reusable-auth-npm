#Reusable Form builder
##Selector to be used
```bash
<app-reusable-auth-forms></app-reusable-auth-forms>
```
##Input parameters
```bash
formInfo: array of Objects
```

##Object defination
```bash
type: string - Type of field to display - FORM_TYPES

label: string - Name given to a field

id: string - Unique ID given to a field

required: boolean - True when the field is mandatory else false

formControlName: string - name given for a field for 2 way binding

validators: array of validator - VALIDATION_PATTERNS Enum can be used

validatorsTypes: array of validation types - VALIDATION_TYPES Enums can be used

validatorMessages: array of messages for the above mentioned validations

hasDescription: boolean - Weather we have discription or not, Used only when field type is Link 

description: string - Description given for a field, Used only when field type is Link

navigationPath: link for the direct route which should be defined in 
your project routes.
```
##Output events
```bash

formInfoEmitter($event): FormsGroup
```

##Getting Form Value
```bash
ev.value.
```
##From 0.0.5 you can use following import statement for using above constants 
```bash

import { FORM_TYPES, VALIDATION_PATTERNS, VALIDATION_TYPES } from 'reusable-auth-forms';
```
##FORM_TYPES
```bash

  EMAIL: string -> Use when your form field is of email type.
  NUMBER: string -> Use when your form field is of number type.
  TEXT: string -> Use when your form field is of text type.
  PASSWORD: string -> Use when your form field is of password type.
  CHECKBOX: string -> Use when your form field is of checkbox type.
  RADIO: string -> Use when your form field is of radio type.
  BUTTON: string -> Use when your form field is of button type.
  LINK: string -> Use when your form field is of link type.
  SUBMIT: string -> Use when your form field is of button type which act as submiting.
  RESET: string -> Use when your form field is of button type which act as resetting the form.
```

##VALIDATION_TYPES
```bash

Use following keys for giving validation types to fields

    REQUIRED: string -> Use when your form field should validate as mandatory.
    PATTERN: string -> Use when your form field should validate with pattern.
    MIN_LENGTH: string -> Use when your form field should validate with min-length.
    PHONE_NUMBER: string -> Use when your form field should validate with phone-number.
    WHITE_SPACE: string -> Use when your form field should validate with white-space.
```

##VALIDATION_PATTERNS
```bash
Use following keys as validations when user want to validate with patterns.

    EMAIL: string -> Use when validation type is email pattern.
    NAME: string -> Use when validation type is name pattern.
    PASSWORD:  string -> Use when validation type is password pattern.
    PHONE: string -> Use when validation type is phone number pattern.
    USERNAME: string -> Use when validation type is username pattern.
    POSITIVE_INTEGER: string -> Use when validation type is positive integer pattern.
    REQUIRED:  string -> Use when validation type is required.

```
#Usage Example
##Sample Array formation

Declare below loginform array inside the type script file.
```bash
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
```

##Use the following selector in HTML 
```bash
  "<app-reusable-auth-forms [formInfo]="loginForm" (formInfoEmitter)="formResult($event)"></app-reusable-auth-forms>"
```

##For getting result from the form use following method
```bash
  formResult(ev) {
      console.log(ev); // form result 
  }
```
