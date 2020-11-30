import { createStore } from 'redux';
import dogs from '../reducers/index';

const store = createStore(dogs);

export default store;