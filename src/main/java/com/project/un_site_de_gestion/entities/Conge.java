package com.project.un_site_de_gestion.entities;

import lombok.*;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import java.util.Date;

@Getter
@Setter
@ToString
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Builder
public class Conge {

    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    private int numConge ;
    private Date debutConge;
    private Date finConge;
}
