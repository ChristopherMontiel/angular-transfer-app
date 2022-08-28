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

  constructor(
    private apiBanks: GetBanksService
  ) { }

  ngOnInit(): void {

    this.formRecipient = new FormGroup(
      {
        rut: new FormControl('',[Validators.required, Validators.minLength(3)]),
        nombre: new FormControl('',[Validators.required, Validators.minLength(3)]),
        correo: new FormControl('', [Validators.required, Validators.email]),
        telefono: new FormControl('',[Validators.required, Validators.minLength(3)]),
        banco: new FormControl('',[Validators.required, Validators.minLength(3)]),
        cuenta: new FormControl('',[Validators.required, Validators.minLength(3)]),
        nCuenta: new FormControl('',[Validators.required, Validators.minLength(3)])
      }
    );

    this.apiBanks.getAllBanks().subscribe( (data: any) =>{
      //console.log(data);
      this.bankList = data.banks;
    });
  }

  /*onCreate(form: RecipientI){
    this.apiRecipient.createNewRecipient(form).subscribe(data => {
      console.log(data);
    })
  }*/
  onCreate(){
    console.log(this.formRecipient.value);
  }

}
