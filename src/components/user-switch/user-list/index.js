import React, {Component} from 'react';
import './index.scss';
import UserCard from '../user-card/';


class UserList extends Component {

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        return this.props.userList !== nextProps;
    }

    render() {

        const {userList, onClick} = this.props;
        const list = userList.map(item => {
            return (
                <div className="user-card-wrapper" key={item.id}>
                    <UserCard id={item.id} name={item.name} active={item.active} onClick={onClick}/>
                </div>
            );
        });
        return (
            <div className="user-list">
                {list}
            </div>
        );
    }
}

export default UserList