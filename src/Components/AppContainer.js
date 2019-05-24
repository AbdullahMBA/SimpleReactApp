import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Redirect } from 'react-router-dom'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Menu from '@material-ui/core/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormGroup from '@material-ui/core/FormGroup';
import MenuItem from '@material-ui/core/MenuItem';
import MenuLogo from '../assets/images/images/menu.svg'

const styles = {
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
};

class AppContainer extends React.Component {
  state = {
    auth: true,
    anchorEl: null,
    LoginSwitch: true,
    redirect: false
  };

  handleChange = event => {
    this.setState({
      auth: event.target.checked,
      LoginSwitch: false,
      redirect: true
    });
    if (this.state.redirect) {
      console.log('works')
    }

  };

  handleMenu = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };
  redirectSwitchhandler() {
    this.setState({

    })
  }
  renderRedirect = () => {
    if (this.state.redirect) {
      return <Redirect to='/Login' />
      console.log('it works')
    }
  }

  render() {
    const { classes } = this.props;
    const { auth, anchorEl } = this.state;
    const open = Boolean(anchorEl);
    { this.renderRedirect() }

    return (

      <div className={classes.root}>

        <AppBar position="static" style={{ backgroundColor: '#F65314' }}>
          <FormGroup>
            <FormControlLabel
              control={
                <Switch checked={auth} onChange={this.handleChange} aria-label="LoginSwitch" />
              }
              label={auth ? <p style={{ color: 'white' }}>Logout</p> : <Redirect to='/Login/' />}
            />
          </FormGroup>
          <Toolbar>
          
            <Button
            
            aria-owns={anchorEl ? 'simple-menu' : undefined}
            aria-haspopup="true"
            onClick={this.handleMenu}
          >
            <img src={MenuLogo} style={{width:'20%' , marginRight:'80%'}}/>
      </Button>
          <Menu id="simple-menu" anchorEl={anchorEl} className={classes.menuButton} open={Boolean(anchorEl)} onClose={this.handleClose}>
            <MenuItem onClick={this.handleClose}>Profile</MenuItem>
            <MenuItem onClick={this.handleClose}>My account</MenuItem>
            <MenuItem onClick={this.handleClose}>Logout</MenuItem>
          </Menu> 
            <Typography variant="h6" color="inherit" className={classes.grow}>

            </Typography>
            {auth && (
              <div>

                <AccountCircle />


              </div>
            )}
          </Toolbar>
         
        </AppBar>
      </div>
    );
  }
}

AppContainer.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AppContainer);
