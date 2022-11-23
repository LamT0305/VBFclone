import {createSlice} from '@reduxjs/toolkit';

const initialiState = {
  courses: [],
  // totalCourseLength: {
  //   0: 0,
  //   1: 0,
  //   2: 0,
  // },
  // tagCourse: 0,
  isLoading: false,
};

const slice = createSlice({
  name: 'course',
  initialState: initialiState,
  reducers: {
    LOADING: (state, action) => {
      state.isLoading = action.payload;
    },
    GET_COURSE: (state, action) => {
      state.courses = action.payload
    },
    CHANGE_TAG:(state, action)=>{
      state.tagCourse = action.payload
    }
  },
});

export const {LOADING, GET_COURSE, CHANGE_TAG} = slice.actions;
export default slice.reducer;
