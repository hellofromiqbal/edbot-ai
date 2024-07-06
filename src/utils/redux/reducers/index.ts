import { combineReducers } from '@reduxjs/toolkit';
import questionNumberReducer from './questionNumberSlice';
import progressValueReducer from './progressValueSlice';

const rootReducer = combineReducers({
  questionNumber: questionNumberReducer,
  progressValue: progressValueReducer
});

export default rootReducer;
