import { Component } from '@angular/core';
import { CongeService } from '../services/conge.service';
@Component({
  selector: 'app-traitement-des-demandes',
  templateUrl: './traitement-des-demandes.component.html',
  styleUrls: ['./traitement-des-demandes.component.css']
})
export class TraitementDesDemandesComponent {
  idemployeValue: number;
  idcongeValue: number;
  requestStatus: string;

  constructor(private congeService: CongeService) {}
  processConge() {
    if (this.idemployeValue && this.idcongeValue) {
      this.congeService.traiterLesDemandesConges(this.idemployeValue, this.idcongeValue).subscribe(
        (result: boolean) => {
          if (result) {
            console.log('Congé accepté');
            // Perform further actions if needed
          } else {
            console.log('Congé non accepté ou employé introuvable');
            // Handle the failure case
          }
        },
        (error) => {
          console.error('Error:', error);
          // Handle the error
        }
      );
    } else {
      console.log('Please provide both employee ID and conge ID.');
    }
  }
  acceptRequest() {
    this.processRequest(true);
  }

  rejectRequest() {
    this.processRequest(false);
  }

  processRequest(isAccepted: boolean) {
    if (this.idemployeValue) {
      this.congeService.traiterLesDemandesAvantages(this.idemployeValue, isAccepted).subscribe(
        (result: boolean) => {
          if (result) {
            this.requestStatus = isAccepted ? 'The request has been accepted.' : 'The request has been rejected.';
          } else {
            this.requestStatus = 'Request processing failed.';
          }
        },
        (error) => {
          console.error('Error:', error);
          this.requestStatus = 'An error occurred.';
        }
      );
    } else {
      this.requestStatus = 'Please provide an employee ID.';
    }
  }
}





