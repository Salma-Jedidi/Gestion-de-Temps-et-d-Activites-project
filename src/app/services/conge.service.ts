import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employe } from '../models/Employe';
@Injectable({
  providedIn: 'root'
})
export class CongeService {
  private baseUrl ='http://localhost:8089/api/gestion';
  constructor(private http : HttpClient) { }
  traiterLesDemandesConges(idemploye: number, idconge: number): Observable<boolean> {
    const url = `${this.baseUrl}/traiterLesDemandesConges?idemploye=${idemploye}&idconge=${idconge}`;
    return this.http.post<boolean>(url, null);
  }
  traiterLesDemandesAvantages(idemploye: number, isAccepted: boolean): Observable<boolean> {
    const url = `${this.baseUrl}/traiterLesDemandesAvantages?idemploye=${idemploye}`;
    return this.http.post<boolean>(url, { isAccepted });
  }

}
