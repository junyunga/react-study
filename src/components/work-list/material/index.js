import React, { Component } from 'react';
import './index.scss';

import Bar from 'core/components/graph/bar';

export default class Material extends Component {
    render() {
        const barData = [{
            index: 0,
            bg: '#ffb3a5',
            data: '50%'
        }, {
            index: 1,
            bg: '#a3b8d5',
            data: '80%'
        }, {
            index: 2,
            bg: '#ffb3a5',
            data: '70%'
        }, {
            index: 3,
            bg: '#a3b8d5',
            data: '30%'
        }];
        return (
            <div className="material">
                <div className="material-container">
                    <div className="material-content">
                        <div className="material-content__header">
                            <div className="header__title">
                                자재 잔량
                            </div>
                            <div className="header__legend">
                                *안전재고량
                            </div>
                        </div>
                        <div className="material-content__body">
                            <Bar data={barData} />
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}