import React, {Component} from 'react';
import './index.scss';

class Header extends Component {
    render() {
        return (
            <div className="header layout-container">
                <div className="logo-wrapper">
                    <img className="logo"
                         alt="리액트로고"
                         src="https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png"/>
                    <div className="logo-title">리액트스터디</div>
                </div>
                <div className="machine-list-wrapper">

                </div>
            </div>
        )
    }
}

export default Header;