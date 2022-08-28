import { Component, OnInit } from '@angular/core';
import { GetBanksService } from '../../services/get-banks.service';


@Component({
  selector: 'app-create-recipient',
  templateUrl: './create-recipient.component.html',
  styleUrls: ['./create-recipient.component.sass']
})
export class CreateRecipientComponent implements OnInit {

  bankList: any;

  constructor(
    private apiBanks: GetBanksService
  ) { }

  ngOnInit(): void {
    this.apiBanks.getAllBanks().subscribe( (data: any) =>{
      //console.log(data);
      this.bankList = data.banks;
    });
  }

}
