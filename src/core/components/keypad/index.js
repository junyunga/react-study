import React, {Component} from 'react';
import './index.scss';


class KeyPad extends Component {
    render() {

        const {keypadActive, password} = this.props;
        return (
            <div className="keypad-container">
                <div className={`key ${keypadActive ? 'active' : ''}`} onClick={() => password(1)}>1</div>
                <div className={`key ${keypadActive ? 'active' : ''}`} onClick={() => password(2)}>2</div>
                <div className={`key ${keypadActive ? 'active' : ''}`} onClick={() => password(3)}>3</div>
                <div className={`key ${keypadActive ? 'active' : ''}`} onClick={() => password(4)}>4</div>
                <div className={`key ${keypadActive ? 'active' : ''}`} onClick={() => password(5)}>5</div>
                <div className={`key ${keypadActive ? 'active' : ''}`} onClick={() => password(6)}>6</div>
                <div className={`key ${keypadActive ? 'active' : ''}`} onClick={() => password(7)}>7</div>
                <div className={`key ${keypadActive ? 'active' : ''}`} onClick={() => password(8)}>8</div>
                <div className={`key ${keypadActive ? 'active' : ''}`} onClick={() => password(9)}>9</div>
                <div className={`key ${keypadActive ? 'active' : ''}`} onClick={() => password('back')}>
                    <i className={`material-icons ${keypadActive ? 'active' : ''}`}>
                        keyboard_backspace
                    </i>
                </div>
                <div className={`key ${keypadActive ? 'active' : ''}`} onClick={() => password(0)}>0</div>
                <div className={`key ${keypadActive ? 'active' : ''}`} onClick={() => password('login')}>
                    <i className="material-icons">
                        keyboard_return
                    </i>
                </div>
            </div>
        );

    }
}

export default KeyPad;