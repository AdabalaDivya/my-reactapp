import React from 'react';
import data from './data/data.json';
import pro from './img/profile.svg';

export default function Resume(props){
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response=>response.json)
        .then(data=>console.log(data))
        let info=data.profiles[props.location.data.id]
    return(
      <div className="row justify-content-center"> 
      {/* profile data left part */}
       <div className="col-lg-3 m-2" >
           <div className="card shadow">
             <div>
               <img src={pro} alt="profile icon" style={{width:"30%"}}/>
               <h2>{info.basics.name}</h2>
               <div className="text-secondary">
               <h4>{info.basics.role}</h4>
          </div>
             <a href={"tel"+info.basics.phone}>{info.basics.phone}</a><br/>
             <a href={"mailto"+info.basics.email}>{info.basics.email}</a><br/>
             </div>
           </div>
       </div>
       {/* peofile data right part */}
       <div className="col-lg-8 mt-2" style={{backgroundColor:"skyblue",height:"40%"}}>
            <div className="card-body card shadow" style={{textAlign:"left"}}>
              <h3 style={{textAlign:"left"}}>Carrier Objective:</h3>
             <p>{info.carrier}</p><hr />
             <h3 >ACADEMIC PROFILE:</h3>
              <table border="2" cellpadding="5" cellspacing="0">
                  <tr>
                    <th>Qualification</th><th>Specialisation</th><th>Name of the college</th>
                    <th>Name of the Board/University</th><th>Year of passing</th><th>Percentage/CGPA</th>
                  </tr>
                  <tr>
                   <td>{info.mydata.Qu1}</td>
                   <td>{info.mydata.Sp1}</td>
                   <td>{info.mydata.Col1}</td>
                   <td>{info.mydata.Uni1}</td>
                   <td>{info.mydata.YOP1}</td>
                   <td>{info.mydata.Pecg1}</td>
                  </tr>
                  <tr>
                   <td>{info.myd2.Qu2}</td>
                   <td>{info.myd2.Sp2}</td>
                   <td>{info.myd2.Col2}</td>
                   <td>{info.myd2.Uni2}</td>
                   <td>{info.myd2.YOP2}</td>
                   <td>{info.myd2.Pecg2}</td>
                  </tr>
                  <tr>
                   <td>{info.myd3.Qu3}</td>
                   <td>{info.myd3.Sp3}</td>
                   <td>{info.myd3.Col3}</td>
                   <td>{info.myd3.Uni3}</td>
                   <td>{info.myd3.YOP3}</td>
                   <td>{info.myd3.Pecg3}</td>
                  </tr>
              </table>
              <h2>TECHNICAL SKILLS:</h2>
                  <table border="0" style={{textAlign:"left"}}>
                    <tr>
                      <td>Programminglanguages</td>
                      <td>:</td>
                      <td>{info.tech.pl}</td>
                    </tr>
                    <tr>
                      <td>WebTechnologies</td>
                      <td>:</td>
                      <td>{info.tech.wt}</td>
                    </tr>
                    <tr>
                      <td>DBMS</td>
                      <td>:</td>
                      <td>{info.tech.DBMS}</td>
                    </tr>
                    <tr>
                      <td>Package</td>
                      <td>:</td>
                      <td>{info.tech.pg}</td>
                    </tr>
                    <tr>
                      <td>Operatingsystem</td>
                      <td>:</td>
                      <td>{info.tech.os}</td>
                    </tr>
                  </table>
                  <h2 >PERSONAL SKILLS:</h2>
                  <ul type="disc">
                    <li>{info.pers.sk1}</li>
                    <li>{info.pers.sk2}</li>
                    <li>{info.pers.sk3}</li>
                    <li>{info.pers.sk4}</li>
                  </ul>
                  <h2>PROJECTS:</h2>
                  <ul>
                    <li>{info.projects.pr1}</li>
                    <li>{info.projects.pr2}</li>
                  </ul>
                  <h2>WORKSHOPS/INTERNSHIPS: </h2>
                  <ul>
                      <li>{info.wrshp.wr1}</li>
                      <li>{info.wrshp.wr2}</li>
                      <li>{info.wrshp.wr3}</li>
                      <li>{info.wrshp.wr4}</li>
                      <li>{info.wrshp.wr5}</li>
                  </ul>
                  <h2>ACHEIVEMENTS: </h2>
                  <ul>
                    <li>{info.ach.ach1}</li>
                    <li>{info.ach.ach2}</li>
                    <li>{info.ach.ach3}</li>
                    <li>{info.ach.ach4}</li>
                    <li>{info.ach.ach5}</li>
                  </ul>
                  <h2>PERSONAL DETAILS:</h2>
                  <table border="0" style={{textAlign:"left"}}>
                    <tr>
                      <td>Date of Birth </td>
                      <td>:</td>
                      <td>{info.perde.pd1}</td>
                    </tr>
                    <tr>
                      <td>Gender</td>
                      <td>:</td>
                      <td>{info.perde.pd2}</td>
                    </tr>
                    <tr>
                      <td>Nationality</td>
                      <td>:</td>
                      <td>{info.perde.pd3}</td>
                    </tr>
                    <tr>
                      <td>Address </td>
                      <td>:</td>
                      <td>{info.perde.pd4}</td>
                    </tr>
                    <tr>
                      <td>Hobbies</td>
                      <td>:</td>
                      <td>{info.perde.pd5}</td>
                    </tr>
                    <tr>
                      <td>Languages known</td>
                      <td>:</td>
                      <td>{info.perde.pd6}</td>
                    </tr>
                  </table>
                  <h2 align="center">DECLARATION :</h2>
                  <p>{info.val}</p>
                  <h4 align="right">{info.sign}</h4>
            </div>
       </div>
      </div>
    )
}