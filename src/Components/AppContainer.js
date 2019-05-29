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
import MenuLogo from '../assets/images/icons/hamburger.svg'



const styles = theme => ({
  root: {
      flexGrow: 1,
      marginTop: 8,
      margin: 12

  },
  divider: {
      width: '100%',
  },
  ButtonSearch: {
      backgroundColor: '#007bff',
      color: 'white',
      '&:hover': {
          background: '#007bff'
      }
  },
  ButtonLocation: {
      backgroundColor: '#4CAF50',
      color: 'white',
      '&:hover': {
          background: '#4CAF50'
      }
  },
  ButtonGuide: {
      backgroundColor: '#74cbc4',
      color: 'white',
      '&:hover': {
          background: '#74cbc4'
      },
      margin: theme.spacing.unit,
      padding: '2px'
  },
  tab: {
      flexGrow: 1,
      marginTop: 2,
      backgroundColor: '#f7faea'

  },
  
  iocns: {
      fontSize: 18
  },
  ratingContainer: {
      padding: '2px 4px',
      display: 'flex',
      alignItems: 'center',
      width: 400,
  },
  input: {
      paddingRight: 10,
      flex: 1,
  },
  iconButtonRating: {
      padding: 10,
  },
  divpadding: {
      padding: '5%'
  },
  btn_login: {
      color: 'white',
      padding: '10px 1px',
      border: 'none',
      cursor: 'pointer',
      width: '100%',
      opacity: '0.9',
      borderRadius: '3px',

  },
  imgShow: {
      width: 50,
      height: 50,
  }



});
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

    <AppBar position="fixed" style={{backgroundColor:'#66d9ff'}} >
          <FormGroup>
            <FormControlLabel
              control={
                <Switch checked={auth} onChange={this.handleChange} aria-label="LoginSwitch" />
              }
              label={auth ? <p style={{ color: 'white' }}>Logout</p> : <Redirect to='/Login/' /> }
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
