import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const API_URL = 'http://localhost:8080/api/test/';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getPublicContent(): Observable<any> {
    return this.http.get(API_URL + 'all', { responseType: 'text' });
  }

  getUserBoard(): Observable<any> {
    return this.http.get(API_URL + 'user', { responseType: 'text' });
  }

  getPlayerBoard(): Observable<any> {
    return this.http.get(API_URL + 'player', { responseType: 'text' });
  }

  getAgentBoard(): Observable<any> {
    return this.http.get(API_URL + 'agent', { responseType: 'text' });
  }

  getManagerBoard(): Observable<any> {
    return this.http.get(API_URL + 'manager', { responseType: 'text' });
  }

  getExecutiveBoard(): Observable<any> {
    return this.http.get(API_URL + 'executive', { responseType: 'text' });
  }

  getRefereeBoard(): Observable<any> {
    return this.http.get(API_URL + 'referee', { responseType: 'text' });
  }

  getStaffBoard(): Observable<any> {
    return this.http.get(API_URL + 'staff', { responseType: 'text' });
  }

  getAdminBoard(): Observable<any> {
    return this.http.get(API_URL + 'admin', { responseType: 'text' });
  }
}