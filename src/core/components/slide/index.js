import React, {Component, Fragment} from 'react';
import './index.scss';

class Slide extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pageSize: this.props.pageSize || 3,
            direction: this.props.direction || 'horizontal',
        }
    }

    render() {
        let contents;
        if (this.state.direction === 'horizontal') {
            contents =
                <Fragment>
                    <div className="horizontal-controls">
                        <button type="button" className="control-button">
                            <i className="material-icons">
                                arrow_left
                            </i>
                        </button>
                    </div>
                    <div className="slide-content">
                        {this.props.children}
                    </div>
                    <div className="horizontal-controls">
                        <button type="button" className="control-button">
                            <i className="material-icons">
                                arrow_right
                            </i>
                        </button>
                    </div>
                </Fragment>;
        } else {
            contents = <div>수평은 준비중</div>;
        }

        return (
            <div className={`slide ${this.state.direction === 'horizontal' ? 'horizontal' : 'vertical'}`}>
                {contents}
            </div>
        );
    }
}

export default Slide;