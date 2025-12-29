import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useTaskContext } from '../context/TaskContext';
import TaskForm from '../components/TaskForm';
import '../styles/Pages.css';

const AddTask = () => {
  const navigate = useNavigate();
  const { addTask } = useTaskContext();

  const handleAddTask = (task) => {
    addTask(task);
    alert('Tarefa adicionada com sucesso!');
    navigate('/');
  };

  return (
    <div className="page-container">
      <h1>Adicionar Nova Tarefa</h1>
      <div className="form-wrapper">
        <TaskForm onSubmit={handleAddTask} />
      </div>
    </div>
  );
};

export default AddTask;