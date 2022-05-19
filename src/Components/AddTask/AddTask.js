import React from 'react';
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';

const AddTask = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data =>{
        console.log(data);
        fetch('https://polar-caverns-52772.herokuapp.com/tasks',{
            method: 'POST',
            headers:{
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(res=>res.json())
        .then(results=>{
            console.log(results);
            alert('task added successfully')
        })
    };
    return (
<div>
<form onSubmit={handleSubmit(onSubmit)} className="my-5 d-flex container mx-auto justify-content-center">
            <input {...register("tittle")} placeholder="tittle" required/>

            <input {...register("description")}  placeholder="description" required/>

    

            <input type="submit" />
        </form>
        <Link to='/home'>
                     <button className="btn btn-info ">Go to Home   </button>
                     </Link>
</div>
    );
};

export default AddTask;