import React from 'react'
import Input from '../Input';
import { Link } from 'react-router-dom';

export default function LoginForm() {
  return (
    <div className="max-w-xs">
      <h2 className="text-2xl font-bold my-2 text-violet-500 text-center">
        Login
      </h2>
      <p className="font-light text-lg">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure,
        exercitationem.
      </p>

      <form>
       

      </form>

      <p className="text-center text-slate-400 font-semibold my-6">Or</p>

      <div className="mt-6 flex justify-center">
     
      
      </div>

      <p className="text-center my-4">
        Don't have an account?{" "}
        <Link to="/signup" className="text-blue-500 font-semibold">
          Sign Up
        </Link>
      </p>
    </div>
  );
}
