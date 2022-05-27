import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import {Home} from './pages/Home'
import {About} from './pages/About'
import { Navbar } from './Components/Navbar';
import { Alert } from './Components/Alert';
import { AlertState } from './Context/alert/AlertState';
import {FirebaseState} from './Context/firebase/FirebaseState';

function App() {
  return (
    
    <FirebaseState>
      <AlertState>
        <BrowserRouter>
          <Navbar/>
          <div className="container pt-4 ">
            <Alert />
            <Routes>
              <Route path ="/" exact element = {<Home/>}/>
              <Route path ="/About" element = {<About/>}/>
            </Routes>
          </div>
        </BrowserRouter>
      </AlertState>
    </FirebaseState>
  );
}

export default App;
