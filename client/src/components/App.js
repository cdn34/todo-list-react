import React, {PropTypes} from 'react';
import Radium, { Style, StyleRoot } from 'radium';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';

class App extends React.Component {
  constructor(props){
      super(props);
      injectTapEventPlugin();
  }
  render() {
    return(
      <MuiThemeProvider>
        {this.props.children}
      </MuiThemeProvider>
    )
  };
}

App.propTypes = {
  children: PropTypes.element
};

export default App;