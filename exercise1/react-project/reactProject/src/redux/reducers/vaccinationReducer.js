import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    listVaccinations: []
}


export const AdSlice = createSlice({
    name: 'vaccination',
    initialState,
    reducers: {
        getVaccinations: (state, action) => {
            state.listVaccinations = (action.payload);
        },

        addVaccination: (state, action) => {
            state.listVaccinations.push(action.payload);
        },
    },
})
//מיצאים את הפעולות - פונקציות שכתבנו ברדוסר
export const { getVaccinations, addVaccination} = AdSlice.actions
//מיצאים את הרדוסר
export default AdSlice.reducer