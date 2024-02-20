import React, { FC, useEffect, useState } from 'react';
import { ITodo } from '../types/types';
import axios from 'axios';
import List from './List';
import { TodoItem } from './TodoItem';

const TodosPageComponent: FC = () => {
  const [todos, setTodos] = useState<ITodo[]>([]);

  useEffect(() => {
    fetchTodos();
  }, []);

  async function fetchTodos() {
    try {
      const response = await axios.get<ITodo[]>('https://jsonplaceholder.typicode.com/todos?_limit=10');
      setTodos(response.data);
    } catch (error) {
      alert(error);
    }
  }

  return (
    <List
      items={todos}
      renderItem={(todo) => <TodoItem key={todo.id} todo={todo} />}
    />
  );
};

export const TodosPage = TodosPageComponent;
