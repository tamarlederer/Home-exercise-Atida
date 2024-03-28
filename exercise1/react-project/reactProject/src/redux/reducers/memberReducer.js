import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    listMembers: [],
    selectedMember:{}
}


export const AdSlice = createSlice({
    name: 'member',
    initialState,
    reducers: {
        getMembers: (state, action) => {
            state.listMembers = (action.payload);
        },

        addMember: (state, action) => {
            state.listMembers.push(action.payload);
        },

        deleteMember: (state, action) => {
            state.listMembers.pop(action.payload)
        },
        updateSelectedMember: (state, action) => {
            state.selectedMember = action.payload;
          },
          updateMember: (state, action) => {
            const index = state.listMembers.findIndex(member => member.id === action.payload.id);
            state.listMembers[index] = action.payload;
            console.log(state.listMembers[index]);
        
          },
      
    },
})
//מיצאים את הפעולות - פונקציות שכתבנו ברדוסר
export const { getMembers, addMember,deleteMember,updateSelectedMember,updateMember } = AdSlice.actions
//מיצאים את הרדוסר
export default AdSlice.reducer