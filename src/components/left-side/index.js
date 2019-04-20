import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import './index.scss';
import Button from 'core/components/button';

class LeftSide extends Component {
    render() {
        const activeStyle = {
            color: 'red',
            backgroundColor: 'blue'
        };


        /**
         * 라우터 명칭은 변경 하고 싶으면 변경하시길
         * @type {{route: string, title: string}[]}
         */
        const MenuList = [
            {
                title: '작업지시',
                route: '/product/workOrder'
            },
            {
                title: '작업현황',
                route: '/product/workList'
            },
            {
                title: '자재투입',
                route: '/product/material-insert'
            }
        ];

        const userSwitch = () => {
            return (
                <div className="navigation-button-wrapper">
                    <NavLink to={'user-switch'} className="navigation-button-content">
                        <div className="navigation-button user">
                            사용자 전환
                        </div>
                    </NavLink>
                </div>
            );
        };

        const button = MenuList.map((value, index) => {
            return (
                <div className="navigation-button-wrapper" key={index}>
                    <NavLink to={`${value.route}`}  className="navigation-button-content">
                        <div className="navigation-button" >{value.title}</div>
                    </NavLink>
                </div>
            );
        });

        return (
            <div className="left-side">
                {userSwitch()}
                {button}
            </div>
        )
    }
}

export default LeftSide;