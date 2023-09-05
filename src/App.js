import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import AdminLogin from './Pages/AdminLogin';
import Admin from './Pages/Admin';
import Home from './Pages/Home';
import TeamTable from './Components/TeamTable';
import TaskTable from './Components/TaskTable';
import Login from './Pages/Login';

function App() {
  return (
    <div className="App">
      <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/admin/team-table" element={<TeamTable />} />
            <Route path="/task-table" element={<TaskTable />} />
            <Route path="/adminpage" element={<Admin />} />
          </Routes>
      </Router>
    </div>
  );
}

export default App;
