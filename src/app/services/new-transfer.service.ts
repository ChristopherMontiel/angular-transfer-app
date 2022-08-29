import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TransferI } from '../models/newTransfer.interface';
import { ResponseI } from '../models/response.interface';

@Injectable({
  providedIn: 'root'
})
export class NewTransferService {

  private url: string = 'https://nest-transfer-app.herokuapp.com/';

  constructor(private http:HttpClient) { }

  createNewTransfer(form: TransferI):Observable<ResponseI>{
    let urlEndPoint: string = this.url + 'transfers';
    return this.http.post<ResponseI>(urlEndPoint,form);
  }

  getTransfers(): Observable<TransferI[]>{
    let urlEndPoint: string = this.url + 'transfers';
    return this.http.get<TransferI[]>(urlEndPoint);
  }
}
