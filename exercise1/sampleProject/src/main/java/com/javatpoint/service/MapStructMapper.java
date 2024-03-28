package com.javatpoint.service;

import com.javatpoint.DTO.MemberDTO;
import com.javatpoint.model.Member;
import org.mapstruct.Mapper;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.Base64;
import java.util.List;

@Mapper(componentModel = "spring")
public interface MapStructMapper {

    //באופן אוטומטי ידע להחזיר גם רשימה כזאת, ע"י שימוש בפונקציה שכתבנו למטה
    List<MemberDTO> membersToDto(List<Member> members);

    default MemberDTO memberToDto(Member m) throws IOException {
        MemberDTO memberDTO = new MemberDTO();
        memberDTO.setId(m.getId());
        memberDTO.setBirthDate(m.getBirthDate());
        memberDTO.setCity(m.getCity());
        memberDTO.setStreet(m.getStreet());
        memberDTO.setNumber(m.getNumber());
        memberDTO.setFirstName(m.getFirstName());
        memberDTO.setLastName(m.getLastName());
        memberDTO.setPhone(m.getPhone());
        memberDTO.setTelephone(m.getTelephone());
        memberDTO.setTz(m.getTz());
        memberDTO.setPositive(m.getPositive());
        memberDTO.setRecovery(m.getRecovery());

        //כאן נוכל לבצע את ההמרה של התמונה שלנו לביטים כדי שיחזרו לריאקט בהצלחה
        Path filename = Paths.get(m.getImage());
        //הופך את התמונה למערך של ביטים
        byte[] byteImage = Files.readAllBytes(filename);
        memberDTO.setImage(Base64.getEncoder().encodeToString(byteImage));
        return memberDTO;
    }
}
