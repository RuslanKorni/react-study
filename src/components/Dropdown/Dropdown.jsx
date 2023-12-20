import React, { Component } from 'react';
import {Drop, Button, Menu } from './Dropdown.styled';

class Dropdown extends Component {
    state = {
        visible: false,
    }

    show = () => {
        this.setState({
            visible: true,
        })
    }

    hide = () => {
        this.setState({
            visible: false,
        })
    }

    render() {
return (
    <Drop>
        <Button type='button' onClick={this.show}>Показать</Button>
        <Button type='button' onClick={this.hide}>Скрыть</Button>
        {this.state.visible && (<Menu>Выпадающее меню</Menu>)}
    </Drop>
)
    }
}
export default Dropdown;