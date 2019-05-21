import { Component, OnInit, Input, OnChanges, Injector, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BaseClass } from './services/baseClass';
import Utils from './utils';
import { VALIDATION_TYPES, FORM_TYPES } from './constants/validation-patterns';
import { CustomValidators } from './services/validators';

@Component({
  selector: 'app-reusable-auth-forms',
  templateUrl: './reusable-auth-forms.component.html',
  styleUrls: ['./reusable-auth-forms.component.scss']
})
export class ReusableAuthFormsComponent extends BaseClass implements OnInit, OnChanges {
  @Input()
  public formInfo: any[];

  @Output()
  formInfoEmitter: EventEmitter<any> = new EventEmitter();
  public validation_messages = {};
  public dynamicForm: FormGroup;
  constructor(public _formBuilder: FormBuilder,
    public injector: Injector,
    public _router: Router) {
    super(injector);
  }

  ngOnInit() {
  }

  ngOnChanges() {
    this.createDynamicForm();
  }

  // For Creating Dynamic Forms
  public createDynamicForm() {
    const formControl = {};
    for (let i = 0; i < this.formInfo.length; i++) {
      const field = this.formInfo[i];
      if (this.isTextField(field.type)) {
        if (Utils.isValidInput(field) && Utils.isValidInput(field['validators']) && field['validators'].length > 0) {
          this.validation_messages[field['formControlName']] = [];
          const validatorsArray = this.frameValidations(field);
          formControl[field['formControlName']] = ['', Validators.compose(validatorsArray)];
        }
      }
    }
    this.dynamicForm = this._formBuilder.group(formControl);
  }

  // Frames validation messages and Validators array
  public frameValidations(field) {
    const validatorsArray = [];
    for (let j = 0; j < field['validators'].length; j++) {
      if (field['validatorsTypes'][j] === VALIDATION_TYPES.PATTERN) {
        validatorsArray[j] = Validators.pattern(field['validators'][j]);
      } else if (field['validatorsTypes'][j] === VALIDATION_TYPES.REQUIRED) {
        validatorsArray[j] = Validators[field['validators'][j]];
      } else if (field['validatorsTypes'][j] === VALIDATION_TYPES.MAX_LENGTH) {
        validatorsArray[j] = Validators.maxLength(field['validators'][j]);
      } else if (field['validatorsTypes'][j] === VALIDATION_TYPES.MIN_LENGTH) {
        validatorsArray[j] = Validators.minLength(field['validators'][j]);
      } else if (this.checkCustomValidation(field['validatorsTypes'][j])) {
        validatorsArray[j] = CustomValidators[field['validators'][j]];
      }
      const fieldErrors = {
        type: field['validatorsTypes'][j],
        message: field['validatorMessages'][j]
      };
      this.validation_messages[field['formControlName']].push(fieldErrors);
    }
    return validatorsArray;
  }

  public checkCustomValidation(type) {
    if (type === VALIDATION_TYPES.PHONE_NUMBER || type === VALIDATION_TYPES.WHITE_SPACE) {
      return true;
    }
  }
  public isTextField(type) {
    if (type === FORM_TYPES.TEXT || type === FORM_TYPES.PASSWORD || type === FORM_TYPES.EMAIL || type === FORM_TYPES.NUMBER) {
      return true;
    }
  }
  public isButton(type) {
    if (type === FORM_TYPES.BUTTON || type === FORM_TYPES.SUBMIT || type === FORM_TYPES.RESET) {
      return true;
    }
  }
  public isLink(type) {
    if (type === FORM_TYPES.LINK) {
      return true;
    }
  }
  public formSubmit() {
    this.formInfoEmitter.emit(this.dynamicForm.value);
  }
  public isFormValid() {
    return this.dynamicForm.invalid;
  }


  public navigate(groupedInfo) {
    console.log('hai');
    if (Utils.isValidInput(groupedInfo) && Utils.isValidInput(groupedInfo.link)) {
      this._router.navigateByUrl(groupedInfo.link);
    }
  }
}
