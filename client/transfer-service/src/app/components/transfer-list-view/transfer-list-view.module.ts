import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TransferListViewRoutingModule } from './transfer-list-view-routing.module';

/** Material */
import { MatTableModule } from '@angular/material/table';
import { TransferListViewComponent } from './transfer-list-view.component';

@NgModule({
  declarations: [TransferListViewComponent],
  imports: [
    CommonModule,
    TransferListViewRoutingModule,
    MatTableModule
  ]
})
export class TransferListViewModule { }
