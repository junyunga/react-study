import React, {Component} from 'react';
import './index.scss';


class UserPassword extends Component {
    render() {
        const {passwordDDisplay, title} = this.props;
        console.log(title)
        const displayState = {
            _ui: ''
        };
        const password = [
            {
                id: 0,
                value: ''
            },
            {
                id: 1,
                value: ''
            },
            {
                id: 2,
                value: ''
            },
            {
                id: 3,
                value: ''
            }
        ];

        const passwordContent = password.map((value) => {
            return (
                <input type="text" className="password" key={value.id} readOnly/>
            );
        });

        if (passwordDDisplay) {
            displayState._ui = <div className="user-password--main-display">
                <div className="user-info">
                    <div>{title}</div>
                </div>
                <div className="password-wrapper">
                    {passwordContent}
                </div>
            </div>;

        } else {
            displayState._ui = <div className="user-password--default-display">사용자를 선택해주세요.</div>;
        }

        return (
            <div className="user-password">
                {displayState._ui}
            </div>
        );
    }
}

export default UserPassword;