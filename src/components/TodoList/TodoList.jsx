import React from 'react';
import {List, Item, Text, Button} from './TodoList.styled';

const TodoList = ({ todos, onDeleteTodo}) => {
  return (
    <List>
      {todos.map(({ id, text }) => (
        <Item key={id}>
          <Text>{text}</Text>
          <Button type='button' onClick={() => onDeleteTodo(id)}>Удалить</Button>
        </Item>
      ))}
    </List>
  );
};

export default TodoList;
