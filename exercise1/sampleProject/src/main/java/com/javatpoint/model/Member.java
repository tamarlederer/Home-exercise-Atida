package com.javatpoint.model;

import javax.persistence.*;
import java.util.Date;
import java.util.List;

@Entity
@Table(name = "member")
public class Member {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    private String tz;
    private String firstName;
    private String lastName;
    private String city;
    private String street;
    private int number;
    private Date birthDate;
    private String telephone;
    private String phone;
    private String image;
    private Date positive;
    private Date recovery;

    public Member(long id, String tz, String firstName, String lastName, String city, String street, int number, Date birthDate, String telephone, String phone, String image, Date positive, Date recovery) {
        this.id = id;
        this.tz = tz;
        this.firstName = firstName;
        this.lastName = lastName;
        this.city = city;
        this.street = street;
        this.number = number;
        this.birthDate = birthDate;
        this.telephone = telephone;
        this.phone = phone;
        this.image = image;
        this.positive = positive;
        this.recovery = recovery;
    }

    public Member() {
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getTz() {
        return tz;
    }

    public void setTz(String tz) {
        this.tz = tz;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }

    public String getStreet() {
        return street;
    }

    public void setStreet(String street) {
        this.street = street;
    }

    public int getNumber() {
        return number;
    }

    public void setNumber(int number) {
        this.number = number;
    }

    public Date getBirthDate() {
        return birthDate;
    }

    public void setBirthDate(Date birthDate) {
        this.birthDate = birthDate;
    }

    public String getTelephone() {
        return telephone;
    }

    public void setTelephone(String telephone) {
        this.telephone = telephone;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public String getImage() {
        return image;
    }

    public void setImage(String image) { this.image = image; }

    public Date getPositive() {
        return positive;
    }

    public void setPositive(Date positive) {
        this.positive = positive;
    }

    public Date getRecovery() {
        return recovery;
    }

    public void setRecovery(Date recovery) {
        this.recovery = recovery;
    }
}


