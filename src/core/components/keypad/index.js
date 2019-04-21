import React, {Component} from 'react';
import './index.scss';


class KeyPad extends Component {
    render() {
        return (
            <div className="keypad-container">
                <div className="key">1</div>
                <div className="key">2</div>
                <div className="key">3</div>
                <div className="key">4</div>
                <div className="key">5</div>
                <div className="key">6</div>
                <div className="key">7</div>
                <div className="key">8</div>
                <div className="key">9</div>
                <div className="key"><i className="material-icons">
                    keyboard_backspace
                </i></div>
                <div className="key">0</div>
                <div className="key">로그인</div>
            </div>
        );

    }
}

export default KeyPad;