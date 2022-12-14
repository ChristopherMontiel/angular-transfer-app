import { Component, OnInit } from '@angular/core';
import { GetBanksService } from '../../services/get-banks.service';
import { NewRecipientService } from 'src/app/services/new-recipient.service';
import { RecipientI } from 'src/app/models/newRecipient.interface';
import { ResponseI } from 'src/app/models/response.interface';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-recipient',
  templateUrl: './create-recipient.component.html',
  styleUrls: ['./create-recipient.component.sass']
})
export class CreateRecipientComponent implements OnInit {

  public bankList: any;
  public formRecipient: FormGroup = new FormGroup({});

  // Control de feedback reactivo
  public viewForm: boolean = true;
  public viewError: boolean = false;
  public errList: any;
  public viewOK: boolean = false;
  public dataList: any;

  constructor(
    private apiBanks: GetBanksService,
    private apiRecipient: NewRecipientService
  ) { }

  ngOnInit(): void {

    this.formRecipient = new FormGroup(
      {
        rut: new FormControl('',[Validators.required, Validators.minLength(9)]),
        name: new FormControl('',[Validators.required, Validators.minLength(7)]),
        mail: new FormControl('', [Validators.required, Validators.email]),
        //mail: new FormControl('', [Validators.required]),
        phone: new FormControl('',[Validators.required, Validators.minLength(3)]),
        bank: new FormControl('',[Validators.required, Validators.minLength(3)]),
        accType: new FormControl('',[Validators.required, Validators.minLength(3)]),
        accNumber: new FormControl('',[Validators.required, Validators.minLength(3)])
      }
    );

    this.apiBanks.getAllBanks().subscribe( (data: any) =>{
      //console.table(data.banks);
      this.bankList = data.banks;
    });
  }

  onCreate(form: RecipientI): void {
    //console.log("longitud del rut: " + form.rut.length);
    //console.log("transformación:" + form.rut.slice(0, form.rut.length-2));
    //console.log("transformación:" + form.rut.slice(form.rut.length-1, form.rut.length));
    form.rutNumber = parseInt(form.rut.slice(0, form.rut.length-2));
    form.rutDv = form.rut.slice(form.rut.length-1, form.rut.length);
    /* console.log("rutNumber: " + form.rutNumber);
    console.log("rutDv: " + form.rutDv); */
    //console.log(form);

    this.apiRecipient.createNewRecipient(form).subscribe(data => {
      this.viewForm = false;
      this.viewOK = true;
      this.dataList = data;
      console.log(data);
    },err => {
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
