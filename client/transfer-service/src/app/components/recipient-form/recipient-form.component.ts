import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { ApiService } from 'src/app/services/api.service';
import { FormHelper } from 'src/app/shared/helper/form.helper';
import { BasicModel } from 'src/app/shared/models/interface/basic-model.interface';
import { map, startWith } from 'rxjs/operators';

@Component({
  selector: 'app-recipient-form',
  templateUrl: './recipient-form.component.html',
  styleUrls: ['./recipient-form.component.scss']
})
export class RecipientFormComponent extends FormHelper implements OnInit {

  public bankList: { banks: BasicModel[] }
  public filteredBankList: Observable<BasicModel[]>

  public bankAccountTypeList: BasicModel[] = []
  public filteredBankAccountTypeList: Observable<BasicModel[]>

  constructor(
    protected snackBar: MatSnackBar,
    private fb: FormBuilder,
    private apiService: ApiService
  ) {
    super(snackBar)
    this.initForm()
  }

  ngOnInit(): void {
    this.apiService.getBankList().subscribe(data => {
      this.bankList = data
    });

    this.filteredBankList = this.getFilteredOptionsByControlName('bank')
    this.filteredBankAccountTypeList = this.getFilteredOptionsByControlName('bankAccountType')
  }

  private getFilteredOptionsByControlName(controlName: string): Observable<BasicModel[]> {
    return this.control(controlName).valueChanges.pipe(
      startWith(''), map(value => this._filter(value, this.bankAccountTypeList)))
  }

  private _filter(value: string, options: BasicModel[]): BasicModel[] {
    const filterValue = value.toLowerCase();
    return options?.filter(option => option.name.toLowerCase().indexOf(filterValue) === 0)
  }

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

  submit(formValue?: any): void {
    if (this.form.invalid) return
    console.log(this.form.value)
  }

}
