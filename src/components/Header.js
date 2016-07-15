import React, {Component} from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import {deepOrange500} from 'material-ui/styles/colors';
import FlatButton from 'material-ui/FlatButton';
import IconButton from 'material-ui/IconButton';
import AppBar from 'material-ui/AppBar';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const styles = {
  container: {
    textAlign: 'center',
    paddingTop: 200,
  },
};

const muiTheme = getMuiTheme({
  palette: {
    accent1Color: deepOrange500,
  },
});

class Header extends Component {
  constructor(props, context) {
    super(props, context);

    this.handleRequestClose = this.handleRequestClose.bind(this);
    this.handleTouchTap = this.handleTouchTap.bind(this);

    this.state = {
      open: false,
    };
  }

  handleRequestClose() {
    this.setState({
      open: false,
    });
  }

  handleTouchTap() {
    this.setState({
      open: true,
    });
  }

  render() {
    const standardActions = (
      <FlatButton
        label="Ok"
        primary={true}
        onTouchTap={this.handleRequestClose}
      />
    );

    return (
        <AppBar
          title="#PDXemoji"
          iconClassNameRight="mui-icon-search"
          />

          // <Dialog
          //   open={this.state.open}
          //   title="Super Secret Password"
          //   actions={standardActions}
          //   onRequestClose={this.handleRequestClose}
          // >
          //   1-2-3-4-5
          // </Dialog>
          // <h1>Material-UI</h1>
          // <h2>example project</h2>

    );
  }
}

export default Header;
