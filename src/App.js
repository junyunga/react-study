import React, { Component } from 'react';
import './App.css';
import TodoListTemplate from './components/TodoListTemplate';
import Form from './components/Form';
import TodoItemList from './components/TodoItemList';

class App extends Component {
  id = 3



  state = {
    input: '',
    todos: [
      { id: 0, text: '리액트 소개', checked: false },
      { id: 1, text: '리액트 소개', checked: true },
      { id: 2, text: '리액트 소개', checked: false }
    ]
  }

  colors = [
    { colorIndex: 0, colorCode: `#${Math.round(Math.random() * 0xffffff).toString(16)}` },
    { colorIndex: 1, colorCode: `#${Math.round(Math.random() * 0xffffff).toString(16)}` },
    { colorIndex: 2, colorCode: `#${Math.round(Math.random() * 0xffffff).toString(16)}` },
    { colorIndex: 3, colorCode: `#${Math.round(Math.random() * 0xffffff).toString(16)}` },
    { colorIndex: 4, colorCode: `#${Math.round(Math.random() * 0xffffff).toString(16)}` }
  ];

  handleChange = (e) => {
    this.setState({
      input: e.target.value
    })
  }

  handleCreate = () => {
    const { input, todos } = this.state;
    this.setState({
      input: '',
      todos: todos.concat({
        id: this.id++,
        text: input,
        checked: false
      })
    })
  }

  handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      this.handleCreate();
    }
  }

  handleToggle = (id) => {
    const { todos } = this.state
    const index = todos.findIndex(todo => todo.id === id);
    const selected = todos[index];


    this.setState({
      todos: [
        ...todos.slice(0, index),
        {
          ...selected,
          checked: !selected.checked
        },
        ...todos.slice(index + 1, todos.length)
      ]
    })
  }

  handleRemove = (id) => {
    const { todos } = this.state;
    this.setState({
      todos: todos.filter(todo => todo.id !== id)
    });
  }

  render() {
    const { input, todos } = this.state;
    const colors = [...this.colors];

    const {
      handleChange,
      handleCreate,
      handleKeyPress,
      handleToggle,
      handleRemove
    } = this;

    return (
      <TodoListTemplate form={(
        <Form
          value={input}
          onKeyPress={handleKeyPress}
          onCreate={handleCreate}
          onChange={handleChange}
        />
      )}
        colors={colors}>
        <TodoItemList todos={todos} onToggle={handleToggle} onRemove={handleRemove} />
      </TodoListTemplate>
    );
  }
}

export default App;
