import {createStore, applyMiddleware} from 'redux';
import thunkMiddleware from 'redux-thunk';
import rootReducer from '../reducer';
import {loadState,saveState} from '../config/localStorage';
import throttle from 'lodash/throttle';

//Since this uses the database in firebase so i commented the localStorage part

//const persistedState = loadState();
export const store = createStore(rootReducer,applyMiddleware(thunkMiddleware));



// export const store = createStore(rootReducer,persistedState, applyMiddleware(thunkMiddleware))
// //export default store;
// store.subscribe(throttle(()=> {
//   saveState(store.getState());
// },1000));
