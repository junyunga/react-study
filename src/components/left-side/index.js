import React, {Component} from 'react';
import './index.scss';
import {NavLink} from 'react-router-dom';
import Button from 'core/components/button';

class LeftSide extends Component {
    render() {
        const activeStyle = {
            color: 'red',
            backgroundColor: 'blue'
        }


        /**
         * 라우터 명칭은 변경 하고 싶으면 변경하시길
         * @type {{route: string, title: string}[]}
         */
        const MenuList = [
            {
                title: '작업지시',
                route: 'workOrder'
            },
            {
                title: '작업현황',
                route: 'workList'
            },
            {
                title: '자재투입',
                route: 'input'
            }
        ];

        const button = MenuList.map((value, index) => {
            console.log(value)
            return <NavLink to={`${value.route}`} key={value.title}>{value.title}</NavLink>;
        })

        return (
            <div className="left-side">
                {button}
            </div>
        )
    }
}

export default LeftSide;