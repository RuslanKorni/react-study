// import Counter from './Counter/Counter';
// import Dropdown from './Dropdown/Dropdown';
// import ColorPicker from './Colopicker/Colopicker';
// import options from '../configs/options.json';
import React, { Component } from 'react';
import TodoList from './TodoList/TodoList';
import initialTodos from '../configs/todos.json';

class App extends Component {
  state = {
    todos: initialTodos,
  };

  deleteTodo = (todoId) => {
this.setState(prevState => ({
  todos: prevState.todos.filter(todo => todo.id !== todoId),
}))
  }

  render() {
    const { todos } = this.state;
const totalTodoCount = todos.length;
const completedTodo = todos.reduce((acc, todo) => (todo.completed ? acc + 1 : acc), 0,)
    return (
      <div>
        {/* <Counter initialValue={0}/> */}
        {/* <Dropdown/> */}
        {/* <ColorPicker options={options}/> */}
<div>
  <p>Общее кол-во: {totalTodoCount} </p>
  <p>Кол-во выполненых: {completedTodo}</p>
</div>

        <TodoList todos={todos} onDeleteTodo={this.deleteTodo}/>
      </div>
    );
  }
}

export default App;
