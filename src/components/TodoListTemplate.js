import React from 'react';
import './TodoListTemplate.css';
import ColorPicker from './ColorPicker'

const TodoListTemplate = ({ form, children, colors }) => {
    return (
        <main className="todo-list-template">
            <div className="title">
                Today List
            </div>
            <section className="form-wrapper">
                {form}
            </section>
            <section className="todos-wrapper">
                {children}
            </section>
            <section className="color-picker">
                <ColorPicker colors={colors} />
            </section>
        </main>
    )
};

export default TodoListTemplate;