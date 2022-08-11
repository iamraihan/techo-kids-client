import React from "react";
import { FaFacebook, FaGoogle } from "react-icons/fa";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import registerImg from "../images/teacher-student.webp";
import auth from "../firebase.init";

const Register = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  return (
    <div className="max-w-screen-xl mx-auto">
      <div className="grid grid-cols-2">
        <div>
          <h2 className="text-4xl font-bold ">Register</h2>
          <p className="my-5">Register as your role</p>
          <div>
            <button
              onClick={() => signInWithGoogle()}
              className="btn btn-info w-full max-w-xs rounded-xl"
            >
              <FaGoogle className="mr-3 text-2xl"></FaGoogle> Sign in with
              Google
            </button>
          </div>

          <div className="mt-5">
            <button className="btn btn-info w-full max-w-xs rounded-xl">
              <FaFacebook className="mr-3 text-2xl"></FaFacebook> Sign in with
              Facebook
            </button>
          </div>

          <form>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="Type Your Name"
                className="input input-bordered w-full max-w-xs"
              />
              <label className="label">
                <span className="label-text-alt">Alt label</span>
              </label>
            </div>
          </form>
        </div>

        <div>
          <img src={registerImg} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Register;
