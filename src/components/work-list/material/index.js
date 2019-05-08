import React, {Component} from 'react';
import './index.scss';

import Bar from 'core/components/graph/bar';

export default class Material extends Component {
    render() {
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
                            <Bar/>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}