import React, { useState } from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import EditIcon from '@mui/icons-material/Edit';
import CreateIcon from '@mui/icons-material/Create';
import VaccinesIcon from '@mui/icons-material/Vaccines';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import DeleteIcon from '@mui/icons-material/Delete';
import ClearIcon from '@mui/icons-material/Clear';
import { useNavigate } from 'react-router-dom';
import { useSelector } from "react-redux";
import { useDispatch } from 'react-redux';
import { updateSelectedMember } from "../redux/reducers/memberReducer";

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

function Members() {
  const dispatch = useDispatch()
  const nav = useNavigate();

  const members = useSelector((state) => state.member.listMembers)
  const selectedMember = useSelector((state) => state.member.selectedMember)
  const [open, setOpen] = useState(false);
  const handleClose = () => setOpen(false);
  const handleButtonDelete = () => {
    dispatch({ type: 'DELETE_MEMBER', payload: { id: selectedMember.id } });
    handleClose()
  }
  const vaccinations = useSelector((state) => state.vaccination.listVaccinations)
  const filterVaccination = vaccinations.filter(v => v.memberId == selectedMember.id);


  const updateSelected = (member) => {
    setOpen(true)
    dispatch(updateSelectedMember(member))
    console.log(selectedMember);
  }

  console.log(selectedMember);


  return (
    <>



      <List sx={{ width: '1000px', bgcolor: 'background.paper', border: '1px solid #ccc', borderRadius: '5px', overflow: 'hidden', display: 'block' }}>
        {members.map((item) =>
          <div key={item.id} >
            <ListItem alignItems="flex-start" >
              <ListItemAvatar>
                {
                  item.image ?
                    <Avatar alt="Remy Sharp" src={`data:image/png;base64,${item.image}`} />
                    :
                    <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" >{item.firstName.charAt(0)}</Avatar>
                }

              </ListItemAvatar>
              <ListItemText
                primary={item.firstName}
              />
              <Button variant="outlined" onClick={() => updateSelected(item)}>show details</Button>
            </ListItem>
            <Divider variant="inset" component="li" />
          </div>
        )}
      </List>
      <Button onClick={() => { nav('AddMember') }} variant="outlined" startIcon={<CreateIcon />}>
        Add member
      </Button>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            member details
          </Typography>

          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>

              <div key={selectedMember.id}>
                <ListItem alignItems="flex-start" >
                  <ListItemText
                    primary="firstName:"
                    secondary={selectedMember.firstName}

                  />
                </ListItem>
                <Divider variant="inset" component="li" />
                <ListItem alignItems="flex-start" >
                  <ListItemText
                    primary='lastName:'
                    secondary={selectedMember.lastName}
                  />
                </ListItem>
                <Divider variant="inset" component="li" />

                <ListItem alignItems="flex-start" >
                  <ListItemText
                    primary='tz:'
                    secondary={selectedMember.tz}
                  />
                </ListItem>
                <Divider variant="inset" component="li" />
                <ListItem alignItems="flex-start" >
                  <ListItemText
                    primary='birthDate:'
                    secondary={selectedMember.birthDate}
                  />
                </ListItem>
                <Divider variant="inset" component="li" />
                <ListItem alignItems="flex-start" >
                  <ListItemText
                    primary='address:'
                    secondary={selectedMember.street}
                  />
                  <ListItemText
                    secondary={selectedMember.number}
                  />
                  <ListItemText
                    secondary={selectedMember.city}
                  />
                </ListItem>
                <Divider variant="inset" component="li" />
                <ListItem alignItems="flex-start" >
                  <ListItemText
                    primary='Date of receiving a positive result:'
                    secondary={selectedMember.positive}
                  />
                </ListItem>
                <Divider variant="inset" component="li" />
                <ListItem alignItems="flex-start" >
                  <ListItemText
                    primary='date of recovery:'
                    secondary={selectedMember.recovery}
                  />
                </ListItem>

              </div>


              <ListItem>
                <ListItemText
                  primary='vaccinations'
                />
              </ListItem>
              <Divider variant="inset" component="li" />

              {filterVaccination.map((v) =>
                <div key={v.id}>
                  <ListItem alignItems="flex-start" >*
                    <ListItemText
                      primary="manufacturer:"
                      secondary={v.manufacturer}
                    />
                    <ListItemText
                      primary="date:"
                      secondary={v.date}
                    />
                  </ListItem>

                </div>
              )}
            </List>
          </Typography>


          <SpeedDial
            ariaLabel="SpeedDial openIcon example"
            sx={{ position: 'absolute', bottom: 16, right: 16 }}
            icon={<SpeedDialIcon openIcon={<ClearIcon />} />}
          >
            <SpeedDialAction
              key='update'
              icon={<EditIcon />}
              tooltipTitle='update'
              onClick={() => { nav('MemberUpdate') }}
            />
            <SpeedDialAction
              key='delete'
              icon={<DeleteIcon />}
              tooltipTitle='delete'
              onClick={handleButtonDelete}
            />
            <SpeedDialAction
              key='addVaccination'
              icon={<VaccinesIcon />}
              tooltipTitle='add vaccination'
              onClick={()=>{nav('AddVaccination')}}
            />

          </SpeedDial>
        </Box>

      </Modal>
    </>
  );

}
export default Members;
