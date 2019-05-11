import React, { Component } from 'react';
import './index.scss';

export default class Bar extends Component {
    render() {
        const { data } = this.props;
        const bar = data.map(e =>

            <div className="bar-content" key={e.index}>
                <div className="bar-head__wrapper" style={{ width: e.safety_stock }}>
                    <div className="bar-head"></div>
                </div>
                <div className="bar-content__outer">
                    <div className="bar-content__inner" style={{ width: e.data, backgroundColor: e.bg }}>
                        <div className="bar-content__innerText">{e.data}</div>
                    </div>
                    <div className="bar-content__innerBar" style={{ width: e.safety_stock }}>
                    </div>
                </div>
            </div>
        );
        return (
            <div className="bar-container">
                {bar}
            </div>
        );
    }
}