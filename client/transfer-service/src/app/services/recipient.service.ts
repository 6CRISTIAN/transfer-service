import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BasicModel } from '../shared/models/interface/basic-model.interface';

@Injectable({
  providedIn: 'root'
})
export class RecipientService {

  constructor(private http: HttpClient) { }

  public mappingData(formValue: any, bankList: BasicModel[], bankAccountTypeList: BasicModel[]): any {
    const bank = bankList.find(item => item.name === formValue.bank)
    const bankAccountType = bankAccountTypeList.find(item => item.name === formValue.bankAccountType)

    return {
      rut: formValue.rut || '',
      names: formValue.names || '',
      surnames: formValue.surnames || '',
      email: formValue.email || '',
      phoneNumber: formValue.phoneNumber || '',
      accountNumber: formValue.accountNumber,
      bank,
      bankAccountType
    }
  }

  createRecipient(newRecipient: any): Observable<any> {
    return this.http.post<any>('/api/recipient', newRecipient)
  }
}
