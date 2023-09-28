import { Component, OnInit, ViewChild, ElementRef, Renderer2 } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Employe } from '../models/Employe';
import { EmployeService } from '../services/employe.service';
import { Subject, debounceTime, distinctUntilChanged } from 'rxjs';
import { EtatEmploye } from '../models/EtatEmploye';
import { TypeEmploye } from '../models/TypeEmploye';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit{
 
  employe: Employe = new Employe(
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
  listemploye:Employe[]=[];
  message: any;
searchQuery: any;
 ngOnInit(): void {
    this.AfficherEmploye();
  }
  constructor(
    private service: EmployeService,
    private location: Location,
    private renderer: Renderer2,
    private route: ActivatedRoute,

  ) {}
  AjouterEmploye() {
    let resp = this.service.addEmploye(this.employe);
    resp.subscribe((data) => {
      this.message = data;
      window.location.reload(); // Reload the page 

    });
  }
  AfficherEmploye() {
    this.service. getListeEmploye().subscribe((data) => {
      this.listemploye = data as Employe[];
    });
  }
  
}
