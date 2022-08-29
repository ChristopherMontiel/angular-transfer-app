import { Component, OnInit } from '@angular/core';
import { NewTransferService } from 'src/app/services/new-transfer.service';

@Component({
  selector: 'app-history-transfers',
  templateUrl: './history-transfers.component.html',
  styleUrls: ['./history-transfers.component.sass']
})
export class HistoryTransfersComponent implements OnInit {

  public transferList: any;
  constructor(
    private apiTransfers: NewTransferService
  ) { }

  ngOnInit(): void {
    this.apiTransfers.getTransfers().subscribe( (data: any) =>{
      console.table(data);
      this.transferList = data;
    });
  }

}
