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
public class Contrat {
    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    private int idContrat ;
    @Enumerated(EnumType.STRING)
    private TypeContrat typeContrat;
    private Date debutContrat;
    private Date finContrat;

}
