import React, { Component } from 'react';
import './index.scss';
import Button from 'core/components/button';

class LeftSide extends Component {

    render() {
        const buttonList = ['button-1', 'button-2', 'button-3'];

        const button = buttonList.map((value,index) => {
            return <Button title={value} key={index}/>;
        })

        return (
            <div className="left-side">
                {button}
            </div>
        )
    }
}

export default LeftSide;