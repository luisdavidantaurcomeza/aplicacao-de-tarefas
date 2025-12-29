import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { TaskProvider } from './context/TaskContext';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import AddTask from './pages/AddTask';
import EditTask from './pages/EditTask';
import './styles/App.css';

function App() {
  return (
    <Router>
      <TaskProvider>
        <Navigation />
        <div className="app-container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/add-task" element={<AddTask />} />
            <Route path="/edit-task/:id" element={<EditTask />} />
          </Routes>
        </div>
      </TaskProvider>
    </Router>
  );
}

export default App;