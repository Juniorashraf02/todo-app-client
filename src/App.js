import './App.css';
import HomePage from './Components/HomePage/HomePage';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import AddTask from './Components/AddTask/AddTask';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage/>}></Route>
        <Route path="/home" element={<HomePage/>}></Route>
        <Route path="/addtask" element={<AddTask/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
