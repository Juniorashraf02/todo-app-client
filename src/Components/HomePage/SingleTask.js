import React from 'react';

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

       
                <tr>
          
                    <td>{tittle}</td>
                    <td>{description}</td>
                 
                     <button onClick={()=>handleDelete(_id)} className="btn btn-success text-black bg-green ">Delete  </button>
          
              
                </tr>
               
           

    );
};

export default SingleTask;