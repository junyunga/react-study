import React, {Component} from 'react';
import MaterialInfoCard from './material-info-card';
import MaterialInsertCard from './material-insert-card';
import './index.scss';

class MaterialInsert extends Component {
    render() {
        const material = {
            'kangjong': 'SWCH10A',
            'kongjung': '단조 성형',
            'dia': '23.4 * 10 * 20',
            'perWt': '80g',
        };
        const availableMaterials = [{
            inLot: '201901-01',
            inAmt: 200,
            inUnit: 'KG',
            restAmt: 200,
            companyName: '새아특수강',
        }, {
            inLot: '201901-01',
            inAmt: 300,
            inUnit: 'KG',
            restAmt: 300,
            companyName: '새아특수강',
        }, {
            inLot: '201901-03',
            inAmt: 400,
            inUnit: 'KG',
            restAmt: 200,
            companyName: '새아특수강',
        }];

        const insertedMaterials = [{
            inLot: '201901-04',
            inAmt: 200,
            inUnit: 'KG',
            restAmt: 200,
            companyName: '새아특수강',
        }];
        const materialInfoCards = Object.keys(material).map((key, index) => {
            return (
                <MaterialInfoCard key={index}
                                  property={key}
                                  value={material[key]}/>
            );
        });

        const availableCards = availableMaterials.map((material, index) => {
            return (
                <MaterialInsertCard key={index}
                                    data={material}
                                    isInserted={false}/>
            );
        });

        const insertedCards = insertedMaterials.map((material, index) => {
            return (
                <MaterialInsertCard key={index}
                                    data={material}
                                    isInserted={true}/>
            );
        });

        return (
            <div className="material-insert">
                <div className="base-info">
                    <div className="base-header">자재 기본정보</div>
                    <div className="base-content column">
                        {materialInfoCards}
                    </div>
                </div>
                <div className="material-list">
                    <div className="available-list">
                        <div className="available-header">
                            투입 가능 자재 현황
                        </div>
                        <div className="available-content row">
                            {availableCards}
                        </div>
                    </div>
                    <div className="inserted-list">
                        <div className="inserted-header">투입된 자재 현황</div>
                        <div className="inserted-content row">
                            {insertedCards}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default MaterialInsert;