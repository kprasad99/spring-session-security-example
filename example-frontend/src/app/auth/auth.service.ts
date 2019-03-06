import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  public login<T>(username: string, password: string): Observable<HttpResponse<T>> {
    let headers = new HttpHeaders();
    headers = headers.append("Authorization", "Basic " + btoa(`${username}:${password}`));
    headers = headers.append("Content-Type", "application/x-www-form-urlencoded");
    return this.http.get<T>('/auth/login', {
      headers: headers,
      observe: 'response'
    });
  }

  public logout<T>() {
    this.http.post('/auth/logout', '', {}).subscribe();
  }
}
