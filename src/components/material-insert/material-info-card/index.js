import React from 'react';
import './index.scss';


const MaterialInfoCard = ({property, value}) => {
    const labelList = {
        'kangjong' : '강종',
        'kongjung' : '공정',
        'dia' : '규격',
        'perWt' : '단중'
    };

    return (
        <div className="material-info-card">
            <div className="material-info-card-header">
                {labelList[property]}
            </div>
            <div className="material-info-card-content">
                {value}
            </div>
        </div>
    );
};

export default MaterialInfoCard;