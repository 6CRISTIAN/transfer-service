import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ApiService } from 'src/app/services/api.service';
import { Recipient } from 'src/app/shared/models/interface/recipient.interface';

@Component({
  selector: 'app-recipient-select-modal',
  templateUrl: './recipient-select-modal.component.html',
  styleUrls: ['./recipient-select-modal.component.scss']
})
export class RecipientSelectModalComponent implements OnInit {

  public recipientList: Recipient[] = []
  public retrievingRecipientList: boolean = false;

  constructor(
    private _apiService: ApiService,
    public dialogRef: MatDialogRef<RecipientSelectModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit(): void {
    this.retrievingRecipientList = true
    this._apiService.getRecipientList().subscribe(
      data => {
        this.recipientList = data
      }, err => console.error(err)
    ).add(() => this.retrievingRecipientList = false)
  }

  select(recipient: Recipient): void {
    this.dialogRef.close(recipient);
  }

}
