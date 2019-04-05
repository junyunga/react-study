import React, { Component } from 'react';
import './TodoItem.css';

class TodoItem extends Component {
    render() {
        const { text, checked, id, onToggole, onRemove } = this.props;

        return (
            <div className="todo-item" onClick={() => ontoggle(id)}>
                <div className="remove" onClick={(e) => {
                    e.stopPropagation();
                    onRemove(id)
                }
                }>x</div>
                <div className={`todo-text ${checked && 'checked'}`}>
                    <div>{text}</div>
                </div>
                {
                    checked && (<div className="check-mark">체크</div>)
                }
            </div>
        )
    }
}

export default TodoItem;