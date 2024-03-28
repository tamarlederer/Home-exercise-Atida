import axios from 'axios';
import { addMember, getMembers,deleteMember,updateSelectedMember,updateMember} from '../reducers/memberReducer';

export const getMembersMidd = ({ dispatch, getState }) => next => action => {

    if (action.type === 'GET_MEMBERS') {
        // Perform the asynchronous operation
        axios.get('http://localhost:8585/api/members/get')
            .then((response) => {
                console.log('response.data', response.data);
                
                // Dispatch an action with the response data
                dispatch(getMembers(response.data));//response.data == action.payload in adsReduser
            })
            .catch((error) => {
                console.error('Error fetching members:', error);
                // Handle the error as needed
            });
    }

    // Continue the action through the middleware chain
    return next(action);
};

export const addMemberMidd = ({ dispatch, getState }) => next => action => {

    if (action.type === 'ADD_MEMBER') {
        const formData = new FormData();
            formData.append("image", action.payload.image);

        formData.append("member", new Blob([JSON.stringify(action.payload.member)], { type: "application/json" }))
        console.log(formData);
        console.log(action.payload.image);
        console.log(action.payload.member);

        
        axios.post('http://localhost:8585/api/members/postMember', formData)
            .then((response) => {
                console.log('response.data', response.data);
                dispatch(addMember(response.data));
            })
            .catch((error) => {
                console.error('Error fetching member:', error);
            });
    }
    return next(action);
};

export const updateMemberMidd = ({ dispatch, getState }) => next => action => {

    if (action.type === 'UPDATE_MEMBER') {
        const formData = new FormData();
const id=action.payload.member.id;
        formData.append("member", new Blob([JSON.stringify(action.payload.member)], { type: "application/json" }))
        console.log('newMember', action.payload.member);
        console.log(formData);
        axios.put(`http://localhost:8585/api/members/updateMember/${id}`, action.payload.member)
            .then((response) => {
                console.log('response.data', response.data);
                dispatch(updateMember(response.data));
            })
            .catch((error) => {
                console.error('Error fetching member:', error);
            });
    }
    return next(action);
};

export const deleteMemberMidd = ({ dispatch, getState }) => next => action => {

    if (action.type === 'DELETE_MEMBER') {
        const id = parseInt(action.payload.id);

        axios.delete(`http://localhost:8585/api/members/deleteMember/${id}`)
            .then((response) => {
                console.log('response.data', response.data);
                dispatch(deleteMember(response.data));
            })
            .catch((error) => {
                console.error('Error fetching member:', error);
            });
    }
    return next(action);
};