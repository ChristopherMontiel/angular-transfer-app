import { Component, OnInit } from '@angular/core';
import { NewRecipientService } from 'src/app/services/new-recipient.service';

@Component({
  selector: 'app-create-transfer',
  templateUrl: './create-transfer.component.html',
  styleUrls: ['./create-transfer.component.sass']
})
export class CreateTransferComponent implements OnInit {

  nameSelected! : string;
  mailSelected! : string;
  bankSelected! : string;
  accTypeSelected! : string;

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

  selectRecipient(recipientSelected : any): void {
    //Obtener el valor
    try{
      console.log(recipientSelected.srcElement.value);
      let recipientFound = this.recipientList.find( (recipient : any)  => recipient.name === recipientSelected.srcElement.value );
      console.log(recipientFound);
      //Asignar variables.
      this.nameSelected = recipientFound.name;
      this.mailSelected = recipientFound.mail;
      this.bankSelected = recipientFound.bank;
      this.accTypeSelected = recipientFound.accType;
    }catch(e){
      this.nameSelected = '';
      this.mailSelected = '';
      this.bankSelected = '';
      this.accTypeSelected = '';
      //console.error(e);
    }



  }

}
