import { Button } from 'bootstrap';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import SingleTask from './SingleTask';
import { Table } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from './../firebase.init';
import { signOut } from 'firebase/auth';

const HomePage = () => {
    const [tasks, setTask] = useState([]);
    useEffect(() => {
        fetch('https://polar-caverns-52772.herokuapp.com/tasks')
            .then(res => res.json())
            .then(data => setTask(data));
    }, []);

    const [user] = useAuthState(auth); 
    const handleSignOut=e=>{
        signOut(auth);
    }


    return (
        <div>
            {
                user? <button onClick={handleSignOut} className='btn btn-danger'>Sign Out</button>
                :
                <Link to='/login'><button className='btn btn-primary'>Sign In</button></Link>
            }
            <h1>Totall Tasks: {tasks.length}</h1>

            <div className="my-5">

                <Link to='/addtask'>
                     <button className="btn btn-primary ">Add Task   </button>
                     </Link>


            </div>
            <Table striped bordered hover size="sm">
            <thead>
                <tr>
          
                    <th>Task Name</th>
                    <th>Task Description</th>
                  
                </tr>
            </thead>
            <tbody>
            <tr>
            {
                tasks.map(task => <SingleTask
                    task={task} key={task._id} setTask={setTask} tasks={tasks}
                ></SingleTask>)
            }
            </tr>
               
            </tbody>
        </Table>


        </div>
    );
};

export default HomePage;