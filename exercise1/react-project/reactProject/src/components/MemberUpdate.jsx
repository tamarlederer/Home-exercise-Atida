import React, { useState } from "react";
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import CreateIcon from '@mui/icons-material/Create';
import dayjs from 'dayjs';
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DesktopDatePicker from '@mui/lab/DesktopDatePicker';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

function MemberUpdate() {
  const nav = useNavigate();
  const dispatch = useDispatch();

  const member = useSelector((state) => state.member.selectedMember);
  const [memberUpdate, setMemberUpdate] = useState(member);

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
    setMemberUpdate(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleUpdateMember = () => {
    // בדיקה ששדות חובה מולאו
    if (!member.firstName || !member.lastName || !member.phone ||
      !member.telephone || !member.tz || !member.birthDate || !member.street || !member.number ||
      !member.city) {
      alert("יש למלא את כל השדות החובה");
      return;
    }

    console.log('member:', memberUpdate);
    dispatch({
      type: 'UPDATE_MEMBER',
      payload: { member: memberUpdate }
    });
    nav('/');
  };


  const handleDateChange = (date) => {
    setMemberUpdate(prevState => ({
      ...prevState,
      birthDate: date
    }));
  };

  return (
    <>
      <h1>Member Update</h1>
      <Box
        component="form"
        sx={{
          '& .MuiTextField-root': { m: 1, width: '25ch' },
        }}
        noValidate
        autoComplete="off"
      >
        <div>
          <TextField
            className="outlined-required"
            label='First Name'
            defaultValue={memberUpdate.firstName}
            required
            name='firstName'
            onChange={handleInputChange}
          />
          <TextField
            className="outlined-required"
            label="Last Name"
            defaultValue={memberUpdate.lastName}
            required
            name="lastName"
            onChange={handleInputChange}
          />
          <TextField
            className="outlined-required"
            label="TZ"
            defaultValue={memberUpdate.tz}
            required
            name="tz"
            onChange={handleInputChange}
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
            defaultValue={memberUpdate.birthDate}
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
            defaultValue={memberUpdate.positive}
           
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
            // defaultValue={memberUpdate.recovery}
           defaultValue={memberUpdate.recovery || ''}
          onChange={handleInputChange}
          />

          <TextField
            className="outlined-required"
            label="Phone"
            defaultValue={memberUpdate.phone}
            required
            name="phone"
            onChange={handleInputChange}
          />
          <TextField
            className="outlined-required"
            label="Telephone"
            defaultValue={memberUpdate.telephone}
            required
            name="telephone"
            onChange={handleInputChange}
          />
          <TextField
            className="outlined-required"
            label="Street"
            defaultValue={memberUpdate.street}
            required
            name="street"
            onChange={handleInputChange}
          />
          <TextField
            className="outlined-required"
            label="Number"
            defaultValue={memberUpdate.number}
            required
            name="number"
            onChange={handleInputChange}
          />
          <TextField
            className="outlined-required"
            label="City"
            defaultValue={memberUpdate.city}
            required
            name="city"
            onChange={handleInputChange}
          />
        </div>
        <Button onClick={handleUpdateMember} variant="outlined" startIcon={<CreateIcon />}>
          Update
        </Button>
      </Box>
    </>
  );
}

export default MemberUpdate;
