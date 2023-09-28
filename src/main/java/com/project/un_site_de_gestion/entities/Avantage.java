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

public class Avantage {
    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    private int idAvantage ;
    private Date debutAvantage ;
    private Date finAvantage ;
    private double montantA ;
}
