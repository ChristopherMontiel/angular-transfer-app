import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateRecipientComponent } from './components/create-recipient/create-recipient.component';
import { CreateTransferComponent } from './components/create-transfer/create-transfer.component';
import { HistoryTransfersComponent } from './components/history-transfers/history-transfers.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    CreateRecipientComponent,
    CreateTransferComponent,
    HistoryTransfersComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
