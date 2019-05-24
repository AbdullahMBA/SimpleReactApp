import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from '@material-ui/core/TextField';
import axios from 'axios';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import Input from '@material-ui/core/Input';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import bluebackground from '../assets/images/images/bluebackground.jpg'
import '../Components/Login.css'
import { Redirect } from 'react-router-dom'
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import ErrorIcon from '@material-ui/icons/Error';
import InfoIcon from '@material-ui/icons/Info';
import CloseIcon from '@material-ui/icons/Close';
import green from '@material-ui/core/colors/green';
import amber from '@material-ui/core/colors/amber';
import IconButton from '@material-ui/core/IconButton';
import Snackbar from '@material-ui/core/Snackbar';
import SnackbarContent from '@material-ui/core/SnackbarContent';
import WarningIcon from '@material-ui/icons/Warning';
import { transitions, positions, Provider as AlertProvider } from 'react-alert'
import { useAlert } from 'react-alert'
import StatusAlert, { StatusAlertService } from 'react-status-alert'
import 'react-status-alert/dist/status-alert.css'
import '../Components/Login.css'
import ChefHat from '../assets/images/images/ChefHat.png'
import Cheese from '../assets/images/images/Cheese.png'



function Transition(props) {
    return <Slide direction="up" {...props} />;
}

const stylesz = theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        width: 200,
    },
    dense: {
        marginTop: 19,
    },
    menu: {
        width: 200,
    },
    button: {
        position: 'absolute',
        bottom: 0,
        borderRadius: 90, backgroundColor: '#1a75ff', color: 'white'
    },
    success: {
        backgroundColor: green[600],
    },
    error: {
        backgroundColor: theme.palette.error.dark,
    },
    info: {
        backgroundColor: theme.palette.primary.dark,
    },
    warning: {
        backgroundColor: amber[700],
    },
    icon: {
        fontSize: 20,
    },
    iconVariant: {
        opacity: 0.9,
        marginRight: theme.spacing.unit,
    },
    message: {
        display: 'flex',
        alignItems: 'center',
    }
});
const variantIcon = {
    success: CheckCircleIcon,
    warning: WarningIcon,
    error: ErrorIcon,
    info: InfoIcon,
};


