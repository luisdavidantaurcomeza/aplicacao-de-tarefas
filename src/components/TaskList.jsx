import React from 'react';
import TaskItem from './TaskItem';
import '../styles/TaskList.css';

const TaskList = ({ tasks }) => {
  if (tasks.length === 0) {
    return (
      <div className="empty-state">
        <p>📭 Nenhuma tarefa encontrada!</p>
        <p>Comece adicionando uma nova tarefa.</p>
      </div>
    );
  }

  return (
    <div className="task-list">
      {tasks.map(task => (
        <TaskItem key={task.id} task={task} />
      ))}
    </div>
  );
};

export default TaskList;