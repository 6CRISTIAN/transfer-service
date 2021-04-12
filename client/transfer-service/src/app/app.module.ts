import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RecipientFormComponent } from './components/recipient-form/recipient-form.component';
import { TransferFormComponent } from './components/transfer-form/transfer-form.component';
import { TransferListViewComponent } from './components/transfer-list-view/transfer-list-view.component';

/** Material */
import { MatTabsModule } from '@angular/material/tabs';

@NgModule({
  declarations: [
    AppComponent,
    RecipientFormComponent,
    TransferFormComponent,
    TransferListViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTabsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
