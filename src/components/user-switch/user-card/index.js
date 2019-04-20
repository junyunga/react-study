import React, {Component} from 'react';
import './index.scss';

class UserCard extends Component {
    render() {
        return (
            <div className="user-card-container">
                <div className="user-card-content">
                    <div className="user-image-wrapper">
                        <div className="user-image">

                        </div>
                    </div>
                    <div className="user-info-wrapper">
                        <div className="user-info">
                            개발팀
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default UserCard;