import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { TransferFormRoutingModule } from './transfer-form-routing.module';
import { TransferFormComponent } from './transfer-form.component';

/** Material */
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [
    TransferFormComponent
  ],
  imports: [
    CommonModule,
    TransferFormRoutingModule,
    ReactiveFormsModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatSnackBarModule,
    MatButtonModule
  ]
})
export class TransferFormModule { }
