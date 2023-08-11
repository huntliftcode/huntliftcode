import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Navbar from './components/Navbar/Navbar.tsx';
import Home from './components/Home/Home.tsx';
import WorkExperience from './components/WorkExperience/WorkExperience.tsx';
import OutsideOfWork from './components/OutsideOfWork/OutsideOfWork.tsx';
import Education from './components/Education/Education.tsx';

import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements, 
  Route
} from "react-router-dom";


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Navbar />}>
      <Route path="/" element={<Home/>}/>
      <Route path="work-experience" element={<WorkExperience/>}/>
      <Route path="hobbies" element={<OutsideOfWork/>}/>
      <Route path="education" element={<Education/>}/>
    </Route>
  )
)
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
