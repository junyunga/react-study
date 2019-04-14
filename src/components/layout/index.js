import React, { Component } from 'react';
import './layout.scss';
import LeftSide from 'components/left-side';
import RightSide from 'components/right-side';
import Header from 'components/header';

class Layout extends Component {
    render() {
        return (
            <div className="layout-container">
                <div className="header">
                    <Header />
                </div>
                <div className="content">
                    <div className="content-left">
                        <LeftSide />
                    </div>
                    <div className="content-right">
                        <RightSide />
                    </div>
                </div>

            </div>

        );
    }
}

export default Layout;
