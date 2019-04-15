import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom';
import MaterialInsert from 'components/material-insert';

class RightSide extends Component  {
    render() {
        return (
            <div className="right-side">
                <Switch>
                    <Route path="/product/material-insert" component={MaterialInsert}/>
                </Switch>
            </div>
        )
    }
}

export default RightSide;