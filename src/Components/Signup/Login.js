
import React from "react";
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';
import auth from './../firebase.init';

const Signup = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const [signInWithGoogle, guser, gloading, gerror] = useSignInWithGoogle(auth);

    const onSubmit = data => {
        console.log(data);
        signInWithEmailAndPassword(data.email, data.password);
    };
    const handleGoogleSignIn = e => {
        signInWithGoogle()
    }



    return (
        <div>
            <Link to='/home'>
                <button className="btn btn-info ">Go to Home   </button>
            </Link>
            <h1>Log in now</h1>
            <form className="my-5 " onSubmit={handleSubmit(onSubmit)}>

                <input  {...register("email")} placeholder="email" />


                <input {...register("password")} placeholder="password" />
                {/* errors will return when field validation fails  */}
                {errors.exampleRequired && <span>This field is required</span>}

                <input type="submit" /> <br />
                <div>OR</div>
                <button onClick={handleGoogleSignIn} className="btn btn-primary">Sign in With GOOGLE</button>
            </form>
            <small>Don't have an account <Link to="/signup"><small className="text-info">Sign up now</small></Link> </small>
        </div>
    );
};




export default Signup;