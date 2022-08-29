import { Component, OnInit } from '@angular/core';
import { TransferI } from 'src/app/models/newTransfer.interface';
import { NewRecipientService } from 'src/app/services/new-recipient.service';
import { NewTransferService } from 'src/app/services/new-transfer.service';

@Component({
  selector: 'app-create-transfer',
  templateUrl: './create-transfer.component.html',
  styleUrls: ['./create-transfer.component.sass']
})
export class CreateTransferComponent implements OnInit {

  public nameSelected! : string;
  public rutNumberSelected!: number;
  public rutDvSelected!: string;
  public mailSelected! : string;
  public bankSelected! : string;
  public accTypeSelected! : string;

  // Control de feedback reactivo
  public viewForm: boolean = true;
  public viewError: boolean = false;
  public errList: any;
  public viewOK: boolean = false;
  public dataList: any;

  public recipientList: any;

  constructor(
    private apiRecipients: NewRecipientService,
    private apiTransfers: NewTransferService
  ) { }

  ngOnInit(): void {
    this.apiRecipients.getRecipients().subscribe( (data: any) =>{
      //console.table(data);
      this.recipientList = data;
    });
  }

  selectRecipient(recipientSelected : any): void {
    //Obtener el valor
    try{
      //console.log(recipientSelected.srcElement.value);
      let recipientFound = this.recipientList.find( (recipient : any)  => recipient.name === recipientSelected.srcElement.value );
      //console.log(recipientFound);
      //Asignar variables.
      this.nameSelected = recipientFound.name;
      this.mailSelected = recipientFound.mail;
      this.bankSelected = recipientFound.bank;
      this.accTypeSelected = recipientFound.accType;
      this.rutNumberSelected = recipientFound.rutNumber ;
      this.rutDvSelected = recipientFound.rutDv;
    }catch(e){
      this.nameSelected = '';
      this.mailSelected = '';
      this.bankSelected = '';
      this.accTypeSelected = '';
      this.rutNumberSelected = 0;
      this.rutDvSelected = '';
      //console.error(e);
    }
  }

  makeTransfer(amountInput : string) : void {
    console.log(amountInput);
    let dat = new Date();
    let dateNow : string = dat.getFullYear() + '-' + dat.getMonth().toString().padStart(2,'0') + '-' + dat.getDate().toString().padStart(2,'0');
    let timeNow : string = dat.getHours().toString().padStart(2,'0') + ':' + dat.getMinutes().toString().padStart(2,'0');
    //console.log("La fecha es: " + dateNow);
    //console.log("La hora es: " + timeNow);

    let newTransferObject : TransferI = {
      recName: this.nameSelected,
      recRutNumber: this.rutNumberSelected,
      recDv: this.rutDvSelected,
      recBank: this.bankSelected,
      recAccType: this.accTypeSelected,
      amount: parseInt(amountInput),
      date: dateNow,
      time: timeNow,
      originAccount: 0
    }
    console.table(newTransferObject);

    this.onCreate(newTransferObject);
  }

  onCreate(form: TransferI){
    this.apiTransfers.createNewTransfer(form).subscribe(data => {
      this.viewForm = false;
      this.viewOK = true;
      this.dataList = data;
      console.log(data);
    },err =>{
      this.viewForm = false;
      this.viewError = true;
      this.errList = err.error.message;
      console.error(err);
    });
  }

  enableForm(): void{
    this.viewForm = true;
    this.viewError = false;
    this.viewOK = false;
  }

}
