import React, {Component} from 'react';
import './index.scss';

class UserGroup extends Component {
    userGroups = [
        {
            key: 0,
            name: '그룹 1팀',
        },
        {
            key: 1,
            name: '그룹 2팀',
        },
        {
            key: 2,
            name: '그룹 3팀',
        },
        {
            key: 3,
            name: '그룹 4팀',
        }
    ];


    render() {
        const userGroups = this.userGroups.map((value) => {
            return (
                <div className="group-button" key={value.key}>{value.name}</div>
            );
        });
        return (
            <div className="user-group">
                {userGroups}
            </div>
        );
    }
}

export default UserGroup;