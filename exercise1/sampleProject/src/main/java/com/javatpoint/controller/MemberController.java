package com.javatpoint.controller;


import com.javatpoint.DTO.MemberDTO;
import com.javatpoint.model.Member;
import com.javatpoint.service.MapStructMapper;
import com.javatpoint.service.MemberRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;


@RestController
@RequestMapping("/api/members")
@CrossOrigin
public class MemberController {

    private MemberRepository memberRepository;
    private MapStructMapper mapper;
    private static String UPLOAD_DIRECTORY = System.getProperty("user.dir") + "\\images\\";

    @Autowired
    public MemberController(MemberRepository memberRepository, MapStructMapper mapper){
        this.memberRepository=memberRepository;
        this.mapper=mapper;
    }


    @GetMapping("/get")
    public ResponseEntity<List<MemberDTO>> getMembers(){
        try{
            List<Member> members=new ArrayList<>();
            memberRepository.findAll().forEach(e->members.add(e));
            System.out.println(members);
            return new ResponseEntity<>(mapper.membersToDto(members), HttpStatus.OK);
        }
        catch (Exception e) {
            //שגיאה 500
            System.out.println(e);
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PostMapping("/postMember")
    public ResponseEntity<MemberDTO> uploadUserWithImage(@RequestPart("image") MultipartFile file,
                                                         @RequestPart("member") Member m) throws IOException {
        try {

            String filePath = UPLOAD_DIRECTORY + file.getOriginalFilename();
            //הולך להיות הנתיב בו נשמור את התמונה
            Path filename = Paths.get(filePath);//im.jpg
            Files.write(filename, file.getBytes());
            m.setImage(filePath);

            memberRepository.save(m);
            return new ResponseEntity(mapper.memberToDto(m), HttpStatus.CREATED);
        } catch (Exception e) {
            System.out.println(e);
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PutMapping("/updateMember/{id}")
    public ResponseEntity<Member> updateMember(@PathVariable long id, @RequestBody Member m) {
        Member newMember = memberRepository.findById(id);
        if (newMember != null) {
            newMember.setFirstName(m.getFirstName());
            newMember.setLastName(m.getLastName());
            newMember.setTz(m.getTz());
            newMember.setBirthDate(m.getBirthDate());
            newMember.setStreet(m.getStreet());
            newMember.setNumber(m.getNumber());
            newMember.setCity(m.getCity());
            newMember.setPhone(m.getPhone());
            newMember.setTelephone(m.getTelephone());
            newMember.setPositive(m.getPositive());
            newMember.setRecovery(m.getRecovery());

            memberRepository.save(newMember);
            return new ResponseEntity<>(newMember, HttpStatus.OK);

        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }


    @DeleteMapping("/deleteMember/{id}")
    @Transactional
    public ResponseEntity deleteMember(@PathVariable long id) {
        try {
            Member member = memberRepository.findById(id);
                memberRepository.delete(member);
                System.out.println("delete");
                return new ResponseEntity(HttpStatus.NO_CONTENT);

        } catch (Exception e) {
            System.out.println(e);
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }





}
