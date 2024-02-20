import React, { FC, useEffect, useState } from 'react';
import { IUser } from '../types/types';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router';

type UserItemPageParams = {
  id: string;
}

const UserItemPageComponent: FC = () => {
  const [user, setUser] = useState<IUser | null>(null);
  const params = useParams<UserItemPageParams>();
  const navigate = useNavigate();

  useEffect(() => {
    fetchUser();
  }, []);

  async function fetchUser() {
    try {
      const response = await axios.get<IUser>(`https://jsonplaceholder.typicode.com/users/${params.id}`);
      setUser(response.data);
    } catch (error) {
      alert(error);
    }
  }

  return (
    <div>
      <button onClick={() => navigate(-1)}>Back</button>
      <h1>Страница пользователя {user?.name}</h1>
      <div>
        {user?.email}
      </div>
      <div>
        {user?.address.city} {user?.address.street} {user?.address.zipcode}
      </div>
    </div>
  );
};

export const UserItemPage = UserItemPageComponent;
