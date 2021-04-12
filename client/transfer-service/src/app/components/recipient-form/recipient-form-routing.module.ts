import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecipientFormComponent } from './recipient-form.component';

const routes: Routes = [
  { path: '', component: RecipientFormComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RecipientFormRoutingModule { }
