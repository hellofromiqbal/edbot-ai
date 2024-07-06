import { combineReducers } from '@reduxjs/toolkit';
import questionNumberReducer from './questionNumberSlice';
import progressValueReducer from './progressValueSlice';
import tabIndexValueReducer from './tabIndexValueSlice';
import passageFontSizeReducer from './passageFontSizeSlice';
import modalVisibilityReducer from './modalVisibilitySlice';


const rootReducer = combineReducers({
  questionNumber: questionNumberReducer,
  progressValue: progressValueReducer,
  tabIndexValue: tabIndexValueReducer,
  passageFontSize: passageFontSizeReducer,
  modalVisibility: modalVisibilityReducer
});

export default rootReducer;
