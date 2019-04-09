import React, { Component } from 'react';
import './ColorPicker.scss';

class ColorPicker extends Component {

    render() {
        const { colors } = this.props;

        const TestComponent = ({ value, backgroud }) => <button type="button"
            className="color-button"
            style={{ backgroundColor: backgroud }}>{value}</button>;

        const colorList = colors.map((color, index) => (
            <TestComponent key={index}
                backgroud={color.colorCode}
                value={color.colorCode} />
        ));

        return (
            <div className="color-select">
                <div className="color-select-title">Color Picker</div>
                <div className="color-select-contents">
                    {colorList}
                </div>
            </div>
        )

    }
}

export default ColorPicker;