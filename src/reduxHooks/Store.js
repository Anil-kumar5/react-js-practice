import {createStore} from 'redux';
import { cakeReducer } from './Reducers';

export const store = createStore(cakeReducer);