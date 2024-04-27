import React, { useContext } from "react";
import { Link } from "react-router-dom";
import UserContext, { AuthContext } from "../providers/UserContext";

const Register = () => {
  const { createUser, signInWithGoogle } = useContext(AuthContext);
  console.log("createuser:", createUser);
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(name, email, password);

    createUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log("registered user: ", user);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((error) => console.error(error));
  };
  return (
    <div>
      <div className="bg-base-200 min-h-screen">
        <div className="hero py-16">
          <div className="text-center  ">
            <h1 className="text-5xl font-bold my-5">Register now!</h1>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 mx-auto p-5 m-5 rounded">
            <form onSubmit={handleSubmit} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>{" "}
                <br />
                <input
                  type="text"
                  name="name"
                  placeholder="name"
                  className="input border border-slate-500"
                  required
                />
              </div>{" "}
              <br />
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>{" "}
                <br />
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input border border-slate-500"
                  required
                />
              </div>{" "}
              <br />
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <br />
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input border border-slate-500"
                  required
                />
                <br />
                <br />
                <label className="label">
                  <Link
                    to={"/login"}
                    className="label-text-alt link link-hover"
                  >
                    Already have an account?
                  </Link>
                </label>
              </div>
              <button
                onClick={handleGoogleSignIn}
                className="btn btn-outline btn-success"
              >
                Google Signup
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
