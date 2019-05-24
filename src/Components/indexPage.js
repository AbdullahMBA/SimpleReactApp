import React, { Component } from 'react';
import { render } from 'react-dom';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import 'react-animated-slider/build/horizontal.css';
import  './indexPage.css'
import AppContainer from './AppContainer'
import '../assets/images/images/bluebackground.jpg'
import { Link } from 'react-router-dom'
import Gallery from './Gallery'
import WebFont from 'webfontloader';


WebFont.load({
    google: {
      families: ['Titillium Web:300,400,700', 'sans-serif']
    }
  });

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



class indexPage extends Component {

    constructor(props) {
        super(props)
        this.state = {
            check: ''
        }
    }

    checkHandel() {
        console.log("this is the index page         ")
    }

    render() {

        return (

            <div>
                  <AppContainer />
                <Gallery/>
              

               </div>
                );
            }
        
        }
indexPage.propTypes = {
                    classes: PropTypes.object.isRequired,
            };
export default withStyles(styles)(indexPage);