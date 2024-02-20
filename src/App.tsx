import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { UsersPage } from './components/UsersPage';
import { TodosPage } from './components/TodosPage';
import { NavLink } from 'react-router-dom';
import { UserItemPage } from './components/UserItemPage';
import { TodoItemPage } from './components/TodoItemPage';

function App() {
  return (
    <BrowserRouter>
      <div>
        <div>
          <NavLink to="/users">Пользователи</NavLink>
          <NavLink to="/todos">Список дел</NavLink>
        </div>
        <Routes>
          <Route path="/users" element={<UsersPage />} />
          <Route path="/todos" element={<TodosPage />} />
          <Route path="/users/:id" element={<UserItemPage />} />
          <Route path="/users/:id" element={<TodoItemPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
