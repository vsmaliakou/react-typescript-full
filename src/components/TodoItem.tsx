import React from 'react';
import { ITodo } from '../types/types';

interface IComponentProps {
  todo: ITodo;
}

const TodoItemComponent: React.FC<IComponentProps> = ({ todo }) => {
  return (
    <div>
      <input type="checkbox" checked={todo.completed} />
      {todo.id} {todo.title}
    </div>
  );
};

export const TodoItem = TodoItemComponent;
