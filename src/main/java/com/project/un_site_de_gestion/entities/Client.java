package com.project.un_site_de_gestion.entities;

import lombok.*;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
@Getter
@Setter
@ToString
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Builder

public class Client {
    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    private int idClient;
    private String nomClient ;
    private String prenomClient;
}
