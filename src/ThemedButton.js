import React from 'react'
import { ThemeContext } from './ThemeContext'

const ThemedButton = props => {
  return (
    <ThemeContext.Consumer>
      {theme => (
        <button
          {...props}
          style={{backgroundColor: theme.background,
                  color: theme.foreground,
                  width: 200,
                  height: 100}}
        />
      )}
    </ThemeContext.Consumer>
  );
}

export default ThemedButton;
