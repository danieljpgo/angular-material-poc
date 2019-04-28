import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<ModalComponent>,  @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() { }

  handleClick(validation: boolean) {
    this.dialogRef.close(validation);
  }

}
