import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useEffect } from 'react';
import { Routes, Route, } from 'react-router-dom';
import Members from './components/Members'
import { useDispatch } from 'react-redux';
import MemberUpdate from './components/MemberUpdate';
import AddMember from './components/AddMember';
import AddVaccination from './components/AddVaccination';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({ type: 'GET_MEMBERS' })
    dispatch({type:'GET_VACCINATIONS'})
  }, [])

  return (
    <>
      
      <Routes>
        <Route path="/" element={<Members />} />
        <Route path="MemberUpdate" element={<MemberUpdate />} />
        <Route path="AddMember" element={<AddMember />} />
        <Route path="AddVaccination" element={<AddVaccination />} />

      


      </Routes>
    </>
  )
}

export default App
