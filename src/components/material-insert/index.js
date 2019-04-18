import React, {Component} from 'react';
import Modal from 'react-responsive-modal';
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
        return (
            <div className="material-insert">
                <div className="base-info">
                    <div className="header">자재 기본정보</div>
                    <div className="content column">
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
                <div className="material-list">
                    <div className="available-list">
                        <div className="header">
                            투입 가능 자재 현황
                        </div>
                        <div className="content row">자재 정보</div>
                    </div>
                    <div className="inserted-list">
                        <div className="header">투입된 자재 현황</div>
                        <div className="content row">자재정보</div>
                    </div>
                </div>
            </div>
        )
    }
}

export default MaterialInsert;