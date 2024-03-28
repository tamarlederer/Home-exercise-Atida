import axios from 'axios';
import { addMember, getMembers} from '../reducers/memberReducer';
import { getVaccinations,addVaccination } from '../reducers/vaccinationReducer';

export const getVaccinationsMidd = ({ dispatch, getState }) => next => action => {

    if (action.type === 'GET_VACCINATIONS') {
        // Perform the asynchronous operation
        axios.get('http://localhost:8585/api/vaccinations/get')
            .then((response) => {
                console.log('response.data', response.data);
                // Dispatch an action with the response data
                dispatch(getVaccinations(response.data));//response.data == action.payload in adsReduser
            })
            .catch((error) => {
                console.error('Error fetching ads:', error);
                // Handle the error as needed
            });
    }
    // Continue the action through the middleware chain
    return next(action);
}

export const addVaccinationMidd = ({ dispatch, getState }) => next => action => {

    if (action.type === 'ADD_VACCINATION') {
        const formData = new FormData();

        formData.append("vaccination", new Blob([JSON.stringify(action.payload.vaccination)], { type: "application/json" }))
        console.log('newVaccination', action.payload.vaccination);
        
        axios.post('http://localhost:8585/api/vaccinations/postVaccination', formData)
            .then((response) => {
                console.log('response.data', response.data)
                dispatch(addVaccination(response.data));
            })
            .catch((error) => {
                console.error('Error fetching vaccination:', error);
            });
    }
    return next(action);
};