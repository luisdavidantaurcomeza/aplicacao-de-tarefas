import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useTaskContext } from '../context/TaskContext';
import TaskForm from '../components/TaskForm';
import '../styles/Pages.css';

const EditTask = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { getTaskById, editTask } = useTaskContext();
  
  const task = getTaskById(id);

  if (!task) {
    return (
      <div className="page-container">
        <h1>Tarefa não encontrada</h1>
        <button onClick={() => navigate('/')}>Voltar</button>
      </div>
    );
  }

  const handleEditTask = (updatedTask) => {
    editTask({
      ...task,
      ...updatedTask
    });
    alert('Tarefa atualizada com sucesso!');
    navigate('/');
  };

  return (
    <div className="page-container">
      <h1>Editar Tarefa</h1>
      <div className="form-wrapper">
        <TaskForm onSubmit={handleEditTask} initialTask={task} />
      </div>
    </div>
  );
};

export default EditTask;