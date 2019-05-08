import React, { Component } from 'react';
import './index.scss';

export default class Production extends Component {
    render() {
        return (
            <div className="production">
                <div className="production-container">
                    <div className="production-content">
                        <div className="production-content__header">
                            <div className="header__title">
                                생산 실적 현황
                            </div>
                            <div className="header__legend">
                            </div>
                        </div>
                        <div className="production-content__body">
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}