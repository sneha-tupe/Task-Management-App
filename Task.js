// src/components/Task.js
import React from 'react';

const Task = ({ task, onDelete, onToggle }) => {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', margin: '10px 0' }}>
      <span
        onClick={() => onToggle(task.id)}
        style={{
          textDecoration: task.completed ? 'line-through' : 'none',
          cursor: 'pointer',
        }}
      >
        {task.title}
      </span>
      <button onClick={() => onDelete(task.id)}>Delete</button>
    </div>
  );
};

export default Task;