import logo from './logo.svg';
import './App.css';
import { Amplify } from 'aws-amplify';
import awsExports from './aws-exports';
import '@aws-amplify/ui-react/styles.css';
import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBolt } from '@fortawesome/free-solid-svg-icons';
import background from './electric-background1.png'
import {cards} from './seed.js'
Amplify.configure(awsExports);

function App() {
  return (
    <div style={{ 
      backgroundImage:  `url(${background})`,
      backgroundSize: 'cover',
      backgroundAttachment: "fixed"
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

    const Tiles = cards
    const TileComponents = Tiles.map((tile) => (
      <Tile
      key={'tile-' + tile.id}
      id={tile.id}
      title={tile.title}
      description={tile.description}
      param={tile.param}
      />
    ));
    return (
      <div className="container-fluid">
        <div class="d-flex flex-row flex-wrap justify-content-evenly">
          {TileComponents}
        </div>
      </div>
        
    );
  }
}

class Tile extends React.Component {
  
  render() {

    const parameters = this.props.param.map((parameter) => (
      <TileParams
      key={'parameter-' + parameter.id}
      paramname={parameter.label}
      parameter={parameter.options}
      />
    ));

    return (
      <div class="card m-4" style={{width: "18rem", backgroundColor: "#6F9BD1", opacity: "0.9", color: "#224193"}}>
        <div class="card-body">
            <h5 class="card-title">{this.props.title}</h5>
            <p class="card-text">{this.props.description}</p>    
            <ul class="list-group list-group-flush" >
              {parameters}
            </ul>           
          <div class="d-grid gap-2 col-8 mx-auto">
            <button class="btn btn-success" type="button" style={{backgroundColor: "#DF3C5F"}}>Submit-Lambda</button>
          </div>
        </div>
      </div>
    );
  }
}

class TileParams extends React.Component {
  render() {
    
    const paramdropdown = this.props.parameter.map((option) => (
      <ParamsOption
      value={option}
      />
    )); 
    
    return (
      <li class="list-group-item" style={{backgroundColor: "#6F9BD1"}}>
      <select class="form-select" aria-label="Default select example">
      <option selected style={{color: "#224193"}}>{this.props.paramname}</option>
      {paramdropdown}
    </select>
    </li>
    );
  }
}

class ParamsOption extends React.Component {
    render() {
      return (
        <option value={this.props.value} style={{color: "#224193"}}>{this.props.value}</option>
      )
    }
}



export default App;
