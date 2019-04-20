import React, {Component} from 'react';
import './index.scss';

class UserCard extends Component {
    shouldComponentUpdate(nextProps, nextState, nextContext) {
        return this.props.active !== nextProps.active;
    }

    render() {
        const {id, name, active, onClick} = this.props;

        return (
            <div className="user-card-container" onClick={() => onClick(id)}>
                <div className={`user-card-content ${active ? 'active' : ''}`}>
                    <div className="user-image-wrapper">
                        <div className="user-image">

                        </div>
                    </div>
                    <div className="user-info-wrapper">
                        <div className="user-info">
                            {name}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default UserCard;