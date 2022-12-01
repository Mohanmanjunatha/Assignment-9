import React, { useState } from 'react';
import './App.css';
import Home from './Components/Home';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Job from './Components/Job';
import About from './Components/About';
import Contact from './Components/Contact';
import Login from './Components/Login';

const jobData = [
  { name: "Mohan", jobDesc: "Software Developer", exp: 3 },
  { name: "Tanvir", jobDesc: "ReactJs Developer", exp: 2 },
  { name: "Harsh", jobDesc: "NodeJs Developer", exp: 5 },
  { name: "Kaushal", jobDesc: "VueJs Developer", exp: 1.5 },
];

function App() {

  //Use State:

  const [job, setJob] = useState(jobData);

  const addData = (input) => {
    setJob((prevData) => {
      return [...prevData, input];
    });
    console.log(input);
  }


  return (
    <Router>
      <div className="navbarWrapper">
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <Link to="/"><a class="navbar-brand" href="#">Tech Sierra</a></Link>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item active">
                <Link to="/"><a class="nav-link" href="#">Home </a></Link>
              </li>
              <li class="nav-item">
                <Link to="/about"><a class="nav-link" href="#">About</a></Link>
              </li>
              <li class="nav-item">
                <Link to="/job"><a class="nav-link" href="#">Jobs</a></Link>
              </li> <li class="nav-item">
                <Link to="/contact"><a class="nav-link" href="#">Contact</a></Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/' element={<Home />} />
        <Route path='/job' element={<Job addData={addData} job={job} />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
