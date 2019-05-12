import React from 'react';
import './index.scss';
import Material from 'components/work-list/material';
import Production from 'components/work-list/production';
import NotWork from 'components/work-list/not-work';
import Card from 'core/components/card';

const WorkList = () => {
    return (
        <div className="work-list">
            <div className="card-wrapper">
                <Card component={<Material />} />
            </div>

            <div className="card-wrapper">
                <Card component={<Production />} />

            </div>
            <div className="card-wrapper">
                <Card component={<NotWork />} />
            </div>
            <div className="card-wrapper">
                <Card component={<Production />} />
            </div>
            <div className="card-wrapper">
                <Card component={<Production />} />
            </div>
        </div>
    );
}

export default WorkList;
