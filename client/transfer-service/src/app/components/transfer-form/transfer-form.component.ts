import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FormHelper } from 'src/app/shared/helper/form.helper';

@Component({
  selector: 'app-transfer-form',
  templateUrl: './transfer-form.component.html',
  styleUrls: ['./transfer-form.component.scss']
})
export class TransferFormComponent extends FormHelper implements OnInit {

  public recipientList: any = []

  constructor(
    protected snackBar: MatSnackBar,
    private fb: FormBuilder
  ) {
    super(snackBar)
    this.initForm()
  }

  ngOnInit(): void { }

  initForm() {
    this.form = this.fb.group({
      recipient: ['', Validators.required],
      amount: [0, [Validators.required, Validators.min(1)]]
    })
  }

  submit(formValue?: any) {
    if (this.form.invalid) return
    console.log(this.form.value)
  }

}
