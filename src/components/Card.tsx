import React, { FC, useState } from 'react';

export enum CardVariant {
  outlined = 'outlined',
  primary = 'primary',
}

interface IComponentProps {
  width: string;
  height: string;
  children?: React.ReactNode;
  variant: CardVariant;
}

const CardComponent: FC<IComponentProps> = ({
  width,
  height,
  children,
  variant,
}) => {
  const [state, setState] = useState<number>(0);

  return (
    <div
      style={{
        width,
        height,
        border: variant === CardVariant.outlined ? '1px solid gray' : 'none',
        background: variant === CardVariant.primary ? 'lightgray' : '',
      }}
    >
      {children}
    </div>
  );
};

export const Card = CardComponent;
