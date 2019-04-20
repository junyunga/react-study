import React, { Component } from 'react';
import './layout.scss';
import LeftSide from 'components/left-side';
import RightSide from 'components/right-side';
import Header from 'components/header';

class Layout extends Component {
    render() {
        return (
            <div className="layout-container">
                <Header />
                <div className="content">
                    <LeftSide/>
                    <RightSide/>
                </div>

            </div>

        );
    }
}

export default Layout;
