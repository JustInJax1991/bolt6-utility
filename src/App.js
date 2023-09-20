import logo from './logo.svg';
import './App.css';
import { Amplify } from 'aws-amplify';
import awsExports from './aws-exports';
import '@aws-amplify/ui-react/styles.css';
import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBolt } from '@fortawesome/free-solid-svg-icons' 
Amplify.configure(awsExports);

function App() {
  return (
    <NavBar />
  );
}

class NavBar extends React.Component {
  render() {
    return(
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container-fluid">
    <a class="navbar-brand" href="#">
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

class 

export default App;
