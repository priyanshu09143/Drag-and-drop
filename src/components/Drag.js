import React from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

const Task = ({ id, text, onDragStart }) => {
  return (
    <DndProvider backend={HTML5Backend}>
      <li draggable onDragStart={onDragStart} data-id={id}>
        {text}
      </li>
    </DndProvider>
  );
};

export default Task;
