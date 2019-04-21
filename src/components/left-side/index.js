import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import './index.scss';

class LeftSide extends Component {
    render() {
        const activeStyle = {
            color: '#fff',
            backgroundColor: '#1B4C74'
        };


        /**
         * 라우터 명칭은 변경 하고 싶으면 변경하시길
         * @type {{route: string, title: string}[]}
         */
        const MenuList = [
            {
                title: '작업지시',
                icon: 'chrome_reader_mode',
                route: '/product/work-order'
            },
            {
                title: '작업현황',
                icon: 'dashboard',
                route: '/product/work-list'
            },
            {
                title: '자재투입',
                icon: 'input',
                route: '/product/material-insert'
            }
        ];

        const button = MenuList.map((value, index) => {
            return (
                <div className="navigation-button-wrapper" key={index}>
                    <NavLink to={`${value.route}`}
                             className="navigation-button-content"
                             activeStyle={activeStyle}>
                        <div className="navigation-button">
                            <i className="material-icons">{value.icon}</i>{value.title}
                        </div>
                    </NavLink>
                </div>
            );
        });

        return (
            <div className="left-side">
                <div className="navigation-button-wrapper">
                    <NavLink to={'/user-switch'}
                             className="navigation-button-content user"
                             activeStyle={activeStyle}>
                        <div className="navigation-button user">
                            사용자 전환
                        </div>
                    </NavLink>
                </div>
                {button}
            </div>
        )
    }
}

export default LeftSide;