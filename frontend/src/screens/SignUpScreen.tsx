import { ADD_USER } from "../utils/mutations";
import { FormEvent, MouseEvent, useEffect } from "react";
import { useMutation } from "@apollo/client";
import { ReactElement, useState } from "react";
import { toast } from "react-toastify";
import { useSessionStore } from "../stores/session";
import { useNavigate } from "react-router-dom";

interface UserFormData {
  username: string;
  email: string;
  password: string;
}

export const SignupScreen = (): ReactElement => {
  const navigate = useNavigate();
  const [userFormData, setUserFormData] = useState<UserFormData>({
    username: "",
    email: "",
    password: "",
  });

  const [addUser] = useMutation(ADD_USER, {
    onCompleted: ({ addUser }) => {
      setUser(addUser.user);
      navigate("/");
    },
    onError: (e) => {
      console.error(e);
      toast.error("An error occurred. Please try again");
    },
  });

  const { user, setUser } = useSessionStore();

  const handleInputChange = (event: FormEvent<HTMLInputElement>) => {
    const { name, value } = event.target as HTMLInputElement;
    setUserFormData({ ...userFormData, [name]: value });
  };

  const handleSignupFormSubmit = async (
    event: MouseEvent<HTMLButtonElement> | FormEvent<HTMLButtonElement>,
  ) => {
    event.preventDefault();

    if (
      !userFormData.username ||
      !userFormData.email ||
      !userFormData.password
    ) {
      toast.error("Please fill out all fields");
      return;
    }

    await addUser({
      variables: { ...userFormData },
    });
  };

  useEffect(() => {
    if (user) {
      navigate("/schools");
    }
  }, [user, navigate]);

  return (
    <>
      <section
        id="loginSignupScreen"
        className="h-full w-full pt-5 flex flex-col lg:flex-row justify-center items-center bg-base-200"
      >
        <div className="hero lg:flex lg:justify-end lg:w-1/2 bg-base-200 lg:mr-40 min-h-full mt-40 lg:mt-0">
          <div className="hero-content text-center">
            <div className="max-w-md">
              <h1 className="text-5xl font-bold">Hello there</h1>
              <p className="py-6">
                Provident cupiditate voluptatem et in. Quaerat fugiat ut
                assumenda excepturi exercitationem quasi. In deleniti eaque aut
                repudiandae et a id nisi.
              </p>
              <button className="btn btn-primary">Get Started</button>
            </div>
          </div>
        </div>
        <div className="hero lg:flex lg:w-1/2 bg-base-200">
          <div className="card shrink-0 w-full max-w-xs lg:max-w-sm shadow-2xl bg-base-100 mb-40 lg:mb-0">
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
                  placeholder="username"
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
                  placeholder="email"
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
        </div>
      </section>
    </>
  );
};
