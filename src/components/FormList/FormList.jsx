import React, { Component } from 'react';

const initialState = {
  name: '',
  tag: '',
};
class FormList extends Component {
  state = {
    name: '',
    tag: '',
  };

  hendleInputChange = e => {
    this.setState({
      [e.currentTarget.name]: e.currentTarget.value,
    });
  };

  hemdleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state);

    this.reset();
  };
  //!Два обработчика на одинаковые событи эт не оч. хорошо

  // hendleNameChange = e => {
  //   console.log(e.currentTarget.value);
  //   this.setState({ name: e.currentTarget.value });
  // };

  // hendleTagChange = e => {
  //   this.setState({ tag: e.currentTarget.value });
  // };
  //! Очищаем инпут после сабмита формы
  reset = () => {
    this.setState(initialState);
  };

  render() {
    return (
      <form onSubmit={this.hemdleSubmit}>
        <label>
          Имя
          <input
            name="name"
            type="text"
            value={this.state.name}
            onChange={this.hendleInputChange}
          />
        </label>
        <label>
          Прозвище
          <input
            name="tag"
            type="text"
            value={this.state.tag}
            onChange={this.hendleInputChange}
          />
        </label>
        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default FormList;
