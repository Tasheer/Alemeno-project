import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchCourses = createAsyncThunk('courses/fetchCourses', async () => {

  const response = await fetch('http://localhost:5000/courses');
  const data = await response.json();

  return data;
  
});

const coursesSlice = createSlice({
  name: 'courses',
  initialState: {
    courses: [],
    enrolledCourses: [],
    status: 'idle',
    error: null,
  },
  reducers: {
    enrollCourse: (state, action) => {
      state.enrolledCourses.push({ ...action.payload, progress: 0, completed: false });
    },
    markCourseAsCompleted: (state, action) => {
      const course = state.enrolledCourses.find(course => course.id === action.payload);
      if (course) {
        course.completed = true;
        course.progress = 100;
      }
    },
    updateCourseProgress: (state, action) => {
      const course = state.enrolledCourses.find(course => course.id === action.payload.id);
      if (course && !course.completed) {
        course.progress = action.payload.progress;
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCourses.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchCourses.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.courses = action.payload;
      })
      .addCase(fetchCourses.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export const { enrollCourse, markCourseAsCompleted, updateCourseProgress } = coursesSlice.actions;

export default coursesSlice.reducer;
