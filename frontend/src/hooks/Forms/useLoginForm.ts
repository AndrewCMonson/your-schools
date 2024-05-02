import { FormEvent, MouseEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useMutation } from "@apollo/client";
import { toast } from "react-toastify";
import { useSessionStore } from "../../stores/";
import { LoginUser } from "../../utils/";

interface LoginFormData {
  email: string;
  password: string;
}

export const useLoginForm = () => {
  const navigate = useNavigate();
  const { setUser } = useSessionStore();
  const [loginFormData, setLoginFormData] = useState<LoginFormData>({
    email: "",
    password: "",
  });

  const [login] = useMutation(LoginUser, {
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
    setLoginFormData({ ...loginFormData, [name]: value });
  };

  const handleLoginFormSubmit = async (
    event: MouseEvent<HTMLButtonElement> | FormEvent<HTMLButtonElement>,
  ) => {
    event.preventDefault();

    if (!loginFormData.email || !loginFormData.password) {
      toast.error("Please fill out all fields");
      return;
    }

    login({
      variables: { ...loginFormData },
    });
  };

  return {
    handleInputChange,
    handleLoginFormSubmit,
  };
};
