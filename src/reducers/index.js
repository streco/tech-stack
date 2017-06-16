import { combineReducers } from 'redux';
import LibraryReducer from './LibraryReducer';


export default combineReducers({
  libraries: LibraryReducer //This library reducer is assigned to libraries in the state
});
