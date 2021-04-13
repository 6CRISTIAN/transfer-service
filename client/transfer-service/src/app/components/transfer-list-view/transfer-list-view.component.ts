import { Component, OnInit } from '@angular/core';

export interface PeriodicElement {
  recipientName: string;
  rut: number;
  amount: number;
  accountType: string;
  bankName: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { recipientName: 'Hydrogen', rut: 12312312312, bankName: 'H', accountType: 'Cuenta Vista', amount: 1.0079 },
  { recipientName: 'Helium', rut: 12312312312, bankName: 'He', accountType: 'Cuenta Vista', amount: 4.0026 },
  { recipientName: 'Lithium', rut: 12312312312, bankName: 'Li', accountType: 'Cuenta Vista', amount: 6.941 },
  { recipientName: 'Beryllium', rut: 12312312312, bankName: 'Be', accountType: 'Cuenta Vista', amount: 9.0122 },
  { recipientName: 'Boron', rut: 12312312312, bankName: 'B', accountType: 'Cuenta Vista', amount: 10.811 },
  { recipientName: 'Carbon', rut: 12312312312, bankName: 'C', accountType: 'Cuenta Vista', amount: 12.0107 },
  { recipientName: 'Nitrogen', rut: 12312312312, bankName: 'N', accountType: 'Cuenta Vista', amount: 14.0067 },
  { recipientName: 'Oxygen', rut: 12312312312, bankName: 'O', accountType: 'Cuenta Vista', amount: 15.9994 },
  { recipientName: 'Fluorine', rut: 12312312312, bankName: 'F', accountType: 'Cuenta Vista', amount: 18.9984 },
  { recipientName: 'Neon', rut: 12312312312, bankName: 'Ne', accountType: 'Cuenta Vista', amount: 20.1797 }
]

@Component({
  selector: 'app-transfer-list-view',
  templateUrl: './transfer-list-view.component.html',
  styleUrls: ['./transfer-list-view.component.scss']
})
export class TransferListViewComponent implements OnInit {

  displayedColumns: string[] = ['recipientName', 'rut', 'bankName', 'accountType', 'amount'];
  dataSource = ELEMENT_DATA;

  constructor() { }

  ngOnInit(): void { }

}
