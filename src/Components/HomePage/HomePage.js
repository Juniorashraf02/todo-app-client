import { Button } from 'bootstrap';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import SingleTask from './SingleTask';

const HomePage = () => {
    const [tasks, setTask] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/tasks')
            .then(res => res.json())
            .then(data => setTask(data));
    }, []);


    return (
        <div>
            <h1>Totall Tasks: {tasks.length}</h1>

            <div className="my-5">

                <Link to='/addtask'>
                     <button className="btn btn-primary ">Add Task   </button>
                     </Link>


            </div>


            {
                tasks.map(task => <SingleTask
                    task={task} key={task._id} setTask={setTask} tasks={tasks}
                ></SingleTask>)
            }
        </div>
    );
};

export default HomePage;