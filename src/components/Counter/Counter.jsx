import React, { Component } from 'react';
import Control from './Controls';
import { CounterBlock, Value } from './Counter.styled';

class Counter extends Component {
static defauldProps = {
    initialValue: 0,
}

  state = {
    value: this.props.initialValue,
  };

  handleIncrement = () => {
    this.setState(prevState => {
      return {
        value: prevState.value + 1,
      };
    });
  };

  handleDecrement = () => {
    this.setState(prevState => {
      return {
        value: prevState.value - 1,
      };
    });
  };

  render() {
    return (
      <CounterBlock>
        <Value>{this.state.value}</Value>

        <Control
          onIncrement={this.handleIncrement}
          onDecrement={this.handleDecrement}
        />
        {/* <Controls>
          <Button
            type="button"
            onClick={this.handleIncrement}
          >
            Увеличить на 1
          </Button>
          <Button
            type="button"
            onClick={this.handleDecrement}
          >
            Уменьшить на 1
          </Button>
        </Controls> */}
      </CounterBlock>
    );
  }
}

export default Counter;
