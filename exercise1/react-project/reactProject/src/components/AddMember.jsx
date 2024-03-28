import React, { useState } from "react";
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import CreateIcon from '@mui/icons-material/Create';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import ImageIcon from '@mui/icons-material/Image';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

function AddMember() {
  const dispatch = useDispatch()
  const nav = useNavigate()
  const [image, setImage] = useState(null)
  const [member, setMember] = useState(
    {
      id: 0,
      tz: '',
      firstName: '',
      lastName: '',
      city: '',
      street: '',
      number: '',
      birthDate: '',
      telephone: '',
      phone: '',
      image: '',
      positive: '',
      recovery: ''
    }
  );



  const handleInputChange = (event) => {
    const { name, value } = event.target;
    const onlyDigits = /^\d*$/; // Only digits
    const onlyLetters = /^[A-Za-z\u0590-\u05FF\s]+$/;  // Only letters

    // Validate input based on field name
    let isValid = true;
    switch (name) {
      case 'city':
      case 'street':
      case 'firstName':
      case 'lastName':
        isValid = onlyLetters.test(value);
        break;
      case 'number':
      case 'tz':
      case 'telephone':
      case 'phone':
        isValid = onlyDigits.test(value);
        break;
      default:
        break;
    }

    if (!isValid) {
      alert(`Invalid input for ${name}`);
      return;
    }
    if (name === 'image') {
      const file = event.target.files[0];
      setImage(file);
      console.log("file:", file);
      console.log("image:", image);

    } else {
      setMember(prevState => ({
        ...prevState,
        [name]: value
      }));
    }
  };



  const handleSaveMember = () => {
    // בדיקת שדות חובה מולאו
    if (!member.firstName || !member.lastName || !member.phone ||
      !member.telephone || !member.tz || !member.birthDate || !member.street || !member.number ||
      !member.city) {
      alert("יש למלא את כל השדות החובה");
      return;
    }


    console.log('member:', member);
    // ניתן להמשיך לשמור את החבר
    dispatch({
      type: 'ADD_MEMBER',
      payload: { member: member, image: image }
    });
    nav('/')
  }

  return (
    <>
    <h1>Add Member</h1>
      <Box
        component="form"
        sx={{
          '& .MuiTextField-root': { m: 1, width: '25ch' },
        }}
        noValidate
        autoComplete="off"
      >
        <label htmlFor="contained-button-file">
          <input
            accept="image/*"
            style={{ display: 'none' }}
            id="contained-button-file"
            type="file"
            name="image"
            onChange={handleInputChange}
          />
          <Button component="span" startIcon={<ImageIcon />} variant="outlined">
            add image
          </Button>
        </label>
        <div>
          <TextField

            className="outlined-required"
            label='firstName'
            defaultValue=''
            name='firstName'
            required
            onChange={handleInputChange}


          />
          <TextField

            className="outlined-required"
            label="lastName"
            defaultValue=''
            name="lastName"
            required
            onChange={handleInputChange}
          />

          <TextField

            className="outlined-required"
            label="tz"
            defaultValue=''
            name="tz"
            required
            onChange={handleInputChange}
            inputProps={{ pattern: "[0-9]*" }}
          />
          <TextField

            className="outlined-required"
            name="birthDate"
            label="birthDate"
            variant="outlined"
            type="date"
            InputLabelProps={{
              shrink: true,
            }}
            defaultValue=''
            required
            onChange={handleInputChange}
          />

          <TextField

            className="outlined-required"
            name="positive"
            label="positive"
            variant="outlined"
            type="date"
            InputLabelProps={{
              shrink: true,
            }}
            defaultValue=''
            onChange={handleInputChange}
          />
          <TextField

            className="outlined-required"
            name="recovery"
            label="recovery"
            variant="outlined"
            type="date"
            InputLabelProps={{
              shrink: true,
            }}
            defaultValue=''
            onChange={handleInputChange}
          />

          <TextField

            className="outlined-required"
            label="phone"
            defaultValue=''
            name="phone"
            required
            onChange={handleInputChange}
          />
          <TextField

            className="outlined-required"
            label="telephone"
            defaultValue=''
            name="telephone"
            required
            onChange={handleInputChange}
          />
          <TextField

            className="outlined-required"
            label="street"
            defaultValue=''
            name="street"
            required
            onChange={handleInputChange}
          />
          <TextField

            className="outlined-required"
            label="number"
            defaultValue=''
            name="number"
            required
            onChange={handleInputChange}
          />
          <TextField

            className="outlined-required"
            label="city"
            defaultValue=''
            name="city"
            required
            onChange={handleInputChange}
          />
        </div>
        <Button onClick={handleSaveMember} variant="outlined" startIcon={<CreateIcon />}>
          Save member
        </Button>
      </Box>


    </>
  )
}
export default AddMember;