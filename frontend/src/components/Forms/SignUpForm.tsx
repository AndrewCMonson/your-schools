import { useSignUpForm } from "../../hooks/Forms/useSignUpForm";

export const SignUpForm = () => {
  const { handleInputChange, handleSignupFormSubmit } = useSignUpForm();

  return (
    <>
      <div className="card shrink-0 w-full md:max-w-md lg:max-w-md shadow-2xl bg-base-100">
        <form className="card-body">
          <div>
            <h1 className="font-bold text-2xl lg:text-3xl">
              Create an account
            </h1>
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Username</span>
            </label>
            <input
              name="username"
              placeholder="JohnDoe123"
              className="input input-bordered"
              required
              onChange={handleInputChange}
            />
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
              required
              onChange={handleInputChange}
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              name="password"
              type="password"
              placeholder="password"
              className="input input-bordered"
              required
              onChange={handleInputChange}
            />
            <label className="label">
              <a href="#" className="label-text-alt link link-hover">
                Forgot password?
              </a>
            </label>
            <label className="label">
              <a href="/login" className="label-text-alt link link-hover">
                Already have an account?
              </a>
            </label>
          </div>
          <div className="form-control mt-6">
            <button
              className="btn btn-primary"
              onClick={handleSignupFormSubmit}
            >
              Signup
            </button>
          </div>
        </form>
      </div>
    </>
  );
};
