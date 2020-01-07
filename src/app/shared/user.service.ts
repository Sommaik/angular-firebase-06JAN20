import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) {}

  loadUser(): Observable<User[]> {
    return this.http.get<User[]>(
      environment.SERVICE_ENDPOINT + '/user'
    );
  }

  deleteUser(id: string): Observable<any> {
    return this.http.delete(
      environment.SERVICE_ENDPOINT + '/user/' + id
    );
  }

  addUser(user: User): Observable<any> {
    return this.http.post(
      environment.SERVICE_ENDPOINT + '/user',
      user
    );
  }
}
