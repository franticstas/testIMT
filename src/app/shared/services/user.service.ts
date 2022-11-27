import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserResponseInterface } from '../types/response.interface';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}

  getUser(): Observable<UserResponseInterface> {
    return this.http.get<UserResponseInterface>('https://randomuser.me/api');
  }
}
