import logo from './logo.svg';
import './App.css';
import { Amplify } from 'aws-amplify';
import awsExports from './aws-exports';
import '@aws-amplify/ui-react/styles.css';
import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBolt } from '@fortawesome/free-solid-svg-icons';
import background from './electric-background1.png'
Amplify.configure(awsExports);

function App() {
  return (
    <div style={{ 
      backgroundImage:  `url(${background})`,
      backgroundSize: 'cover',
      width: '100vw',
      height: '100vh'
      }}>
      <NavBar />
      <TileContainer />  
    </div>
  );
}

class NavBar extends React.Component {
  render() {
    return(
      <nav class="navbar navbar-expand-lg" style={{ backgroundColor: '#224193'}}>
    <div class="container-fluid">
    <a class="navbar-brand" href="#" style={{color: '#DF3C5F'}}>
      <FontAwesomeIcon icon={faBolt}></FontAwesomeIcon>
      Bolt6 Utility
    </a>
    <select class="form-select mx-4" aria-label="Default select example">
      <option selected>TID</option>
      <option value="1">R2023011</option>
      <option value="2">R2023543</option>
    </select>
    <select class="form-select mx-4" aria-label="Default select example">
      <option selected>Environment</option>
      <option value="1">DEV</option>
      <option value="2">PROD</option>
    </select>
  </div>
</nav>
  );
  } 
}


class TileContainer extends React.Component {
  render() {
    return (
      <div className="container-fluid">
        <div class="d-flex flex-row justify-content-evenly mt-4">
        <div class="card" style={{width: "18rem"}}>
          <div class="card-body">
            <Tile/>
          </div>
        </div>
        <div class="card" style={{width: "18rem"}}>
          <div class="card-body">
            <Tile/>
          </div>
        </div>
        <div class="card" style={{width: "18rem"}}>
          <div class="card-body">
            <Tile/>
          </div>
        </div>
      </div>
      </div>
        
    );
  }
}

class Tile extends React.Component {
  render() {
    return (
      <div class="card-body">
       <h5 class="card-title">Card title</h5>
       <p class="card-text">Some quick example text to build on the card title</p>    
       <ul class="list-group list-group-flush">
    <li class="list-group-item"><TileParams/></li>
    <li class="list-group-item"><TileParams/></li>
    <li class="list-group-item"><TileParams/></li>
  </ul>
  <div class="d-grid gap-2 col-8 mx-auto">
  <button class="btn btn-success" type="button">Submit-Lambda</button>
  </div>
  </div>
    );
  }
}

class TileParams extends React.Component {
  render() {
    return (
      <select class="form-select" aria-label="Default select example">
      <option selected>Parameter Name</option>
      <option value="1">1</option>
      <option value="2">2</option>
    </select>
    );
  }
}



export default App;
