// config.service.ts
/*
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable()
export class ConfigService {
  constructor(private http: HttpClient) { }
  url = 'http://localhost:4000';
  getCharacters() {
    return this
      .http
      .get(`${this.url}/characters`);
  }

  private handleError(operation = 'operation', result?: T) {
    return (error: any): Observable => {
      console.error(error);
      this.log(`${operation} failed: ${error.message}`);
  
      return of(result as T);
    };
  }
  
  private log(message: string) {
    console.log(message);
  }

  getCharacters() {
    return this.http.get(`${this.url}/characters`).pipe(
      catchError(this.handleError<Characters[]>('characters', [])));
}
}
*/