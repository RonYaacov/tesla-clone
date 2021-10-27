import {store} from '../app/store';
import {Header} from '../components/Header'


export const carAdded = (carName="model test", isInInventory=true) =>{
    console.log("test")
        store.dispatch( {    //redux-dispatch expmple code for adding a new car to 
                            //the list in the header and to the side bar 
            type:"carAdded",
            payload:{
            carName: carName,
            inInventory: isInInventory}})
    }