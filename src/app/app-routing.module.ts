import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateRecipientComponent } from './components/create-recipient/create-recipient.component';
import { CreateTransferComponent } from './components/create-transfer/create-transfer.component';
import { HistoryTransfersComponent } from './components/history-transfers/history-transfers.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  { path: '', redirectTo: '/nuevo-destinatario', pathMatch: 'full' },
  { path: 'nuevo-destinatario', component: CreateRecipientComponent },
  { path: 'transferir', component: CreateTransferComponent },
  { path: 'historial', component: HistoryTransfersComponent },
  //{ path: 'home', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
