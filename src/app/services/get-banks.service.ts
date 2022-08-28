import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BankListI } from '../models/bankList.interface';

@Injectable({
  providedIn: 'root'
})
export class GetBanksService {

  private ulrEndPoint: string = 'https://bast.dev/api/banks.php';

  constructor(private http:HttpClient) { }

  getAllBanks():Observable<BankListI[]>{
    return this.http.get<BankListI[]>(this.ulrEndPoint);
  }

}
