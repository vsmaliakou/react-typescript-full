import React, { ChangeEvent, DragEvent, MouseEvent, useRef, useState } from 'react';

const EventExampleComponent: React.FC = () => {
  const [value, setValue] = useState<string>('');
  const [isDrag, setIsDrag] = useState<boolean>(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const clickHandler = (e: MouseEvent<HTMLButtonElement>) => {
    console.log(inputRef.current?.value);
  };

  const dragHandler = (e: DragEvent<HTMLDivElement>) => {
    console.log('drag');
  };
  
  const dropHandler = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDrag(false);
    console.log('drop');
  };

  const leaveHandler = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDrag(false);
  };

  const dragWithPreventHandler = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDrag(true);
  };

  return (
    <div>
      <input
        type="text"
        value={value}
        onChange={changeHandler}
        placeholder="Управляемый"
      />
      <input
        ref={inputRef}
        type="text"
        placeholder="Неуправляемый"
      />
      <button onClick={clickHandler}>Кнопка</button>
      <div
        onDrag={dragHandler}
        draggable
        style={{ width: 200, height: 200, background: 'red' }}
      />
      <div
        onDrop={dropHandler}
        onDragLeave={leaveHandler}
        onDragOver={dragWithPreventHandler}
        style={{ width: 200, height: 200, background: isDrag ? 'blue' : 'red', marginTop: 15 }}
      />
    </div>
  );
};

export const EventExample = EventExampleComponent;
