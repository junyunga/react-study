import React, {Component} from 'react';
import {Link} from "react-router-dom";

class ChooseMenu extends Component {
    render() {
        return(
            <div className="choose-menu">
                <h1>업무선택</h1>
                <div className="card-container">
                    <div className="deportment-row">
                        <div className="deportment-card"><Link to="/product">생산</Link></div>
                        <div className="deportment-card"><Link to="/sale">영업</Link></div>
                    </div>
                    <div className="deportment-row">
                        <div className="deportment-card"><Link to="/quality">품질</Link></div>
                        <div className="deportment-card"><Link to="/purchase">외주/구매</Link></div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ChooseMenu;