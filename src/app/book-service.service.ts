import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BookServiceService {

  

  getBooks():Observable<any>{
    return this.httpclient.get("https://www.googleapis.com/books/v1/volumes?q=fiction")

  }

  constructor(private httpclient:HttpClient) { }
}
