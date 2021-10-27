import {createStore} from 'redux';
import {carReduser} from '../features/car/carSlice';

export const store = createStore(carReduser)
 