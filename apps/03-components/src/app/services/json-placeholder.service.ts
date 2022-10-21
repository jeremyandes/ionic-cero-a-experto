import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JsonPlaceholderService {
  private jsonPlaceholderURL: string = 'https://jsonplaceholder.typicode.com';

  constructor(
    private http: HttpClient,
  ) { }

  public getUsers(): Observable<any> {
    return this.http.get(`${this.jsonPlaceholderURL}/users`);
  }
}
