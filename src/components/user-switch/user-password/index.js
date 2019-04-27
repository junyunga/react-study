import React, {Component} from 'react';
import './index.scss';


class UserPassword extends Component {
    render() {
        const {passwordDDisplay, title, passwordValue} = this.props;
        const displayState = {
            _ui: ''
        };
        const password = [
            {
                id: 0,
                value: passwordValue[0],
                mask: 'brightness_high',
                active: passwordValue.length === 0 ? true : false
            },
            {
                id: 1,
                value: passwordValue[1],
                mask: 'brightness_high',
                active: passwordValue.length === 1 ? true : false
            },
            {
                id: 2,
                value: passwordValue[2],
                mask: 'brightness_high',
                active: passwordValue.length === 2 ? true : false
            },
            {
                id: 3,
                value: passwordValue[3],
                mask: 'brightness_high',
                active: passwordValue.length === 3 ? true : false

            }
        ];

        const passwordContent = password.map((value) => {
            return (
                <div className={`password ${value.active ? 'border-active' : ''}`} key={value.id}>
                    <i className="material-icons">{value.value ? value.mask : ''}</i></div>
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