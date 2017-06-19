import { combineReducers } from 'redux';
import LibraryReducer from './LibraryReducer';
import SelectionReducer from './SelectionReducer';


export default combineReducers({
  libraries: LibraryReducer, //This library reducer is assigned to libraries in the state
  selectedLibraryId: SelectionReducer
});
