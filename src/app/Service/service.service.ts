import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Client } from '../Model/Client';


@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http: HttpClient) { }
  Url = 'http://localhost:9090/api/v1/';

  getClients() {
    return this.http.get<Client[]>(this.Url+'clients');
  }

  addClient(client:Client) {
    const headers = { 'content-type': 'application/json' }
    const body=JSON.stringify(client);
    console.log(body)
    return this.http.post(this.Url+'addClient', body, {'headers':headers})
  }
}