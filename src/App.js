import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

// Stylesheet used: https://bootswatch.com/ -> flatly
class App extends Component {
  render() {
    return (
      <div className="App">
        <header> 
          <h1>Alex <strong>Dumitru</strong> <small> | Web Developer </small></h1> 

          <h3> <small>
          <a href="https://www.linkedin.com/in/alexdmtr/">&bull; LinkedIn</a>
            <a href="https://github.com/alex-dmtr">&bull; GitHub</a>
           

            </small></h3>
          </header>

        
        
        
        
        <h2 id="myguarantee">my guarantee</h2>
        
        <div className="row">
          <div className="col-sm-4 item">
            <img src="gear.png"/>
            <h3>Professional design</h3>
            <small>By using tried and tested technologies and implementing best practices, the applications I develop are guaranteed to be quality and reliable.</small>
          </div>
          <div className="col-sm-4 item">
            <img src="handshake.png"/>
            <h3>Strong communication</h3>
            <small>My experience with team projects and communication with clients makes me able to express ideas clearly and effectively.</small>
          </div>
          <div className="col-sm-4 item">
            <img src="barchart.png"/>
            <h3>Proven results</h3>
            <small>I've worked on the development of multiple web projects which are now being  succesfuly used throught Europe.</small>
          </div>
        </div>

        {/* <h2 id="mywork">my work</h2> */}
        
      </div>
    );
  }
}

export default App;
