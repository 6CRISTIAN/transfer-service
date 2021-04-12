import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TransferListViewComponent } from './transfer-list-view.component';

const routes: Routes = [
  { path: '', component: TransferListViewComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TransferListViewRoutingModule { }
