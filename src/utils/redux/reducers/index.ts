import { combineReducers } from '@reduxjs/toolkit';
import questionNumberReducer from './questionNumberSlice';
import progressValueReducer from './progressValueSlice';
import tabIndexValueReducer from './tabIndexValueSlice';
import passageFontSizeReducer from './passageFontSizeSlice';


const rootReducer = combineReducers({
  questionNumber: questionNumberReducer,
  progressValue: progressValueReducer,
  tabIndexValue: tabIndexValueReducer,
  passageFontSize: passageFontSizeReducer
});

export default rootReducer;
