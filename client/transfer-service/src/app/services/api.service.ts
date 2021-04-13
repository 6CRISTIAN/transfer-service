import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { BasicModel } from '../shared/models/interface/basic-model.interface';

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
}
