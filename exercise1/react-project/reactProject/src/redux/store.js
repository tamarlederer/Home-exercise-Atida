import { configureStore } from '@reduxjs/toolkit'

import memberReducer from './reducers/memberReducer'
import vaccinationReducer from "./reducers/vaccinationReducer"

import { getMembersMidd, updateMemberMidd } from "./middleware/membermiddleware"
import { addMemberMidd } from "./middleware/membermiddleware"
import { deleteMemberMidd } from './middleware/membermiddleware'
import { getVaccinationsMidd } from "./middleware/vaccinationmiddleware"
import { addVaccinationMidd } from "./middleware/vaccinationmiddleware"

//יוצרים אובייקט סטור שהוא מכיל את כל הרידקס
export const store = configureStore({
    //יוצרים משתנה רדוסר שהוא מכיל את כל הרדוסרים
    reducer: {
        member: memberReducer,
        vaccination:vaccinationReducer
    },
    //מוסיפים משתנה מידלוור ומכניסים אליו את המידלוורים שיצרנו
    middleware: (getDefaultMiddleware) => [...getDefaultMiddleware({serializableCheck:false}), getMembersMidd,addMemberMidd,deleteMemberMidd,updateMemberMidd,getVaccinationsMidd,addVaccinationMidd],

})