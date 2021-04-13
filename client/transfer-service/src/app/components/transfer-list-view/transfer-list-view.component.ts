import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { TransferView } from 'src/app/shared/models/interface/tranfer.interface';


@Component({
  selector: 'app-transfer-list-view',
  templateUrl: './transfer-list-view.component.html',
  styleUrls: ['./transfer-list-view.component.scss']
})
export class TransferListViewComponent implements OnInit {

  displayedColumns: string[] = ['recipientName', 'rut', 'bankName', 'accountType', 'amount']
  dataSource: TransferView[] = []

  constructor(private _apiService: ApiService) { }

  ngOnInit(): void {
    this._apiService.getTransferList().subscribe(
      data => { this.dataSource = data }
    )
  }

}
