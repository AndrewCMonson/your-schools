import { ReactElement } from "react";
import { useLoginForm } from "../../hooks";
import { Link } from "react-router-dom";
import { EyeSlashIcon, EyeIcon } from "@heroicons/react/24/solid";

export const LoginForm = (): ReactElement => {
  const {
    handleInputChange,
    handleLoginFormSubmit,
    handleShowPassword,
    loginFormData,
  } = useLoginForm();

  return (
    <>
      <div className="card shrink-0 w-full max-w-sm md:max-w-md lg:max-w-md shadow-2xl bg-base-100">
        <form className="card-body">
          <div>
            <h1 className="font-bold text-2xl lg:text-3xl">Login</h1>
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              name="email"
              type="email"
              placeholder="johndoe@email.com"
              className="input input-bordered"
              onChange={handleInputChange}
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
              <i className="btn btn-xs btn-circle" onClick={handleShowPassword}>
                {loginFormData.hidePassword ? <EyeSlashIcon /> : <EyeIcon />}
              </i>
            </label>

            <input
              name="password"
              type={loginFormData.hidePassword ? "password" : "text"}
              placeholder="password"
              className="input input-bordered w-full"
              onChange={handleInputChange}
            />

            <label className="label">
              <Link to="/recovery" className="label-text-alt link link-hover">
                Forgot password?
              </Link>
            </label>
            <label className="label">
              <a href="/signup" className="label-text-alt link link-hover">
                Don&apos;t have an account yet?
              </a>
            </label>
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary" onClick={handleLoginFormSubmit}>
              Login
            </button>
          </div>
        </form>
      </div>
    </>
  );
};
