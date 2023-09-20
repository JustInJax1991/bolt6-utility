import logo from './logo.svg';
import './App.css';
import { Amplify } from 'aws-amplify';
import awsExports from './aws-exports';
import '@aws-amplify/ui-react/styles.css';
import React, { Component } from 'react';
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
      <img src="/docs/5.3/assets/brand/bootstrap-logo.svg" alt="Logo" width="30" height="24" class="d-inline-block align-text-top"/>
      Bolt6 Utility
    </a>
  </div>
</nav>
  );
  } 
}

export default App;
