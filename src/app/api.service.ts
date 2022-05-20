import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class ApiService {

  private serverUrl = "http://localhost:3000";

  constructor(private httpClient: HttpClient) { }

  public get() {

    return this.httpClient.get(this.serverUrl + "/products");

  }

}
