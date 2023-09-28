import { Component } from '@angular/core';
import { Employe } from '../models/Employe';
import { EmployeService } from '../services/employe.service';
import { TypeEmploye } from '../models/TypeEmploye';
import { EtatEmploye } from '../models/EtatEmploye';
@Component({
  selector: 'app-espace-dirigeant',
  templateUrl: './espace-dirigeant.component.html',
  styleUrls: ['./espace-dirigeant.component.css']
})
export class EspaceDirigeantComponent {
  constructor(private employeService: EmployeService) {}
  //newEmploye: Employe = {} as Employe;
  idemploye: number; 
 // typeEmploye = TypeEmploye; 
 typeEmploye: string = ''; // Initialisez la variable typeEmploye
 isDirigeant: boolean = false; // Variable pour stocker si l'employé est un dirigeant
 showAlert: boolean = false; // Variable pour afficher l'alerte
 isNonDirigeant: boolean = false;
 

 checkEmployeeType(idemploye: number): void {
  this.showAlert = false; // Réinitialisez showAlert à chaque nouvelle vérification

  this.employeService.checkDirig(this.idemploye).subscribe(result => {
    if (result) {
      this.isDirigeant = true; // L'employé est un dirigeant
      this.isNonDirigeant = false; // Réinitialise la variable pour un non-dirigeant
    } else {
      this.isDirigeant = false; // Réinitialise la variable pour un dirigeant
      this.isNonDirigeant = true; // L'employé n'est pas un dirigeant
      this.showAlert = true;
    }
    /* (isDirigeant: boolean) => {
      this.isDirigeant = isDirigeant;

      // Afficher l'alerte si l'employé n'est pas un dirigeant
      if (!isDirigeant) {
        this.showAlert = true;
      } */
    },
    (error) => {
      console.error('Une erreur s est produite lors de la vérification de l  employé.', error);
      // Gérez l'erreur ici, par exemple, affichez un message d'erreur à l'utilisateur.
    }
  );
}
}