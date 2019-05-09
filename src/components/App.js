import React, { Component } from 'react';
import '../styles/App.scss';
import scrollToComponent from 'react-scroll-to-component';

class App extends Component {
  constructor(){
    super();
    this.state = {}
  };
  render() {
    return (
      <div className="App">
        <div className='container'>
        Hi, I'm 
          <div className='flip'>
            <div>
              <div>Michael DoHo.</div>
            </div>
            <div>
              <div>Michael DoHo.</div>
            </div>
            <div>
              <div>Michael DoHo.</div>
            </div>
          </div>
        A Front End Developer.
        </div>
        <div className='App__background'>
        
        </div>
        <div className='App__back'>
          <div className='App__back__space'>
            <button className='App__back__space__buttons' onClick={() => scrollToComponent(this.About, { offset: 0, align: 'top', duration: 1500})}>About</button>
            <button className='App__back__space__buttons'>Projects</button>
            <button className='App__back__space__buttons'>Contact</button>
          </div>
        </div>
        <div className='App__about' ref={(section) => {this.About = section}}>
          <img className='face' src={require('../Images/part1.gif')}/>
        </div>
          <div className='App__nav'>
            <div className='App__nav__box'>
              <button className='App__nav__box__switch'>Home</button>
              <button className='App__nav__box__switch'>About</button>
              <button className='App__nav__box__switch'>Projects</button>
              <button className='App__nav__box__switch'>Contact</button>
            </div>
          <div className='App__nav__line'></div>
        </div>  
      </div>
    );
  }
}

export default App;
