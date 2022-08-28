import { Injectable } from '@angular/core';
import { RecipientI } from '../models/newRecipient.interface';
import { ResponseI } from '../models/response.interface';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class NewRecipientService {

  private url: string = 'http://localhost:3000/';

  constructor(private http:HttpClient) { }

  createNewRecipient(form: RecipientI): Observable<ResponseI>{
    let urlEndPoint: string = this.url + 'recipients';
    return this.http.post<ResponseI>(urlEndPoint, form);
  }

  getRecipients(): Observable<RecipientI[]>{
    let urlEndPoint: string = this.url + 'recipients';
    return this.http.get<RecipientI[]>(urlEndPoint);
  }
}
