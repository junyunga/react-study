import React, {Component} from 'react';
import './index.scss';

class Header extends Component  {
    render() {
        return (
            <div className="header layout-container">
                <div className="logo-wrapper">
                    리 액 트 스 터 디
                </div>
                <div className="machine-list-wrapper">
                    설비 리스트 들어올 자리
                </div>
            </div>
        )
    }
}

export default Header;