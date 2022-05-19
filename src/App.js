import './App.css';
import HomePage from './Components/HomePage/HomePage';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import AddTask from './Components/AddTask/AddTask';
import Signup from './Components/Signup/Signup';
import Login from './Components/Signup/Login';
import RequireAuth from './Components/Signup/RequireAuth/RequireAuth';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={          <RequireAuth>

<HomePage/>
        </RequireAuth>}></Route>
        <Route path="/home" element={
          <RequireAuth>

<HomePage/>
        </RequireAuth>
       
        }></Route>
        <Route path="/addtask" element={
<RequireAuth>

  <AddTask/>
</RequireAuth>
        
        }></Route>
        <Route path="/signup" element={<Signup/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
