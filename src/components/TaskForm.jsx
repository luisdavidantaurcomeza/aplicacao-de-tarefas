import React, { useState, useEffect } from 'react';
import '../styles/TaskForm.css';

const TaskForm = ({ onSubmit, initialTask = null }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [priority, setPriority] = useState('normal');
  const [error, setError] = useState('');

  useEffect(() => {
    if (initialTask) {
      setTitle(initialTask.title);
      setDescription(initialTask.description || '');
      setPriority(initialTask.priority || 'normal');
    }
  }, [initialTask]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    if (!title.trim()) {
      setError('O título da tarefa é obrigatório!');
      return;
    }

    const task = {
      title: title.trim(),
      description: description.trim(),
      priority,
      completed: initialTask?.completed || false
    };

    onSubmit(task);
    
    if (!initialTask) {
      setTitle('');
      setDescription('');
      setPriority('normal');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="task-form">
      {error && <div className="error-message">{error}</div>}
      
      <div className="form-group">
        <label htmlFor="title">Título da Tarefa *</label>
        <input
          id="title"
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Digite o título da tarefa"
          className="form-input"
        />
      </div>

      <div className="form-group">
        <label htmlFor="description">Descrição</label>
        <textarea
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Digite uma descrição (opcional)"
          className="form-textarea"
          rows="4"
        />
      </div>

      <div className="form-group">
        <label htmlFor="priority">Prioridade</label>
        <select
          id="priority"
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
          className="form-select"
        >
          <option value="baixa">Baixa</option>
          <option value="normal">Normal</option>
          <option value="alta">Alta</option>
        </select>
      </div>

      <button type="submit" className="btn-submit">
        {initialTask ? 'Atualizar Tarefa' : 'Adicionar Tarefa'}
      </button>
    </form>
  );
};

export default TaskForm;