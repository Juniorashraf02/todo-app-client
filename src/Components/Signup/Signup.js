import React from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from 'react-router-dom';
import { useAuthState, useCreateUserWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useLocation } from 'react-router-dom';
import auth from './../firebase.init';

const Signup = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
     
    ] = useCreateUserWithEmailAndPassword(auth);
    const [signInWithGoogle, gUser, gloading, gerror] = useSignInWithGoogle(auth);


    const onSubmit = data => {
        console.log(data)
        createUserWithEmailAndPassword(data.email, data.password)
    };


    const handleGoogleSignIn = e => {
        signInWithGoogle()
    }

    let navigate = useNavigate();
    let location = useLocation();
    let from = location.state?.from?.pathname || "/";
    if(user||gUser){
        navigate(from, {replace: true});
    }
    if(loading||gloading){
        return <p>Loading</p>
    }


    return (
        <div>
            <Link to='/home'>
                <button className="btn btn-info ">Go to Home   </button>
            </Link>
            <h1>Sign Up now</h1>
            <form className="my-5 " onSubmit={handleSubmit(onSubmit)}>

                <input  {...register("email")} placeholder="email" />


                <input {...register("password")} placeholder="password" />
                {/* errors will return when field validation fails  */}
                {errors.exampleRequired && <span>This field is required</span>}

                <input type="submit" /> <br />
                <div>OR</div>
                <button onClick={handleGoogleSignIn} className="btn btn-primary">Sign up With GOOGLE</button>
            </form>
            <small>Already have an account <Link to="/login"><small className="text-info">log in now</small></Link> </small>
        </div>
    );
};




export default Signup;