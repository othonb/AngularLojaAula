import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class ApiService {

  private serverUrl = "http://localhost:8080";

  constructor(private httpClient: HttpClient) { }

  errorHandler(error : HttpErrorResponse) {

    let errorMessage = "Erro desconhecido!!!";

    if (error.error instanceof ErrorEvent) {

      // Erros do lado do cliente
      errorMessage = `Erro: ${error.error.message}`;

    } else {

      errorMessage = `Código do Erro: ${error.status}, ${error.message}`;

    }

    window.alert(errorMessage);

    return throwError(() => new Error(errorMessage));

  }

  public get() {

    return this.httpClient.get(this.serverUrl + "/products").pipe(catchError(this.errorHandler));

  }

}
