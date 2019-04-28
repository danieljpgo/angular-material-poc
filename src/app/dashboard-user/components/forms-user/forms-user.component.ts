import {Component, Inject, OnInit} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';


@Component({
  selector: 'app-forms-user',
  templateUrl: './forms-user.component.html',
  styleUrls: ['./forms-user.component.scss']
})
export class FormsUserComponent implements OnInit {

  userForm: FormGroup;

  departament: string[] = ['Programmer', 'Administration', 'Accounting'];

  constructor(private formBuilder: FormBuilder, public dialogRef: MatDialogRef<FormsUserComponent>,
              @Inject(MAT_DIALOG_DATA) public userData: any) { }

  ngOnInit() {
    this.userForm = this.formBuilder.group({
      id: [],
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
