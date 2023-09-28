import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Employe } from '../models/Employe';
import { catchError } from 'rxjs/operators';
import { fonction } from '../models/Fonction';
@Injectable({
  providedIn: 'root'
})
export class EmployeService {
  addEmpURL : string;
  getEmpURL : string;
  updateEmpUrl : string;
  deleteEmpUrl : string;
  verifDEmpUrl:string;
  
  private baseUrl ='http://localhost:8089/api/gestion';

 /* private baseUrl = 'http://localhost:8089/gestion';

  constructor(private http: HttpClient) {}

  addEmploye(employe: Employe): Observable<any> {
    return this.http.post(`${this.baseUrl}/ajouterEmploye`, employe);
  }
  getListeEmploye(): Observable<any> {
    return this.http.get(`${this.baseUrl}/listeEmploye`);
  }*/

  constructor(private http : HttpClient) {

    this.addEmpURL = 'http://localhost:8089/api/gestion/ajouterEmploye';
    this.getEmpURL = 'http://localhost:8089/api/gestion/listeEmploye';
    this.updateEmpUrl = 'http://localhost:8089/api/gestion/update';
    this.deleteEmpUrl = 'http://localhost:8089/api/gestion/delete';
    this.verifDEmpUrl = 'http://localhost:8089/api/gestion/checkDirigeant/{idemploye}';
  }




addEmploye(employe: Employe): Observable<any> {
  return this.http.post<Employe>(this.addEmpURL, employe).pipe(
    catchError((error: HttpErrorResponse) => {
      console.error('Error adding employee:', error);
      return throwError('An error occurred while adding employee.');
    })
  );
}
getListeEmploye(): Observable<Employe[]> {
  return this.http.get<Employe[]>(this.getEmpURL).pipe(
    catchError((error: HttpErrorResponse) => {
      console.error('Error fetching employee list:', error);
      return throwError('An error occurred while fetching employee list.');
    })
  );
}
getFonctionsContrat(idcontrat: number): Observable<fonction[]> {
  const url = `${this.baseUrl}/listeFonctions/{idcontrat}?idcontrat=${idcontrat}`;

    return this.http.get<fonction[]>(url).pipe(
      catchError((error: HttpErrorResponse) => {
        console.error('Error fetching fonction list:', error);
        return throwError('An error occurred while fetching fonction list.');
      })
    );
  }
updateEmploye(emp :Employe) : Observable<Employe>{
  return this.http.put<Employe>(this.updateEmpUrl, emp);
}

deleteEmploye(idemploye: number): Observable<void> {
  const url = `${this.baseUrl}/delete/${idemploye}`;
  
  return this.http.delete<void>(url).pipe(
    catchError((error: any) => {
      console.error(`Error deleting employee with ID ${idemploye}:`, error);
      throw error; // Rethrow the error to be handled by the caller
    })
  );
}

ajouterFonction(fonction: fonction, idcontrat : number): Observable<fonction> {
  const url = `${this.baseUrl}/ajouterFonction/${idcontrat }`;
  return this.http.post<fonction>(url, fonction);
}
/*
getListeSalaire(idemploye: number): Observable<Employe[]> {
  const url = `${this.baseUrl}/api/listeSalaire?idemploye=${idemploye}`;
  return this.http.get<Employe[]>(url);
}*/

getSalaireByEmploye(idemploye: number,password:String): Observable<Employe[]> {
  const url = `${this.baseUrl}/listeSalaire?idemploye=${idemploye}&password=${password}`;
  return this.http.get<Employe[]>(url);
}
/* checkDirig(idemploye: number): Observable<boolean> {
  return this.http.get<boolean>(this.verifDEmpUrl).pipe(
    catchError((error: HttpErrorResponse) => {
      console.error('Error fetching employee Type:', error);
      return throwError('An error occurred while fetching employee Type.');
    })
  );
  const url = `${this.verifDEmpUrl}?idemploye=${idemploye}`;
  return this.http.get<boolean>(url).pipe(
    catchError((error: HttpErrorResponse) => {
      console.error('Error fetching employee Type:', error);
      return throwError('An error occurred while fetching employee Type.');
    })
  ); 
} */
checkDirig(idemploye: number): Observable<boolean> {
  const url = `${this.verifDEmpUrl}?idemploye=${idemploye}`;
  return this.http.get<boolean>(url).pipe(
    catchError((error: HttpErrorResponse) => {
      console.error('Error fetching employee Type:', error);
      return throwError('An error occurred while fetching employee Type.');
    })
  ); 
}

}




