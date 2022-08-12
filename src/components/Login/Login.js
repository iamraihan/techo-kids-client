import React from "react";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { FaFacebook, FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";
import auth from "../firebase.init";
import registerImg from "../images/teacher-student.webp";
import { useNavigate, useLocation } from "react-router-dom";

const Login = () => {
  let location = useLocation();
  const navigate = useNavigate();
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const {
    register,
    getValues,
    reset,
    handleSubmit,

    formState: {
      errors,

      isDirty,
      isSubmitting,
      touchedFields,
      submitCount,
    },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    signInWithEmailAndPassword(data.email, data.password);
  };

  let from = location.state?.from?.pathname || "/";
  if (user) {
    navigate(from, { replace: true });
  }
  let signError;
  signError = (
    <p className="text-error">
      <small>{error?.message}</small>
    </p>
  );
  return (
    <div className="max-w-screen-xl mx-auto">
      <div className="grid lg:grid-cols-2 ">
        <div className="">
          <h2 className="text-4xl font-bold ">Register</h2>
          <p className="my-5">Register as your role</p>
          <div>
            <button
              // onClick={() => signInWithGoogle()}
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

          <form onSubmit={handleSubmit(onSubmit)}>
            {/* email */}
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="Type Your Email"
                className="input input-bordered w-full max-w-xs"
                {...register("email", {
                  required: {
                    value: true,
                    message: "Email is required",
                  },
                  pattern: {
                    value: /[A-Za-z]{3}/,
                    message: "Please input a valid Email", // JS only: <p>error message</p> TS only support string
                  },
                })}
              />
              <label className="label">
                {errors.email?.type === "required" && (
                  <span className="label-text-alt text-error">
                    {errors.email.message}
                  </span>
                )}
              </label>
              <label className="label">
                {errors.email?.type === "pattern" && (
                  <span className="label-text-alt text-error">
                    {errors.email.message}
                  </span>
                )}
              </label>

              {/* password */}
            </div>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="Type Your Password"
                className="input input-bordered w-full max-w-xs"
                {...register("password", {
                  required: {
                    value: true,
                    message: "Password is required",
                  },
                  minLength: {
                    value: 6,
                    message: "Must input 6 character or more", // JS only: <p>error message</p> TS only support string
                  },
                })}
              />
              <label className="label">
                {errors.password?.type === "required" && (
                  <span className="label-text-alt text-error">
                    {errors.password.message}
                  </span>
                )}
              </label>
              <label className="label">
                {errors.password?.type === "minLength" && (
                  <span className="label-text-alt text-error">
                    {errors.password.message}
                  </span>
                )}
              </label>
            </div>
            {signError}
            <input
              className="w-full max-w-xs btn btn-primary hover:text-white hover:bg-secondary"
              type="submit"
              value="Sign In"
            />
            <p>
              <small>
                New to Techo kids?{" "}
                <Link className="text-primary font-bold" to="/register">
                  {" "}
                  Create an account
                </Link>
              </small>
            </p>
          </form>
        </div>

        <div className="flex w-full">
          <img className="max-w-full" src={registerImg} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Login;
