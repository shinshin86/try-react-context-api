import React, { Component } from 'react';
import '../App.css';
import { ThemeContext, themes } from './ThemeContext';
import ThemedButton from './ThemedButton';
import styled from 'styled-components';

const LinkContent = styled.p`
  font-size: 16px;
  margin: 8px;
`;

function Toolbar(props) {
  return <ThemedButton onClick={props.changeTheme}>Change Theme</ThemedButton>;
}

class ThemeChanger extends Component {
  constructor(props) {
    super(props);
    this.state = {
      theme: themes.light
    };

    this.toggleTheme = () => {
      this.setState(state => ({
        theme: state.theme === themes.dark ? themes.light : themes.dark
      }));
    };
  }

  render() {
    return (
      <div>
        <LinkContent>
          Reference :{' '}
          <a
            href="https://reactjs.org/docs/context.html#examples"
            alt="reference url"
          >
            Context - React
          </a>
        </LinkContent>
        <ThemeContext.Provider value={this.state.theme}>
          <Toolbar changeTheme={this.toggleTheme} />
        </ThemeContext.Provider>
      </div>
    );
  }
}

export default ThemeChanger;
