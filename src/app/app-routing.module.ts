import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InscriptionComponentComponent } from './inscription-component/inscription-component.component';
import { NavbarComponentComponent } from './navbar-component/navbar-component.component';
import { EspaceDirigeantComponent } from './espace-dirigeant/espace-dirigeant.component';
import { EspaceEmployeComponent } from './espace-employe/espace-employe.component';
import { AccueilComponent } from './accueil/accueil.component';
import { StatComponent } from './stat/stat.component';
import { FonctionComponent } from './fonction/fonction.component';
import { fonction } from './models/Fonction';
import { LesSalairesComponent } from './les-salaires/les-salaires.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { TraitementDesDemandesComponent } from './traitement-des-demandes/traitement-des-demandes.component';



const routes: Routes = [
  // ... vos autres routes existantes ...
  { path: 'EspaceDirig' ,component:EspaceDirigeantComponent},
  { path: 'EspaceEmp' ,component: EspaceEmployeComponent },
  { path: 'navbar' ,component: NavbarComponentComponent },
  { path: 'inscription', component: InscriptionComponentComponent }, // InscriptionComponent est le composant de votre page d'inscription
  {path:'accueil',component:AccueilComponent},
  {path:'stat',component:StatComponent},
  {path:'fonctions',component:FonctionComponent},
  {path:'salaires',component:LesSalairesComponent},
  {path:'ajout',component:AddEmployeeComponent},
  {path:'demande',component:TraitementDesDemandesComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
