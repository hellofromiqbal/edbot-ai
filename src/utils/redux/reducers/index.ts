import { combineReducers } from '@reduxjs/toolkit';
import questionNumberReducer from './questionNumberSlice';
import progressValueReducer from './progressValueSlice';
import tabIndexValueReducer from './tabIndexValueSlice';

const rootReducer = combineReducers({
  questionNumber: questionNumberReducer,
  progressValue: progressValueReducer,
  tabIndexValue: tabIndexValueReducer
});

export default rootReducer;
