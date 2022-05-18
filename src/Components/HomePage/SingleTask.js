import React from 'react';
import { Table } from 'react-bootstrap';

const SingleTask = ({ task,setTask,tasks}) => {

    const {tittle, description, _id} = task;


    const handleDelete =id=>{
        fetch(`http://localhost:5000/tasks/${id}`,{
            method: 'DELETE',
        })
        .then(res => res.json())
        .then(data=>{
            console.log(data);
            const remaining = tasks.filter(task => task._id !== id);
            setTask(remaining);
        })
        
    }

    return (
        <Table striped bordered hover size="sm">
            <thead>
                <tr>
          
                    <th>Task Name</th>
                    <th>Task Description</th>
                  
                </tr>
            </thead>
            <tbody>
                <tr>
          
                    <td>{tittle}</td>
                    <td>{description}</td>
                 
                     <button onClick={()=>handleDelete(_id)} className="btn btn-success text-black bg-green ">Delete  </button>
          
              
                </tr>
               
            </tbody>
        </Table>
    );
};

export default SingleTask;