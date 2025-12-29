import React from 'react';
import { useTaskContext } from '../context/TaskContext';
import TaskList from '../components/TaskList';
import '../styles/Pages.css';

const Home = () => {
  const { tasks } = useTaskContext();

  const completedCount = tasks.filter(task => task.completed).length;

  return (
    <div className="page-container">
      <h1>Minhas Tarefas</h1>
      
      <div className="stats">
        <div className="stat-card">
          <span className="stat-label">Total</span>
          <span className="stat-value">{tasks.length}</span>
        </div>
        <div className="stat-card">
          <span className="stat-label">Concluídas</span>
          <span className="stat-value">{completedCount}</span>
        </div>
        <div className="stat-card">
          <span className="stat-label">Pendentes</span>
          <span className="stat-value">{tasks.length - completedCount}</span>
        </div>
      </div>

      <TaskList tasks={tasks} />
    </div>
  );
};

export default Home;