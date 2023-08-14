import './App.css'
import Navbar from './components/Navbar/Navbar.tsx';

import Home from './components/Home/Home.tsx';
import WorkExperience from './components/WorkExperience/WorkExperience.tsx';
import OutsideOfWork from './components/OutsideOfWork/OutsideOfWork.tsx';
import Education from './components/Education/Education.tsx';
import {
  Route,
  Routes,
} from "react-router-dom";
import TechnicalSkills from './components/TechnicalSkills/TechnicalSkills.tsx';


function App() {
  return (
     <>
      <Navbar />
      <div className="p-10 bg-slate-50 w-screen h-screen">
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/work-experience" element={<WorkExperience />}/>
          <Route path="/hobbies" element={<OutsideOfWork />}/>
          <Route path="/education" element={<Education />}/>
          <Route path="/technical-skills" element={<TechnicalSkills />}/>
        </Routes>
      </div>
    </>
  )
}

export default App
