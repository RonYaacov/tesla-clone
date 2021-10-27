import { createSlice } from "@reduxjs/toolkit";



const initialState = {
    cars:[
        {
            carName:"model s",
            inInventory:true
        },
        {
            carName:"model y",
            inInventory:true
        },
        {
            carName:"model 3",
            inInventory:true
        }
    ]
}
export const carReduser = (state = initialState, action)=>{
    {
        switch(action.type){
            case("carAdded"):
            return {...state, cars:[...state.cars,
                
                {
                  carName:action.payload.carName,
                    inInventory:true
                }
            ]
        }
            default:
                return state
                    
        }
    }

} 

const carSlice = createSlice({
    name:'car',
    initialState,
    reducers:{}
})

