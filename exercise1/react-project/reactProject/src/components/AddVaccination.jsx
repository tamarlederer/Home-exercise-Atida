import React, { useState } from "react";
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import CreateIcon from '@mui/icons-material/Create';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

function AddVaccination() {
    const dispatch = useDispatch()
    const nav = useNavigate()
    const member = useSelector((state) => state.member.selectedMember);
    const [vaccination, setVaccination] = useState(
        {
            id: 0,
            date: '',
            manufacturer: '',
            memberId: '',
        }
    );



    const handleInputChange = (event) => {
        const { name, value } = event.target;
        const onlyLetters = /^[A-Za-z\u0590-\u05FF\s]+$/;  // Only letters

        // Validate input based on field name
        let isValid = true;
        switch (name) {
            case 'manufacturer':
                isValid = onlyLetters.test(value);
                break;
            default:
                break;
        }

        if (!isValid) {
            alert(`Invalid input for ${name}`);
            return;
        }

        setVaccination(prevState => ({
            ...prevState,
            [name]: value
        }));
    }




const handleSaveVaccination = () => {
    // בדיקת שדות חובה מולאו
    if (!vaccination.manufacturer||!vaccination.date) {
        alert("יש למלא את כל השדות החובה");
        return;
    }
    setVaccination(prevState => ({
        ...prevState,
        memberId: member.id 
      }));

    console.log('member:', member);
    // ניתן להמשיך לשמור את החבר
    dispatch({
        type: 'ADD_VACCINATION',
        payload: { vaccination: vaccination }
    });
    nav('/')
}

return (
    <>
    <h1>Add vaccination</h1>
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
                    label='manufacturer'
                    defaultValue=''
                    name='manufacturer'
                    required
                    onChange={handleInputChange}


                />
               
                <TextField

                    className="outlined-required"
                    name="date"
                    label="date"
                    variant="outlined"
                    type="date"
                    InputLabelProps={{
                        shrink: true,
                    }}
                    defaultValue=''
                    required
                    onChange={handleInputChange}
                />

            </div>
            <Button onClick={handleSaveVaccination} variant="outlined" startIcon={<CreateIcon />}>
                Save vaccination
            </Button>
        </Box>


    </>
)
}
export default AddVaccination;