import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Search from './components/Search';
import HomeMainBar from './components/HomeMainBar';
import Dashboard from './pages/Dashboard';
import { fetchCourses } from './coursesSlice';
import './index.css';

function App() {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCourses());
  }, [dispatch]);

  return (
    <div className='App'>

      <Router>

        <div className='leftSideBbar'>
          <Sidebar />
        </div>

        <div className='homeMainBar'>
          <Routes>
            <Route path='/' element={<HomeMainBar />} />
            <Route path='/dashboard' element={<Dashboard />} />
          </Routes>
        </div>

        <div className='SearchSideBar'>
          <Search />
        </div>

      </Router>

    </div>
  );
}

export default App;
