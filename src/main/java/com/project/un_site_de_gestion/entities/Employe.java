package com.project.un_site_de_gestion.entities;

import lombok.*;

import javax.persistence.*;
import java.util.Date;

@Getter
@Setter
@ToString
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Builder
public class Employe {
    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    private int idEmploye ;
    @Enumerated(EnumType.STRING)
    private Etat etat;
    private Date DateDeNaissance;
    private String nom ;
    private String prenom;
    private String  adresseEmploye;
}
