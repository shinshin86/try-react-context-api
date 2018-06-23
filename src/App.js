import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TabContent from './TabContent';
import styled from 'styled-components';

const Container = styled.div`
  max-width: 1100px;
  padding-left: 16px;
  padding-right: 16px;
  margin: 0 auto;
`;

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          Context API Sample
        </p>
        <Container>
          <TabContent />
        </Container>
      </div>
    );
  }
}

export default App;
