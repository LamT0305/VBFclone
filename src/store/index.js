import {configureStore} from '@reduxjs/toolkit';
import authReducer from './AuthSlice';
import courseReducer from './CourseSlice'

const rootReducer = {
  auth: authReducer,
  course: courseReducer
};

export default configureStore({
  reducer: rootReducer,
});
