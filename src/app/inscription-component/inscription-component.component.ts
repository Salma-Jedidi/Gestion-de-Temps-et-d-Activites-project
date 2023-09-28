import { Component,OnInit ,Renderer2 } from '@angular/core';
import {EmployeService  } from '../services/employe.service';
import { Employe } from '../models/Employe';
import { TypeEmploye } from '../models/TypeEmploye';
import { EtatEmploye } from '../models/EtatEmploye';
import { Router } from '@angular/router';
import {FormBuilder, FormGroup} from "@angular/forms";
@Component({
  selector: 'app-inscription-component',
  templateUrl: './inscription-component.component.html',
  styleUrls: ['./inscription-component.component.css']
})
export class InscriptionComponentComponent {
 /*  newEmploye: Employe = {} as Employe;
 
  submitted = false;
  typeEmploye = TypeEmploye; 
  etatE=EtatEmploye;

  constructor(private EmployeService: EmployeService,private router: Router) {}
  ngOnInit(): void {}
  addEmploye() {
    this.EmployeService.addEmploye(this.newEmploye)
      .subscribe(
        response => {
          console.log('Employe added:', response);
          // Handle success, show a message, navigate to another page, etc.
        },
        error => {
          console.error('Error:', error);
          // Handle error
        }
      );
  } 
    

 */
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


  constructor(private EmployeService: EmployeService , private formBuilder : FormBuilder, private route : Router,private renderer: Renderer2) { }

  ngOnInit(): void {
    this.getAllEmployee();

    this.empDetail = this.formBuilder.group({
      idemploye : ['0'],
      etate:[''],
      nom : [''],
      prenom: [''], 
      adresseemploye: [''],
      datedenaissance: [''],
      password: [''],
      montantavantage:['0'],
      montantsalaire:['0'],
      typeEmploye:['']

    });

  }

  addEmployee() {
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
    this.EmployeService.addEmploye(this.empObj).subscribe(res=>{
      console.log(res);
      console.log(this.empObj);
      this.getAllEmployee();
      //this.route.navigate(['/accueil'])
    },err=>{
      console.log(err);
    });
    
  }

  getAllEmployee() {
    this.EmployeService.getListeEmploye().subscribe(res=>{
      this.empList = res;
    },err=>{
      console.log("error while fetching data.")
    });
  }


}
