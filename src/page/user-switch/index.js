import React, {Component} from 'react';
import './index.scss';
import UserGroup from 'components/user-switch/user-group/';


class UserSwitch extends Component {
    render() {
        return (
            <div className="user-switch-wrapper">
                <div className="user-switch">
                    <div className="user-switch--container">
                        <div className="user-switch-content--wrapper">
                            <div className="user-switch-content-group--wrapper">
                                <UserGroup/>
                            </div>
                            <div className="user-switch-content-list---wrapper">

                            </div>

                        </div>
                        <div className="user-switch-password--wrapper">

                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default UserSwitch;