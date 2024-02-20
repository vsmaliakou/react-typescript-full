import React, { FC } from 'react';

interface IComponentProps<T> {
  items: T[];
  renderItem: (item: T) => React.ReactNode;
}

export default function List<T>(props: IComponentProps<T>) {
  return (
    <div>
      {props.items.map(props.renderItem)}
    </div>
  );
};

// export const List: <T>(props: IComponentProps<T>) => React.ReactElement = props => {
//   return (
//     <div>
//       {props.items.map(props.renderItem)}
//     </div>
//   );
// };

// export const List = <T,>(props: IComponentProps<T>) => {
//   return (
//     <div>
//       {props.items.map(props.renderItem)}
//     </div>
//   );
// };
