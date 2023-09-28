package com.project.un_site_de_gestion.repos;

import com.project.un_site_de_gestion.entities.Salaire;
import org.springframework.data.jpa.repository.JpaRepository;


public interface SalaireRepo extends JpaRepository<Salaire,Integer> {
}
