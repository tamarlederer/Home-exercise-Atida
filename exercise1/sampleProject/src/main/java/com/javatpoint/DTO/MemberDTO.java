package com.javatpoint.DTO;

import java.util.Date;

public class MemberDTO {
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

    public void setImage(String image) {
        this.image = image;
    }

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
