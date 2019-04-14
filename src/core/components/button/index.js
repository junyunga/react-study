import React, {Component} from 'react';
import './index.scss';

class Button extends Component {
    state = {
        active: ''
    };

    handleClick = () => {
        this.setState(
            (active) => ({
                active: 'active'
            })
        )
    };

    render() {

        const {title} = this.props;

        return (
            <div className="button-container">
                <button type="button" className={`default-button`}
                        onClick={this.handleClick}>
                    {title}
                </button>
            </div>
        )
    }
}

export default Button;