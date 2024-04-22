import { Card, Input, Button } from "@material-tailwind/react";
import { LOGIN_USER } from "../utils/Graphql/";
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

export const LoginScreen = (): ReactElement => {
  const navigate = useNavigate();
  const { user, setUser } = useSessionStore();
  const [userFormData, setUserFormData] = useState<UserFormData>({
    username: "",
    email: "",
    password: "",
  });

  const [login] = useMutation(LOGIN_USER, {
    onCompleted: ({ login }) => {
      setUser(login.user);
      navigate("/schools");
    },
    onError: (e) => {
      console.error(e);
      toast.error("Invalid credentials");
    },
  });

  const handleInputChange = (event: FormEvent<HTMLInputElement>) => {
    const { name, value } = event.target as HTMLInputElement;
    setUserFormData({ ...userFormData, [name]: value });
  };

  const handleLoginFormSubmit = async (
    event: MouseEvent<HTMLButtonElement> | FormEvent<HTMLButtonElement>,
  ) => {
    event.preventDefault();

    if (!userFormData.email || !userFormData.password) {
      toast.error("Please fill out all fields");
      return;
    }

    login({
      variables: { ...userFormData },
    });
  };

  useEffect(() => {
    if (user) {
      navigate("/schools");
    }
  });

  return (
    <>
      <section
        id="loginSignupScreen"
        className="h-full w-full pt-5 flex flex-row justify-center items-center overflow-scroll"
      >
        <Card color="transparent" shadow={false} className="text-black">
          <div className="text-2xl 2xl:text-4xl font-bold text-indigo-800">
            Sign In
          </div>
          <form
            className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96"
            id="signin-form"
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
    </>
  );
};
