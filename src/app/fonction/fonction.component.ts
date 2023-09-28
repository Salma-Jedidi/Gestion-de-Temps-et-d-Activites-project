import { Component, OnInit } from '@angular/core';
import {EmployeService  } from '../services/employe.service';
import { fonction } from '../models/Fonction';
import { Contrat } from '../models/Contrat';
@Component({
  selector: 'app-fonction',
  templateUrl: './fonction.component.html',
  styleUrls: ['./fonction.component.css']
})
export class FonctionComponent implements OnInit{
  fonctions: fonction[] = [];
  nouvelleFonction: fonction = new fonction(); // Initialize the Fonction object
  idcontrat?: number;
  

  constructor(private employeService: EmployeService) { }
  ngOnInit(): void {
    this.rechercherFonctions();
   /*  if (this.idcontrat) {
      // Appeler la fonction pour obtenir la liste des fonctions lors de l'initialisation
      this.getFonctionsContrat(this.idcontrat);
    } */

  }
  
  rechercherFonctions() {
    if (this.idcontrat) {
      // Appeler la fonction pour obtenir la liste des fonctions avec l'ID de contrat saisi
      this.getFonctionsContrat(this.idcontrat);
    } else {
      console.warn('Veuillez saisir un ID de contrat.');
      // Vous pouvez afficher un message d'erreur à l'utilisateur ici
    }
  }
  getFonctionsContrat(idcontrat: number): void {
    this.employeService.getFonctionsContrat(idcontrat)
      .subscribe(fonctions => {
        this.fonctions = fonctions;
      });
  }
  ajouterFonction() {
    if (this.idcontrat) {
      // Create a new Contrat object with the provided idContrat
      const contrat: Contrat = { idcontrat: this.idcontrat };
      this.nouvelleFonction
  

      this.employeService.ajouterFonction(this.nouvelleFonction,this.idcontrat).subscribe(
        (response) => {
          console.log('Fonction ajoutée:', response);
          // Handle success
        },
        (error) => {
          console.error('Erreur lors de l\'ajout de la fonction:', error);
          // Handle error
        }
      );
    } else {
      console.warn('ID Contrat is required.');
      // You might want to display an error message to the user
    }
  }

}