class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            LoginOpenDialog: false,
            RegisterOpenDialog: false,
            textField: 'Username',
            RedirectSwitch: false,
            alertNotification: false,
        }
        this.showSuccessAlert = this.showSuccessAlert.bind(this);
        this.removeAlert = this.removeAlert.bind(this);
    }
    handleClick(event) {
        var apiBaseUrl = "http://localhost:4000/api/";
        var self = this;
        var payload = {
            "email": this.state.username,
            "password": this.state.password
        }
        axios.post(apiBaseUrl + 'login', payload)
            .then(function (response) {
                console.log(response);
                if (response.data.code == 200) {
                    console.log("Login successfull");

                }
                else if (response.data.code == 204) {
                    console.log("Username password do not match");
                    alert("username password do not match")
                }
                else {
                    console.log("Username does not exists");
                    alert("Username does not exist");
                }
            })
            .catch(function (error) {
                console.log(error);
            });
    }
    handleLoginClickOpen = () => {
        this.setState({ LoginOpenDialog: true });
    };
    handleRedirectPage = () => {
        this.setState({
            RedirectSwitch: true
        })

    }

    handleLoginClose = () => {
        this.setState({ LoginOpenDialog: false });
    };
    handleRegisterClickOpen = () => {
        this.setState({ RegisterOpenDialog: true });
    };

    handleRegisterClose = () => {
        this.setState({ RegisterOpenDialog: false });
    };
    handleNotification = () => {
        this.setState({
            alertNotification: true
        })
    }
    showSuccessAlert() {
        const alertId = StatusAlertService.showWarning('This is a test notification shows that the functions works properly , please go the login directly');
        this.setState({ alertId });
    }

    removeAlert() {
        StatusAlertService.removeAlert(this.state.alertId);

    }
    checking = () =>{
        
    }
    render() {
        const { classes } = this.props;

        return (
<div onLoad={this.checking}>

                <StatusAlert /> 
            <img src={ChefHat} style={{width:'87%' , marginTop:'45%' , marginLeft:'4%'}}/>

            
                <div style={{marginTop:'20%'}}>
                    <Button variant="outlined" color="primary" onClick={this.handleLoginClickOpen} style={{
                        position: 'absolute',
                        bottom: '28%', right: '23%', padding: 10,
                        borderRadius: 90, backgroundColor: '#F65314', color: 'white'
                    }}>
                        login
                    </Button>
                    <Dialog
                        open={this.state.LoginOpenDialog}
                        TransitionComponent={Transition}
                        keepMounted
                        onClose={this.handleLoginClose}
                        aria-labelledby="alert-dialog-slide-title"
                        aria-describedby="alert-dialog-slide-description"
                        style={{ borderRadius: '10%' }}
                    >
                        <DialogTitle id="alert-dialog-slide-title" style={{ backgroundColor: '#F65314' }}>
                            <p style={{ marginLeft: '40%', color: 'white' }}>Login</p>
                        </DialogTitle>
                        <DialogContent style={{ backgroundColor: '#f2f2f2' }}>
                            <DialogContentText id="alert-dialog-slide-description">
                                Please enter your username and password
                </DialogContentText>
                            <TextField
                                id="standard-uncontrolled"
                                label="Username"
                                defaultValue="Username"
                                margin="normal"
                            />
                            <br />
                            <TextField
                                id="standard-uncontrolled"
                                label="Password"
                                defaultValue="Password"
                                margin="normal"
                                type='password'

                            />

                        </DialogContent>
                        <div style={{ backgroundColor: 'grey' }}>
                            <DialogActions>
                                <Button onClick={this.handleLoginClose} color="primary">
                                    <p style={{color:'white'}}>Close</p>
                                </Button>
                                <Button onClick={this.handleRedirectPage} color="primary">
                                    <p style={{color:'white'}}>Login</p>

                                 </Button>

                            </DialogActions>
                        </div>
                    </Dialog>

                </div>
                {this.state.RedirectSwitch ? <Redirect to='/indexPage/' /> : <p></p>}


                {/* Register */}

                <div className='container' style={{ fontFamily: '../assets/fonts/poppins/Poppins-Medium.ttf' }}>

                    <div>
                        <Button variant="outlined" color="primary" onClick={this.handleRegisterClickOpen} style={{
                            position: 'absolute',
                            bottom: '28%', left: 90, padding: 10,
                            borderRadius: 90, backgroundColor: '#F65314 ', color: 'white'
                        }}>
                            Register
                    </Button>
                        <Dialog
                            open={this.state.RegisterOpenDialog}
                            TransitionComponent={Transition}
                            keepMounted
                            onClose={this.handleRegisterClose}
                            aria-labelledby="alert-dialog-slide-title"
                            aria-describedby="alert-dialog-slide-description"
                            style={{ borderRadius: '10%' }}
                        >
                            <DialogTitle id="alert-dialog-slide-title" style={{ backgroundColor: '#F65314' }}>
                                <p style={{ marginLeft: '40%', color: 'white' }}>Register</p>
                            </DialogTitle>
                            <DialogContent style={{ backgroundColor: ' #f2f2f2' }}>
                                <DialogContentText id="alert-dialog-slide-description">
                                    Please fill the fields below
                </DialogContentText>
                                <TextField
                                    id="standard-uncontrolled"
                                    label="Username"
                                    defaultValue="Username"
                                    margin="normal"
                                />
                                <br />
                                <TextField
                                    id="standard-uncontrolled"
                                    label="Email"
                                    defaultValue="Email"
                                    margin="normal"
                                />
                                <br />
                                <TextField
                                    id="standard-uncontrolled"
                                    label="Password"
                                    defaultValue="Password"
                                    margin="normal"
                                    type='password'
                                />
                                <br />
                                <TextField
                                    id="standard-uncontrolled"
                                    label="ConfirmPassword"
                                    defaultValue="ConfirmPassword"
                                    margin="normal"
                                    type='password'
                                />


                            </DialogContent>
                            <div style={{ backgroundColor: ' grey' }}>

                                <DialogActions>
                                    <Button onClick={this.handleRegisterClose} color="primary">
                                    <p style={{color:'white'}}>Close</p>
                                    </Button>
                                    <Button onClick={this.handleNotification} color="primary" onClick={this.showSuccessAlert}>
                                      <p style={{color:'white'}}>  Register</p>
                                 </Button>

                                </DialogActions>
                            </div>
                        </Dialog>
                    </div>

                </div>
                </div>
        );
    }
}
const style = {
    margin: 15,
};
export default withStyles(stylesz)(Login);
