import React, {Component} from 'react';
import hoc from "./hoc";
import TodoStore from "./TodoStore";
import TodoItem from "./TodoItem";

class Todo extends Component {
  handleClick = event => {
    event.preventDefault();
    TodoStore.add({
      todo: this.input.value,
      resolve: false,
    });
  };

  render() {
    return <div>
      {this.props.data.map((item, key) => <TodoItem key={key} id={key} item={item} />)}
      <input type="text" ref={(el) => this.input = el} />
      <button type="button" onClick={event => this.handleClick(event)}>Test</button>
    </div>
  }
}

export default hoc(Todo, TodoStore);