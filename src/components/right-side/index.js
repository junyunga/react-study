import React, { Component } from 'react';
import './index.scss';
import { Route, Switch } from 'react-router-dom';
import MaterialInsert from 'components/material-insert';
// import WorkList from 'page/product/work-list';
import { WorkList, DevPage } from 'page/index.async.js';
class RightSide extends Component {
    render() {
        return (
            <div className="right-side">
                <Switch>
                    <Route path="/product/material-insert" component={MaterialInsert} />
                    <Route path="/product/work-list" component={WorkList} />
                    <Route path="/product/dev-page" component={DevPage} />
                </Switch>
            </div>
        )
    }
}

export default RightSide;