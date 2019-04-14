import React, {Component} from 'react';
import {Link} from "react-router-dom";
import './chooseMenu.scss';

class ChooseMenu extends Component {
    render() {
        return(
            <div className="choose-menu">
                <h1 className="title">업무선택</h1>
                <div className="card-container">
                    <div className="department-row">
                        <div className="department-card">
                            <Link className="link-wrapper" to="/product">생산</Link>
                        </div>
                        <div className="department-card">
                            <Link className="link-wrapper" to="/sale">영업</Link>
                        </div>
                    </div>
                    <div className="department-row">
                        <div className="department-card">
                            <Link className="link-wrapper" to="/quality">품질</Link>
                        </div>
                        <div className="department-card">
                            <Link className="link-wrapper" to="/purchase">외주/구매</Link>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ChooseMenu;