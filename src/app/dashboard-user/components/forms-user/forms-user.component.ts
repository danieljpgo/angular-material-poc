import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

// Interfaces
import { Departament } from '../../models/departament.interface';
import { User } from '../../models/user.interface';

@Component({
  selector: 'app-forms-user',
  templateUrl: './forms-user.component.html',
  styleUrls: ['./forms-user.component.scss']
})
export class FormsUserComponent implements OnInit {

  @Input() user: User;
  @Output() update: EventEmitter<User> = new EventEmitter<User>();

  userForm: FormGroup;

  departament: Departament[] = [{
    key: 'programmer',
    value: 'Programmer'
  }, {
    key: 'administration',
    value: 'Administration'
  }, {
    key: 'accounting',
    value: 'Accounting'
  }];

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.userForm = this.formBuilder.group({
      name: ['', [
        Validators.required
      ]],
      email: ['', [
        Validators.required,
        Validators.email
      ]],
      departament: ['', [
        Validators.required
      ]]
    });
    console.log(this.userForm);
  }

  handleSubmit() {
    if (this.userForm.valid) {
      this.update.emit(this.userForm.value);
    }
  }

  getNameErrorMessage(): string {
    return this.userForm.get('name').hasError('required') ? 'Name is required.' : '';
  }

  getEmailErrorMessage(): string {
    return this.userForm.get('email').hasError('required') ? 'Email is required.' :
           this.userForm.get('email').hasError('email') ? 'Please enter a valid email address.' : '';
  }

  getDepartamentErrorMessage(): string {
    return this.userForm.get('departament').hasError('required') ? 'Select a department.' : '';
  }
}
