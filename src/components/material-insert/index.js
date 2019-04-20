import React, {Component} from 'react';
import Modal from 'react-responsive-modal';
import MaterialInfoCard from './material-info-card';
import './index.scss';

class MaterialInsert extends Component {
    state = {
        modalIsOpen: false
    };

    openModal = () => {
        this.setState({modalIsOpen: true});
    };

    closeModal = () => {
        this.setState({modalIsOpen: false});
    };

    render() {
        const modalIsOpen = this.state.modalIsOpen;
        const material = {
            'kangjong': 'SWCH10A',
            'kongjung': '단조 성형',
            'dia': '23.4 * 10 * 20',
            'perWt': '80g',
        };
        const materialInfoCard = Object.keys(material).map((key, index) => {
            return (
                <MaterialInfoCard key={index}
                                  property={key}
                                  value={material[key]}/>
            );
        });

        return (
            <div className="material-insert">
                <div className="base-info">
                    <div className="base-header">자재 기본정보</div>
                    <div className="base-content column">
                        {materialInfoCard}
                    </div>
                </div>
                <div className="material-list">
                    <div className="available-list">
                        <div className="available-header">
                            투입 가능 자재 현황
                        </div>
                        <div className="available-content row">
                            <button onClick={this.openModal}>모달 테스트</button>
                            <Modal
                                open={modalIsOpen}
                                onClose={this.closeModal}
                                center
                            >
                                <h2>모달테스트임</h2>
                            </Modal>
                        </div>
                    </div>
                    <div className="inserted-list">
                        <div className="inserted-header">투입된 자재 현황</div>
                        <div className="inserted-content row">자재정보</div>
                    </div>
                </div>
            </div>
        )
    }
}

export default MaterialInsert;