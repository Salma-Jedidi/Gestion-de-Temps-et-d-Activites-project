package com.project.un_site_de_gestion.repos;

import org.springframework.data.jpa.repository.JpaRepository;
import com.project.un_site_de_gestion.entities.Entreprise;

public interface EntrepriseRepo extends JpaRepository<Entreprise,Integer> {
}
