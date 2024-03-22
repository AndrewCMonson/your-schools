import { Card, Input, Button } from "@material-tailwind/react";
import { LOGIN_USER, ADD_USER } from "../utils/mutations";
import { FormEvent, MouseEvent } from "react";
import { useMutation } from "@apollo/client";
import { ReactElement, useState } from "react";
import { toast } from "react-toastify";
import { login as loginUser } from "../utils/auth";

interface UserFormData {
  username: string;
  email: string;
  password: string;
}

export const LoginSignupScreen = (): ReactElement => {
  const [screenSelected, setScreenSelected] = useState<string>("login");
  const [userFormData, setUserFormData] = useState<UserFormData>({
    username: "",
    email: "",
    password: "",
  });
  const [login] = useMutation(LOGIN_USER);
  const [addUser] = useMutation(ADD_USER);

  const handleInputChange = (event: FormEvent<HTMLInputElement>) => {
    const { name, value } = event.target as HTMLInputElement;
    setUserFormData({ ...userFormData, [name]: value });
  };

  const handleLoginFormSubmit = async (
		event: MouseEvent<HTMLButtonElement> | FormEvent<HTMLButtonElement>
	) => {
		event.preventDefault();

		if (!userFormData.email || !userFormData.password) {
			toast.error('Please fill out all fields');
			return;
		}

		try {
			const { data } = await login({
				variables: { ...userFormData },
			});

			loginUser(data.login.token);
		} catch (e) {
			toast.error('Invalid credentials');
		}

		setUserFormData({
			username: '',
			email: '',
			password: '',
		});
	};

  const handleSignupFormSubmit = async (event: MouseEvent<HTMLButtonElement> | FormEvent<HTMLButtonElement>) => {
    event.preventDefault();

    if (
      !userFormData.username ||
      !userFormData.email ||
      !userFormData.password
    ) {
      toast.error("Please fill out all fields");
      return;
    }

    try {
      const { data } = await addUser({
        variables: { ...userFormData },
      });

      loginUser(data.addUser.token);
    } catch (e) {
      console.error(e);
    }

    setUserFormData({
      username: "",
      email: "",
      password: "",
    });
  };


  // TODO: change if statements to conditional rendering
  // if (screenSelected === "login") {
    return (
      <>
       {screenSelected === "login" && (
        <section
          id="loginSignupScreen"
          className="h-full w-full pt-5 flex flex-row justify-center items-center overflow-scroll"
        >
          <Card color="transparent" shadow={false} className="text-black">
            <div className="text-2xl 2xl:text-4xl font-bold text-indigo-800">
              Sign In
            </div>
            <form
              id="signin-form"
              className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96"
            >
              <div className="mb-1 flex flex-col gap-6">
                <div className="-mb-3">Your Email</div>
                <Input
                  size="lg"
                  name="email"
                  placeholder="name@mail.com"
                  onChange={handleInputChange}
                  className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                  labelProps={{
                    className: "before:content-none after:content-none",
                  }}
                  crossOrigin={""}
                />
                <div className="-mb-3">Password</div>
                <Input
                  type="password"
                  size="lg"
                  name="password"
                  onChange={handleInputChange}
                  placeholder="********"
                  className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                  labelProps={{
                    className: "before:content-none after:content-none",
                  }}
                  crossOrigin={""}
                />
              </div>
              <Button
                className="mt-6"
                onClick={handleLoginFormSubmit}
                fullWidth
                color="indigo"
                form="signin-form"
                type="submit"
              >
                sign in
              </Button>
              <div className="mt-4 text-center font-normal">
                Don&apos;t have an account?{" "}
                <span
                  onClick={() => setScreenSelected("signup")}
                  className="cursor-pointer hover:underline"
                >
                  Sign Up
                </span>
              </div>
            </form>
          </Card>
        </section>
       )}
       {screenSelected === "signup" && (
        <section
          id="loginSignupScreen"
          className="h-full w-full pt-5 flex flex-row justify-center items-center overflow-scroll"
        >
          <Card color="transparent" shadow={false} className="text-black">
            <div className="text-2xl 2xl:text-4xl font-bold text-indigo-800">
              Create an account
            </div>
            <form
              id="signup-form"
              className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96"
            >
              <div className="mb-1 flex flex-col gap-6">
                <div className="-mb-3">Your Username</div>
                <Input
                  size="lg"
                  name="username"
                  placeholder="username"
                  onChange={handleInputChange}
                  className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                  labelProps={{
                    className: "before:content-none after:content-none",
                  }}
                  crossOrigin={""}
                />
                <div className="-mb-3">Your Email</div>
                <Input
                  size="lg"
                  name="email"
                  placeholder="name@mail.com"
                  onChange={handleInputChange}
                  className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                  labelProps={{
                    className: "before:content-none after:content-none",
                  }}
                  crossOrigin={""}
                />
                <div className="-mb-3">Password</div>
                <Input
                  type="password"
                  size="lg"
                  name="password"
                  onChange={handleInputChange}
                  placeholder="********"
                  className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                  labelProps={{
                    className: "before:content-none after:content-none",
                  }}
                  crossOrigin={""}
                />
              </div>
              <Button
                className="mt-6"
                onClick={handleSignupFormSubmit}
                fullWidth
                color="indigo"
                type="submit"
                form="signup-form"
              >
                sign up
              </Button>
              <div className="mt-4 text-center font-normal">
                Already have an account?{" "}
                <a
                  onClick={() => setScreenSelected("login")}
                  className="cursor-pointer hover:underline"
                >
                  Sign In
                </a>
              </div>
            </form>
          </Card>
        </section>
        )}
      </>
    );
  }
      
