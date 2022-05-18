import './App.css';
import HomePage from './Components/HomePage/HomePage';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import AddTask from './Components/AddTask/AddTask';
import Signup from './Components/Signup/Signup';
import Login from './Components/Signup/Login';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage/>}></Route>
        <Route path="/home" element={<HomePage/>}></Route>
        <Route path="/addtask" element={<AddTask/>}></Route>
        <Route path="/signup" element={<Signup/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
