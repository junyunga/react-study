import React, { Component } from 'react';
import './index.scss';

export default class Card extends Component {
    render() {
        const { component } = this.props;
        return (
            <div className="card-container-wrapper">
                <div className="card-container">
                    <div className="card-content-wrapper">
                        {component}
                    </div>
                </div>
            </div>
        );
    }
}