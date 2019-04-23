import React, {Component} from 'react';
import './index.scss';
import UserGroup from 'components/user-switch/user-group/';
import UserList from 'components/user-switch/user-list/';
import UserPassword from 'components/user-switch/user-password/';
import KeyPad from 'core/components/keypad/';


class UserSwitch extends Component {

    state = {
        userList: [
            {
                id: 0,
                name: '개발 1팀',
                active: false,
            },
            {
                id: 1,
                name: '개발 2팀',
                active: false,
            },
            {
                id: 2,
                name: '개발 3팀',
                active: false,
            },
            {
                id: 3,
                name: '개발 4팀',
                active: false,
            },
            {
                id: 4,
                name: '개발 5팀',
                active: false,
            },
            {
                id: 5,
                name: '개발 6팀',
                active: false,
            },
            {
                id: 6,
                name: '개발 7팀',
                active: false,
            },
            {
                id: 7,
                name: '개발 8팀',
                active: false,
            }
        ],
        password: [
            {
                id: 0,
                value: ''
            },
            {
                id: 0,
                value: ''
            },
            {
                id: 0,
                value: ''
            },
            {
                id: 0,
                value: ''
            }
        ],
        passwordMask: [
            {
                id: 0,
                value: ''
            },
            {
                id: 0,
                value: ''
            },
            {
                id: 0,
                value: ''
            },
            {
                id: 0,
                value: ''
            }
        ],
        passwordDisplay: false,
        passwordDDisplayTitle: '',
        keypadActive: false,
    };

    handleUserCardClick = (id) => {
        const {userList} = this.state;
        const index = userList.findIndex(list => list.id === id);
        const selected = userList[index];

        const changeState = [...userList];

        changeState.forEach((list) => {
            if (list.active) {
                list.active = false;
            }
        });

        changeState[index] = {
            ...selected,
            active: !selected.active
        };

        this.setState({
            userList: changeState,
            passwordDDisplay: true,
            passwordDDisplayTitle: changeState[index]['name'],
            keypadActive: true
        });
    };

    handlePasswordClick = (value) => {
        const {keypadActive} = this.state;
        console.log(this.props)
        if (keypadActive) {
            switch (value) {
                case 'login':
                    this.nextPath('/product');
                default:
                    alert(value)

            }

        }

    };

    nextPath = path => {
        return this.props.history.push(path)
    };

    render() {
        const {userList, passwordDDisplay, passwordDDisplayTitle, keypadActive} = this.state;
        const {
            handleUserCardClick,
            handlePasswordClick,
        } = this;


        return (
            <div className="user-switch-wrapper">
                <div className="user-switch">
                    <div className="user-switch--container">
                        <div className="user-switch-content--wrapper">
                            <div className="user-switch-content-group--wrapper">
                                <UserGroup/>
                            </div>
                            <div className="user-switch-content-list---wrapper">
                                <UserList userList={userList} onClick={handleUserCardClick}/>
                            </div>
                        </div>
                        <div className="user-switch-password--wrapper">
                            <div className="user-switch-password-display--wrapper">
                                <UserPassword passwordDDisplay={passwordDDisplay ? passwordDDisplay : false}
                                              title={passwordDDisplayTitle}/>
                            </div>
                            <div className="user-switch-password-keypad--wrapper">
                                <KeyPad keypadActive={keypadActive} password={handlePasswordClick}/>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default UserSwitch;