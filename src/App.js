import React from 'react';
import logo from './logo.svg';
import './App.css';
import pro from './img/profile.svg';

function App() {
  return (
    <div className="App">
       <Home/>
    </div>
  );
}
let Home=()=>{
  return(
      <div className="row justify-content-center">
        <div className="card" style={{width:"25rem",fontStyle:"italic",boxShadow:"0px 8px 8px -8px #1000"}}>
        <img src={pro} style={{height:"50%"}}/>
        <div className="card-body text-center">
        <h1>Adabala Divya</h1>
        </div>
      </div>
      </div>
  );
}

export default App;
