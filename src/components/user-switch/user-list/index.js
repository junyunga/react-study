import React, {Component} from 'react';
import './index.scss';
import UserCard from '../user-card/';


class UserList extends Component {
    render() {
        return (
            <div className="user-list">
                <div className="user-card-wrapper">
                    <UserCard/>
                </div>
                <div className="user-card-wrapper">
                    <UserCard/>
                </div>
                <div className="user-card-wrapper">
                    <UserCard/>
                </div>
                <div className="user-card-wrapper">
                    <UserCard/>
                </div>
                <div className="user-card-wrapper">
                    <UserCard/>
                </div>
                <div className="user-card-wrapper">
                    <UserCard/>
                </div>
                <div className="user-card-wrapper">
                    <UserCard/>
                </div>
                <div className="user-card-wrapper">
                    <UserCard/>
                </div>

            </div>
        );
    }
}

export default UserList