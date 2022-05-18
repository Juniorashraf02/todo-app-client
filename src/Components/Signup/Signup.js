import React from "react";
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';
import { useAuthState, useCreateUserWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from './../firebase.init';

const Signup = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);
    const [signInWithGoogle, guser, gloading, gerror] = useSignInWithGoogle(auth);


    const onSubmit = data => {
        console.log(data)
        createUserWithEmailAndPassword(data.email, data.password)
    };


    const handleGoogleSignIn = e => {
        signInWithGoogle()
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