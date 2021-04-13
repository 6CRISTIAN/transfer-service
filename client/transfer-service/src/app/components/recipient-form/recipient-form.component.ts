import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { ApiService } from 'src/app/services/api.service';
import { FormHelper } from 'src/app/shared/helper/form.helper';
import { BasicModel } from 'src/app/shared/models/interface/basic-model.interface';
import { map, startWith } from 'rxjs/operators';
import { RecipientService } from 'src/app/services/recipient.service';

@Component({
  selector: 'app-recipient-form',
  templateUrl: './recipient-form.component.html',
  styleUrls: ['./recipient-form.component.scss']
})
export class RecipientFormComponent extends FormHelper implements OnInit {

  public bankList: BasicModel[]
  public filteredBankList: Observable<BasicModel[]>

  public bankAccountTypeList: BasicModel[] = []
  public filteredBankAccountTypeList: Observable<BasicModel[]>
  public savingRecipient: boolean;

  constructor(
    protected snackBar: MatSnackBar,
    private fb: FormBuilder,
    private recipientService: RecipientService,
    private apiService: ApiService
  ) {
    super(snackBar)
    this.initForm()
  }

  ngOnInit(): void {
    this.apiService.getBankList().subscribe(data => {
      this.bankList = data.banks
      this.filteredBankList = this.getFilteredListByControlName('bank', data.banks)
    }, err => console.error(err))

    this.apiService.getBankAccountTypeList().subscribe(data => {
      this.bankAccountTypeList = data
      this.filteredBankAccountTypeList = this.getFilteredListByControlName('bankAccountType', this.bankAccountTypeList)
    }, err => console.error(err))
  }

  private getFilteredListByControlName(controlName: string, listFilter: BasicModel[]): Observable<BasicModel[]> {
    return this.control(controlName)?.valueChanges.pipe(
      startWith(''), map(value => this._filter(value, listFilter)))
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
    this.savingRecipient = true

    const recipientMapped = this.recipientService
      .mappingData(this.form.value, this.bankList, this.bankAccountTypeList)

    this.recipientService.createRecipient(recipientMapped)
      .subscribe(
        () => {
          this.snackBar.open('Creado exitosamente!', 'Ok')
          this.form.reset()
        }, err => console.error(err)
      ).add(() => this.savingRecipient = false)
  }

}
