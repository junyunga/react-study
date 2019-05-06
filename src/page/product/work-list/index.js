import React, {Component} from 'react';
import './index.scss';
import Material from 'components/work-list/material';
import Production from 'components/work-list/production';
import NotWork from 'components/work-list/not-work';

export default class WorkList extends Component {
    render() {
        return (
            <div className="work-list">
                <div className="wrapper">
                    <Material/>
                </div>
                <div className="wrapper">
                    <Production/>
                </div>
                <div className="wrapper">
                    <NotWork/>
                </div>
                <div className="wrapper">
                    <Material/>
                </div>

            </div>
        );
    }
}
