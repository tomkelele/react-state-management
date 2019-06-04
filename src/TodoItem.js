import React from 'react';
import hoc from "./hoc";
import TodoStore from "./TodoStore";

class TodoItem extends React.Component {
  state = {

  };

  handleChange = (event, key) => {
    TodoStore.edit(key, event.target.checked);
  };

  handleDoubleClick = (event, key) => {
    console.log(TodoStore.getItem(key));
  };

  render() {
    return <div>
      <span onDoubleClick={event => this.handleDoubleClick(event, this.props.id)}>
        {this.props.item.todo}
      </span>
      <input
        type='checkbox'
        onChange={event => this.handleChange(event, this.props.id)}
        checked={this.props.item.resolve}
      />
    </div>
  }
}

export default hoc(TodoItem, TodoStore);