import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule ,ReactiveFormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InscriptionComponentComponent } from './inscription-component/inscription-component.component';
import { NavbarComponentComponent } from './navbar-component/navbar-component.component';
import { EspaceDirigeantComponent } from './espace-dirigeant/espace-dirigeant.component';
import { EspaceEmployeComponent } from './espace-employe/espace-employe.component';
import { HttpClientModule } from '@angular/common/http';
import { AccueilComponent } from './accueil/accueil.component';
import { StatComponent } from './stat/stat.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { FonctionComponent } from './fonction/fonction.component';
import { LesSalairesComponent } from './les-salaires/les-salaires.component';
import { TraitementDesDemandesComponent } from './traitement-des-demandes/traitement-des-demandes.component';
import { AlertComponent } from './alert/alert.component';
import { SignComponent } from './sign/sign.component';




@NgModule({
  declarations: [
    AppComponent,
    InscriptionComponentComponent,
    NavbarComponentComponent,
    EspaceDirigeantComponent,
    EspaceEmployeComponent,
    AccueilComponent,
    StatComponent,
    AddEmployeeComponent,
    FonctionComponent,
    LesSalairesComponent,
    TraitementDesDemandesComponent,
    AlertComponent,
    SignComponent,



    

  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
    
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
