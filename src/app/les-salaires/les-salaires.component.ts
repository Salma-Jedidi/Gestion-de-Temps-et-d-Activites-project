import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EmployeService } from '../services/employe.service'; // Assurez-vous d'importer le service SalaireService
import { Employe } from '../models/Employe'; // Assurez-vous d'importer le modèle Employe

@Component({
  selector: 'app-les-salaires',
  templateUrl: './les-salaires.component.html',
  styleUrls: ['./les-salaires.component.css']
})
export class LesSalairesComponent implements OnInit {
  employeWithSalary: Employe[];
  salaires: Employe[] = [];
  idemploye!: number;
  employes: Employe[] = [];
  salary: number;
  employeeId: number;
  employeePassword: string;

  constructor(
    private route: ActivatedRoute,
    private employeService: EmployeService
  ) {}
  fetchSalary(): void {
    if (this.employeeId && this.employeePassword)  {
      this.employeService.getSalaireByEmploye(this.employeeId, this.employeePassword)
        .subscribe(
          (employeList: Employe[]) => {
            this.employeWithSalary = employeList;
          },
          (error) => {
            console.error('Error fetching employee with salary:', error);
            alert('veuillez ressayer');
          }
        );
    }
  }
  
  ngOnInit(): void {
    this.employeService.getSalaireByEmploye(this.employeeId, this.employeePassword)
    .subscribe(
      (employeList: Employe[]) => {
        this.employeWithSalary = employeList;
      },
      (error) => {
        console.error('Error fetching employee with salary:', error);
        alert('veuillez réessayer,l ID ou le mot de passe est incorrect');
      }
    );
}
    




/*  getListeSalaire(): void {
    this.employeService.getListeSalaire(this.idemploye).subscribe(
      (data) => {
        this.salaires = data;
      },
      (error) => {
        console.error('Erreur lors de la récupération des salaires :', error);
      }
    );
  }*/
}
