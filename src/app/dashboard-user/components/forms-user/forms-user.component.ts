import {Component, Inject, OnInit} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

// Interfaces
import { Departament } from '../../models/departament.interface';

@Component({
  selector: 'app-forms-user',
  templateUrl: './forms-user.component.html',
  styleUrls: ['./forms-user.component.scss']
})
export class FormsUserComponent implements OnInit {

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

  // @TODO Trocar esse any
  constructor(private formBuilder: FormBuilder, public dialogRef: MatDialogRef<FormsUserComponent>,
              @Inject(MAT_DIALOG_DATA) public userData: any) { }

  ngOnInit() {
    this.userForm = this.formBuilder.group({
      id: ['', [
        Validators.required
      ]],
      firstName: ['', [
        Validators.required
      ]],
      lastName: ['', [
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
    console.log(this.userData);
    if (this.userData.userData) {
      this.userForm.setValue(this.userData.userData);
    }
  }

  handleSubmit() {
    if (this.userForm.valid) {
      this.dialogRef.close(this.userForm.value);
    }
  }

  closeForm() {
    this.dialogRef.close();
  }

  getIdErrorMessage(): string {
    return this.userForm.get('id').hasError('required') ? 'Id is required.' : '';
  }

  getNameErrorMessage(valid: boolean): string {
    return valid ? this.userForm.get('firstName').hasError('required') ? 'First name is required.' : '' :
      this.userForm.get('lastName').hasError('required') ? 'Last name is required.' : '';
  }

  getEmailErrorMessage(): string {
    return this.userForm.get('email').hasError('required') ? 'Email is required.' :
           this.userForm.get('email').hasError('email') ? 'Please enter a valid email address.' : '';
  }

  getDepartamentErrorMessage(): string {
    return this.userForm.get('departament').hasError('required') ? 'Select a department.' : '';
  }
}
