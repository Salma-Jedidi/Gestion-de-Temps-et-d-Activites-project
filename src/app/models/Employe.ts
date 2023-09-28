import { TypeEmploye } from './TypeEmploye';
import { EtatEmploye } from './EtatEmploye';
export class Employe {
  constructor(
    public idemploye :number,
    public etate:string,
    public datedenaissance:Date ,
    public nom: string,
    public  prenom: string,
  
    public adresseemploye:String  ,
    public montantavantage:number ,
    public montantsalaire:number ,
    public  password :String,
    public typeEmploye: string,
    
    
  ){}

}
