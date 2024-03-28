package com.javatpoint.service;

import com.javatpoint.model.Member;
import com.javatpoint.model.Vaccination;
import org.springframework.data.jpa.repository.JpaRepository;

public interface VaccinationRepository extends JpaRepository<Vaccination,Integer> {
}
