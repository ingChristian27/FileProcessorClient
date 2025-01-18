import { createStore } from 'redux';
import filesReducer from './ducks/files';

export const store = createStore(filesReducer);