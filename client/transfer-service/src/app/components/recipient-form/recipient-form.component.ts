import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FormHelper } from 'src/app/shared/helper/form.helper';

@Component({
  selector: 'app-recipient-form',
  templateUrl: './recipient-form.component.html',
  styleUrls: ['./recipient-form.component.scss']
})
export class RecipientFormComponent extends FormHelper implements OnInit {

  public bankList = [];
  public bankAccountTypeList = [];

  constructor(
    protected snackBar: MatSnackBar,
    private fb: FormBuilder
  ) {
    super(snackBar)
    this.initForm()
  }

  ngOnInit(): void { }

  initForm(): void {
    this.form = this.fb.group({
      rut: ['', Validators.required],
      names: ['', Validators.required],
      surnames: ['', Validators.required],
      email: ['', Validators.required],
      phoneNumber: ['', Validators.required],
      bank: ['', Validators.required],
      bankAccountType: ['', Validators.required],
      accountNumber: ['', Validators.required]
    })
  }

  submit(formValue?: any) {
    if (this.form.invalid) return
    console.log(this.form.value)
  }

}
