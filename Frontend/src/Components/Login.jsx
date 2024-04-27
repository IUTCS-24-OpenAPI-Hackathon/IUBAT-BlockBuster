import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../providers/UserContext";

const Login = () => {
  const { signIn } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    signIn(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        form.reset();
        navigate("/");
      })
      .catch((error) => console.error(error));
  };

  return (
    <div className="bg-base-200 min-h-screen">
      <div className="hero py-16">
        <div className="text-center  ">
          <h1 className="text-5xl font-bold">Login now!</h1>
          <p className="py-6">Login with your email and password</p>
        </div>
        <div className="card shadow-lg bg-base-100 max-w-sm w-full mx-auto p-5 border rounded">
          <form onSubmit={handleSubmit} className="card-body  flex flex-col items-center">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <br />
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="input border border-slate-500"
                required
              />
            </div>
            <br />
            <div className="form-contro">
              <label className="label ">
                <span className="label-text">Password</span>
              </label>
              <br />
              <input
                type="password"
                name="password"
                placeholder="Password"
                className="input border border-slate-600"
                required
              />
              <br />
           
              <br />
              <label className="label">
                <a href="/register" className="label-text-alt link link-hover">
                   Sign Up?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn  border border-blue-500 p-2 rounded">Login</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
