import { useMutation } from "@apollo/client";
import { FormEvent, MouseEvent, useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useSessionStore } from "../../stores/session";
import { ADD_USER } from "../../utils/Graphql";

interface UserFormData {
  username: string;
  email: string;
  password: string;
}

export const SignupForm = () => {
  const navigate = useNavigate();
  const { setUser } = useSessionStore();

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
