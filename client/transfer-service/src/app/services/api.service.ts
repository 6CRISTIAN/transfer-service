import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { map } from 'rxjs/operators';
import { BasicModel } from '../shared/models/interface/basic-model.interface';
import { Recipient } from '../shared/models/interface/recipient.interface';
import { TransferCreate } from '../shared/models/interface/tranfer.interface';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  createNewRecipient(recipient: any): any {
    return this.http.post<any>('', recipient)
  }

  getBankList(): Observable<{ banks: BasicModel[] }> {
    return this.http.get<{ banks: BasicModel[] }>('https://bast.dev/api/banks.php');
  }

  getBankAccountTypeList(): Observable<BasicModel[]> {
    return this.http.get<BasicModel[]>('/api/bank-account-type')
      .pipe(map(list => list.map(item => ({ id: item.id, name: item.name }))))
  }

  getRecipientList(): Observable<Recipient[]> {
    return this.http.get<Recipient[]>('/api/recipient')
  }

  createTransfer(transfer: TransferCreate): Observable<TransferCreate> {
    return this.http.post<TransferCreate>('/api/recipient', transfer)
  }
}
