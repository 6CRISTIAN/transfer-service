import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FormHelper } from 'src/app/shared/helper/form.helper';
import { RecipientSelectModalComponent } from './components/recipient-select-modal/recipient-select-modal.component';

@Component({
  selector: 'app-transfer-form',
  templateUrl: './transfer-form.component.html',
  styleUrls: ['./transfer-form.component.scss']
})
export class TransferFormComponent extends FormHelper implements OnInit {



  constructor(
    protected snackBar: MatSnackBar,
    private fb: FormBuilder,
    public dialog: MatDialog
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
    console.log(this.form.value)
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
