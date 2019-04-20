import React, {Component} from 'react';
import Modal from 'react-responsive-modal';
import './index.scss';


class MaterialInsertCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modalIsOpen: false,
            data: this.props.data,
            isInserted: this.props.isInserted
        };
    }

    openModal = () => {
        this.setState({modalIsOpen: true});
    };

    closeModal = () => {
        this.setState({modalIsOpen: false});
    };

    render() {
        const {data, isInserted} = this.state;
        const modalIsOpen = this.state.modalIsOpen;

        return (
            <div className={`material-insert-card ${!isInserted && 'available'}`}>
                <div className="insert-card-header">
                    <div className="header-title">
                        {data.inLot}
                    </div>
                    <div className="return-button-wrapper">
                        {isInserted && <div onClick={this.openModal}
                                            className="return-button">반출</div>}
                    </div>
                </div>
                <div className="insert-card-content">
                    <div className="content-row">
                        <div className="property">{isInserted ? '투입량' : '입고량'}</div>
                        <div className="value">{data.inAmt} {data.inUnit}</div>
                    </div>
                    <div className="content-row">
                        <div className="property">잔량</div>
                        <div className="value">{data.restAmt} {data.inUnit}</div>
                    </div>
                    <div className="content-row">
                        <div className="property">구입처</div>
                        <div className="value">{data.companyName}</div>
                    </div>
                </div>
                <Modal open={modalIsOpen}
                       onClose={this.closeModal}
                       center
                >
                    <h2>모달테스트임</h2>
                </Modal>
            </div>
        );
    }
}

export default MaterialInsertCard;