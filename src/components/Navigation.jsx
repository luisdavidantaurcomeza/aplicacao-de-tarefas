import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navigation.css';

const Navigation = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-brand">
          📝 Gerenciador de Tarefas
        </Link>
        <div className="nav-links">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/add-task" className="nav-link btn-add">+ Nova Tarefa</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;