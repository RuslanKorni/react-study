// import Counter from './Counter/Counter';
// import Dropdown from './Dropdown/Dropdown';
// import ColorPicker from './Colopicker/Colopicker';
// import options from '../configs/options.json';
import React, { Component } from 'react';
import TodoList from './TodoList/TodoList';
import initialTodos from '../configs/todos.json';
// import FormList from './FormList/FormList';
import Modal from './Modal/Modal';

class App extends Component {
  state = {
    todos: initialTodos,
    showModal: false,
  };

  //* Функция для получения данных с формы, данные я получаю на момент сабмита

  formSubmitHandler = data => {
    console.log(data);
  };

  deleteTodo = todoId => {
    this.setState(prevState => ({
      todos: prevState.todos.filter(todo => todo.id !== todoId),
    }));
  };

  showToggleModal = () => {
    this.setState(state => ({
      showModal: !state.showModal,
    }));
  };

  render() {
    const { todos, showModal } = this.state;
    // const totalTodoCount = todos.length;
    // const completedTodo = todos.reduce((acc, todo) => (todo.completed ? acc + 1 : acc), 0,)
    return (
      <div>
        <button type="button" onClick={this.showToggleModal}>
          Open modal
        </button>
        {showModal && (
          <Modal onClose={this.showToggleModal}>
            <h1>Hello i am children</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
              recusandae ipsum eveniet quod totam, quibusdam porro animi nam
              dolores suscipit iusto deserunt labore? Nobis ducimus fugiat
              facilis ratione quasi est!
            </p>
            <button type="button" onClick={this.showToggleModal}>
              X
            </button>
          </Modal>
        )}
        {/* <FormList onSubmit={this.formSubmitHandler}/> */}
        {/* <Counter initialValue={0}/> */}
        {/* <Dropdown/> */}
        {/* <ColorPicker options={options}/> */}
        {/* <div>
  <p>Общее кол-во: {totalTodoCount} </p>
  <p>Кол-во выполненых: {completedTodo}</p>
</div>

        <TodoList todos={todos} onDeleteTodo={this.deleteTodo}/> */}
      </div>
    );
  }
}

export default App;
