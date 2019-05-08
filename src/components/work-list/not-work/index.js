import React, { Component } from 'react';
import './index.scss';

export default class NotWork extends Component {
    render() {
        return (
            <div className="not-work">
                <div className="not-work-container">
                    <div className="not-work-content">
                        <div className="not-work-content__header">
                            <div className="header__title">
                                비가동 등록 여부
                            </div>
                            <div className="header__legend">
                            </div>
                        </div>
                        <div className="not-work-content__body">
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}