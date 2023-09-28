
import { Employe } from '../models/Employe';
import { EmployeService } from '../services/employe.service';
import { TypeEmploye } from '../models/TypeEmploye';
import { EtatEmploye } from '../models/EtatEmploye';
import { Component, OnInit } from "@angular/core";
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import {FormBuilder, FormGroup} from "@angular/forms";
@Component({
  selector: 'app-stat',
  templateUrl: './stat.component.html',
  styleUrls: ['./stat.component.css']
})
export class StatComponent implements OnInit {
  employes: Employe[] = []; // Initialize the employes array
  nouvelEmploye: Employe = new Employe(  0,             // idemploye
  EtatEmploye.abscent, // etate
  new Date(),    // datedenaissance
  "",            // nom
  "",            // prenom
  "",            // adresseemploye
  0,             // montantavantage
  0,             // montantsalaire
  "",            // password
  TypeEmploye.unemploye);
  content?: string;
  empDetail !: FormGroup;
  empObj :    Employe = new Employe(
    0,             // idemploye
    EtatEmploye.abscent, // etate
    new Date(),    // datedenaissance
    "",            // nom
    "",            // prenom
    "",            // adresseemploye
    0,             // montantavantage
    0,             // montantsalaire
    "",            // password
    TypeEmploye.unemploye // typeEmploye
  );
  empList : Employe[] = [];
  typeEmploye = TypeEmploye; 
  etatE=EtatEmploye;
  FormBuilder: any;

  constructor(private employeService: EmployeService,private http: HttpClient, private formBuilder : FormBuilder, private route : Router) { }

  ngOnInit(): void {
    //this.chargerEmployes();
    this.getListeEmploye();
    this.empDetail = this.formBuilder.group({
      idemploye : [1] ,
      etate: [''],
      datedenaissance: [''],
      nom: [''],
      prenom: [''],
      adresseemploye: [''],
      montantavantage: ['0'],
      
      montantsalaire:['0'],
      password: ['']
    });
  }

  getListeEmploye(): void {
    this.employeService.getListeEmploye().subscribe(
      (data) => {
        this.employes = data; // Assign the received data to the employes property
      },
      (error) => {
        console.error('Error fetching employee list:', error);
      }
    );
  }
  chargerEmployes(): void {
    // Faites une requête HTTP pour charger les employés depuis le serveur
    this.http.get<Employe[]>('http://localhost:8089/api/gestion/listeEmploye').subscribe((employes) => {
      this.employes = employes;
    });
  }
  ajouterEmploye(nouvelEmploye: Employe): void {
    // Faites une requête HTTP POST pour ajouter le nouvel employé
    this.http.post('http://localhost:8089/api/gestion/ajouterEmploye', nouvelEmploye).subscribe(() => {
      // Rechargez la liste des employés après l'ajout
      this.nouvelEmploye = new Employe( 0,             // idemploye
      EtatEmploye.abscent, // etate
      new Date(),    // datedenaissance
      "",            // nom
      "",            // prenom
      "",            // adresseemploye
      0,             // montantavantage
      0,             // montantsalaire
      "",            // password
      TypeEmploye.unemploye);
      this.chargerEmployes();
    });
  }

  /* supprimerEmployee(employeASupprimer: Employe): void {
    // Faites une requête HTTP DELETE pour supprimer l'employé
    this.http.delete(`/remove-abonnement/${employeASupprimer.idemploye}`).subscribe(() => {
      // Rechargez la liste des employés après la suppression
      this.chargerEmployes();
    });
  newEmploye: Employe = {} as Employe;
  employes: Employe[] = [];
  typeEmploye = TypeEmploye; 
  etatE=EtatEmploye;
  constructor(private EmployeService: EmployeService) {}
  ngOnInit(): void { this.getListeEmploye();}
  getListeEmploye() {
    this.EmployeService.getListeEmploye()
      .subscribe(
        (employes: Employe[]) => {
          this.employes= employes; // Mettre à jour la liste des employés avec la réponse
          console.log('Liste des employés:', this.employes);
          // Handle success, afficher la liste des employés, etc.
        },
        error => {
          console.error('Error:', error);
          // Handle error
        }
      );
  } 


}*/
supprimerEmploye(idemploye: number): void {
  this.employeService.deleteEmploye(idemploye)
    .subscribe(() => {
      // Gérer le cas où la suppression réussit
    }, error => {
      console.error('Erreur lors de la suppression :', error);
    });
}

modifierEmploye(emp: Employe): void {
  this.employeService.updateEmploye(emp)
    .subscribe(updatedEmp => {
      // Gérer les mises à jour réussies
    }, error => {
      console.error('Erreur lors de la mise à jour :', error);
    });
}
showEditForm: boolean = false;
updateEmployee() {

  console.log(this.empDetail);
    this.empObj.idemploye = this.empDetail.value.idemploye;
    this.empObj.etate = this.empDetail.value.etate;
    this.empObj.nom = this.empDetail.value.nom;
    this.empObj.prenom = this.empDetail.value.prenom;
    this.empObj.datedenaissance = this.empDetail.value.datedenaissance;
    this.empObj.adresseemploye= this.empDetail.value.adresseemploye;
  
    this.empObj.password = this.empDetail.value.password;
    this.empObj.montantsalaire= this.empDetail.value.montantsalaire;
    this.empObj.montantavantage= this.empDetail.value.montantavantage;
    this.empObj.typeEmploye= this.empDetail.value.typeEmploye;

  this.employeService.updateEmploye(this.empObj).subscribe(res=>{
    console.log(res);
    this.getListeEmploye();
  },err=>{
    console.log(err);
  })
  this.showEditForm = true;
}


verifierModification(): void {
  if (this.empDetail.valid) {
    this.updateEmployee();
    this.showEditForm = false; // Masquer le formulaire après la mise à jour
  } else {
    alert('veuillez verifer les modifications')
    // Le formulaire n'est pas valide, affichez des messages d'erreur à l'utilisateur
  }
}

deletEmploye(idemploye:number) {

  this.employeService.deleteEmploye(idemploye).subscribe(res=>{
    console.log(res);
    alert('User deleted successfully');
    this.getListeEmploye();
  },err => {
    console.log(err);
  });

}
}


