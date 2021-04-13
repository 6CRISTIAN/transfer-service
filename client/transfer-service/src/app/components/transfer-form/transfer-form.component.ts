import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ApiService } from 'src/app/services/api.service';
import { FormHelper } from 'src/app/shared/helper/form.helper';
import { BankAccount } from 'src/app/shared/models/interface/bank-account.interface';
import { TransferCreate } from 'src/app/shared/models/interface/tranfer.interface';
import { RecipientSelectModalComponent } from './components/recipient-select-modal/recipient-select-modal.component';

@Component({
  selector: 'app-transfer-form',
  templateUrl: './transfer-form.component.html',
  styleUrls: ['./transfer-form.component.scss']
})
export class TransferFormComponent extends FormHelper implements OnInit {

  public processTransfer: boolean = false

  constructor(
    protected snackBar: MatSnackBar,
    private fb: FormBuilder,
    public dialog: MatDialog,
    private _apiService: ApiService
  ) {
    super(snackBar)
    this.initForm()
  }

  ngOnInit(): void { }

  initForm(): void {
    this.form = this.fb.group({
      recipient: ['', Validators.required],
      amount: [0, [Validators.required, Validators.min(1)]]
    })
  }

  submit(formValue?: any): void {
    if (this.form.invalid) return
    this.processTransfer = true

    this._apiService.createTransfer(this._transferMapping())
      .subscribe(
        () => {
          this.snackBar.open('Transferencia hecha exitosamente!', 'Ok')
          this.form.reset()
        }, err => console.error(err)
      ).add(() => this.processTransfer = false)
  }

  private _transferMapping(): TransferCreate {
    const bankAccount: BankAccount = this.form.value.recipient.bankAccountList[0]
    return {
      bank_account_id: bankAccount.id,
      amount: this.form.value.amount
    }
  }

  goToSelectAccount(): void {
    const dialogRef = this.dialog.open(RecipientSelectModalComponent, {
      minWidth: '69rem'
    })

    dialogRef.afterClosed().subscribe(recipient => {
      if (recipient) this.setValue('recipient', recipient)
    })
  }

}
