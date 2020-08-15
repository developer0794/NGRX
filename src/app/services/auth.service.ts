import { Injectable } from '@angular/core';
import { RegisterStateInterface } from '../store/auth/interfaces/registerState.interface';
import { Register } from '../store/auth/interfaces/register.interface';
import { Observable } from 'rxjs';

import { UserDetails } from 'src/app/interfaces/auth/user-detailsinterface.';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  register(data): Observable<any> {
    const url = 'https://conduit.productionready.io/api/users';
    return this.http.post(url, data);
  }
}
