import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'movimientos',
    loadChildren: () => import('./components/transfer-list-view/transfer-list-view.module').then(m => m.TransferListViewModule)
  },
  {
    path: 'tranferir',
    loadChildren: () => import('./components/transfer-form/transfer-form.module').then(m => m.TransferFormModule)
  },
  {
    path: 'nuevo-destinatario',
    loadChildren: () => import('./components/recipient-form/recipient-form.module').then(m => m.RecipientFormModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
