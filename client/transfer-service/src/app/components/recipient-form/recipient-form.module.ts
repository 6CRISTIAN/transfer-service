import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RecipientFormRoutingModule } from './recipient-form-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

/** Material */
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';


/** Custom components */
import { RecipientFormComponent } from './recipient-form.component';
import { RecipientService } from 'src/app/services/recipient.service';


@NgModule({
  declarations: [
    RecipientFormComponent
  ],
  imports: [
    CommonModule,
    RecipientFormRoutingModule,
    ReactiveFormsModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatSnackBarModule,
    MatButtonModule,
    MatProgressSpinnerModule
  ],
  providers: [RecipientService],
  exports: [
    RecipientFormComponent
  ]
})
export class RecipientFormModule { }
