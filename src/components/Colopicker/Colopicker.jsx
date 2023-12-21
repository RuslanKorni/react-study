import React, { Component } from 'react';
import {
  CustomContainer,
  Title,
  OptionsContainer,
  Custom,
} from './Colopicker.styled';

class ColorPicker extends Component {
  state = {
    activeOptionIdx: 0,
  };

  setActiveIdx = (index) => {
this.setState({activeOptionIdx: index})
  }

  render() {
    return (
      <CustomContainer>
        <Title>Color Picker</Title>
        <OptionsContainer>
          {this.props.options.map(({ label, color }, index) => {
            return (
              <Custom
                key={label}
                style={{
                  backgroundColor: color,
                }}
                className={index === this.state.activeOptionIdx ? 'active' : ''}
                onClick={() => this.setActiveIdx(index)}
              ></Custom>
            );
          })}
        </OptionsContainer>
      </CustomContainer>
    );
  }
}

export default ColorPicker;
