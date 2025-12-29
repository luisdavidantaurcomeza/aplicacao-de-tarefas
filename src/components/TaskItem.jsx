import React from 'react';
import { Link } from 'react-router-dom';
import { useTaskContext } from '../context/TaskContext';
import '../styles/TaskItem.css';

const TaskItem = ({ task }) => {
  const { removeTask, editTask } = useTaskContext();

  const handleToggleComplete = () => {
    editTask({
      ...task,
      completed: !task.completed
    });
  };

  const handleDelete = () => {
    if (window.confirm('Tem certeza que deseja deletar esta tarefa?')) {
      removeTask(task.id);
    }
  };

  const getPriorityColor = (priority) => {
    const colors = {
      baixa: '#3498db',
      normal: '#f39c12',
      alta: '#e74c3c'
    };
    return colors[priority] || '#95a5a6';
  };

  return (
    <div className={`task-item ${task.completed ? 'completed' : ''}`}>
      <div className="task-content">
        <input
          type="checkbox"
          checked={task.completed}
          onChange={handleToggleComplete}
          className="task-checkbox"
        />
        
        <div className="task-text">
          <h3 className="task-title">{task.title}</h3>
          {task.description && (
            <p className="task-description">{task.description}</p>
          )}
        </div>

        <span 
          className="priority-badge"
          style={{ backgroundColor: getPriorityColor(task.priority) }}
        >
          {task.priority.toUpperCase()}
        </span>
      </div>

      <div className="task-actions">
        <Link to={`/edit-task/${task.id}`} className="btn-edit">
          ✏️ Editar
        </Link>
        <button 
          onClick={handleDelete} 
          className="btn-delete"
        >
          🗑️ Deletar
        </button>
      </div>
    </div>
  );
};

export default TaskItem;