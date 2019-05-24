import React, { Component } from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom'
import App from './App'
import Login from './Components/Login'
import AppContainer from './Components/AppContainer'
import indexPage from './Components/indexPage';
import Gallery from './Components/Gallery'


const AppRouter = () => (

        <BrowserRouter>


            <div>

                <Switch>

                    <Route  path="/Login" component={Login} ></Route>
                    <Route path="/AppContainer" component={AppContainer} ></Route>
                    <Route path="/indexPage" component={indexPage}></Route>
                    <Route path='/Gallery' component={Gallery}></Route>
\                </Switch>
            </div>


        </BrowserRouter>


)




export default AppRouter;