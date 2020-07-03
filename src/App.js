import React from 'react';
import logo from './logo.svg';
import './App.css';
import pro from './img/profile.svg';
import data from './data/data.json';
import {BrowserRouter,Route,Link} from 'react-router-dom';
import resume from './resume';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Route exact path='/' component={Home} />
      {/* <Route exact path='/resume' component={resume}/> */}
      </BrowserRouter>
    <Home/>
    </div>
  );
}
let Home=()=>{
  let profile=data.profiles;
  console.log(profile);
  return(
      <div className="row justify-content-center">
        {profile.map((value,index)=>(
          <div className="col-lg-4 col-md-4 col-sm-10 mt-5" key={index}>
        <div className="card" style={{width:"25rem",fontStyle:"italic",boxShadow:"0px 5px 5px -5px #1000"}}>
        <img src={pro} style={{height:"50%"}}/>
        <div className="card-body text-center">
        <h1>{value.basics.pname}</h1>
        <div className="text-secondary">
          <h1>{value.basics.role}</h1>
        </div>
        <a href={"tel"+value.basics.email}>{value.basics.email}</a><br/>
        <a href={"mailto"+value.basics.phone}>{value.basics.phone}</a><br/>
       <BrowserRouter>
           <Link className="btn btn-primary">view</Link>
        </BrowserRouter>
        {/* <Link to={{pathname:'/resume',data:{id:index}}} className="btn btn-primary">view</Link> */}
        {/* <button href="resume">view</button> */}
        </div>
      </div>
      </div>
       ))}
      </div>
  );
}

export default App;
