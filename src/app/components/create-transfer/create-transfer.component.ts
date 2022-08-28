import { Component, OnInit } from '@angular/core';
import { NewRecipientService } from 'src/app/services/new-recipient.service';

@Component({
  selector: 'app-create-transfer',
  templateUrl: './create-transfer.component.html',
  styleUrls: ['./create-transfer.component.sass']
})
export class CreateTransferComponent implements OnInit {

  public recipientList: any;

  constructor(
    private apiRecipients: NewRecipientService
  ) { }

  ngOnInit(): void {
    this.apiRecipients.getRecipients().subscribe( (data: any) =>{
      console.table(data);
      this.recipientList = data;
    });
  }

}
