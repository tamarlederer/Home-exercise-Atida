package com.javatpoint.service;

import com.javatpoint.model.Member;
import org.springframework.data.jpa.repository.JpaRepository;

public interface MemberRepository extends JpaRepository<Member,Integer> {
    Member findById(long id);
    Member deleteById(long id);
}
