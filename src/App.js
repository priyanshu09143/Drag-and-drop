import React, { useState } from 'react';
import './App.css';

function App() {
  const [tasks, setTasks] = useState([
    { id: 1, name: 'task1', status: 'todo' },
    { id: 2, name: 'task2', status: 'todo' },
    { id: 3, name: 'task3', status: 'todo' },
    { id: 4, name: 'task4', status: 'todo' },
    { id: 5, name: 'task5', status: 'todo' },
    { id: 6, name: 'task6', status: 'todo' },
  ]);

  const handleDragStart = (e, taskId) => {
    e.dataTransfer.setData('taskId', taskId.toString());
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e, status) => {
    e.preventDefault();
    const taskId = Number(e.dataTransfer.getData('taskId'));
    const updatedTasks = tasks.map((task) =>
      task.id === taskId ? { ...task, status: status } : task
    );
    setTasks(updatedTasks);
  };

  const renderTasks = (status) => {
    return tasks
      .filter((task) => task.status === status)
      .map((task) => (
        <div
          key={task.id}
          className='task'
          draggable
          onDragStart={(e) => handleDragStart(e, task.id)}
        >
          <p>{task.name}</p>
        </div>
      ));
  };

  return (
    <div className='container'>
      <div>
        <h1>Tasks</h1>
        <div
          id='todo'
          className='box'
          onDragOver={handleDragOver}
          onDrop={(e) => handleDrop(e, 'todo')}
        >
          {renderTasks('todo')}
        </div>
      </div>



      <div>
        <h1>Today</h1>
        <div
          id='today'
          className='box'
          onDragOver={handleDragOver}
          onDrop={(e) => handleDrop(e, 'today')}
        >
          {renderTasks('today')}
        </div>
      </div>



      <div>
        <h1>Tomorrow</h1>
        <div
          id='tomorrow'
          className='box'
          onDragOver={handleDragOver}
          onDrop={(e) => handleDrop(e, 'tomorrow')}
        >
          {renderTasks('tomorrow')}
        </div>
      </div>


      <div>
        <h1>This Week</h1>
        <div
          id='this'
          className='box'
          onDragOver={handleDragOver}
          onDrop={(e) => handleDrop(e, 'this')}
        >
          {renderTasks('this')}
        </div>
      </div>


      <div>
        <h1>Next Week</h1>
        <div
          id='next'
          className='box'
          onDragOver={handleDragOver}
          onDrop={(e) => handleDrop(e, 'next')}
        >
          {renderTasks('next')}
        </div>
      </div>


    </div>
  );
}

export default App;
