package com.javatpoint.controller;

import com.javatpoint.DTO.MemberDTO;
import com.javatpoint.model.Member;
import com.javatpoint.model.Vaccination;
import com.javatpoint.service.MapStructMapper;
import com.javatpoint.service.VaccinationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.ArrayList;
import java.util.List;


@RestController
@RequestMapping("/api/vaccinations")
@CrossOrigin
public class VaccinationController {

    private VaccinationRepository vaccinationRepository;
    private MapStructMapper mapper;
    private static String UPLOAD_DIRECTORY = System.getProperty("user.dir") + "\\images\\";

    @Autowired
    public VaccinationController(VaccinationRepository vaccinationRepository, MapStructMapper mapper) {
        this.vaccinationRepository = vaccinationRepository;
        this.mapper = mapper;
    }


    @GetMapping("/get")
    public ResponseEntity<List<Vaccination>> getVaccinations() {
        try {
            List<Vaccination> vaccinations = new ArrayList<>();
            vaccinationRepository.findAll().forEach(e->vaccinations.add(e));
            System.out.println(vaccinations);
            return new ResponseEntity<>(vaccinations, HttpStatus.OK);
        } catch (Exception e) {
            //שגיאה 500
            System.out.println(e);
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PostMapping("/postVaccination")
    public ResponseEntity<Vaccination> uploadVaccination(@RequestBody Vaccination v) throws IOException {
        try {
            vaccinationRepository.save(v);
            return new ResponseEntity(v, HttpStatus.CREATED);
        } catch (Exception e) {
            System.out.println(e);
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
