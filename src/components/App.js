import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom';
import ChooseMenu from 'components/choose-menu';
import Layout from 'components/layout';
import UserSwitch from 'page/user-switch'
import './App.scss';

class App extends Component {
    render() {
        return (
            <div className="app-container">
                <Switch>
                    <Route exact path="/" component={ChooseMenu}/>
                    <Route path="/product" component={Layout}/>
                    <Route path="/workOrder" component={ChooseMenu}/>
                    <Route path="/user-switch" component={UserSwitch}/>
                </Switch>
            </div>

        );
    }
}

export default App;
