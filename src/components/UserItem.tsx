import React from 'react';
import { IUser } from '../types/types';

interface IComponentProps {
  user: IUser;
  onClick: (iser: IUser) => void;
}

const UserItemComponent: React.FC<IComponentProps> = ({ user, onClick }) => {
  return (
    <div style={{ padding: 15, border: '1px solid gray' }} onClick={() => onClick(user)}>
      {user.id} {user.name} проживает в городе {user.address.city} по улице {user.address.street}
    </div>
  );
};

export const UserItem = UserItemComponent;
