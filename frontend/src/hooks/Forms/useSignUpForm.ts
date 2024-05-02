import { FormEvent, MouseEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useMutation } from "@apollo/client";
import { toast } from "react-toastify";
import { useSessionStore } from "../../stores/";
import { AddUser } from "../../utils/";

interface SignUpFormData {
  username: string;
  email: string;
  password: string;
}

export const useSignUpForm = () => {
  const navigate = useNavigate();
  const { setUser } = useSessionStore();

  const [signUpFormData, setSignUpFormData] = useState<SignUpFormData>({
    username: "",
    email: "",
    password: "",
  });

  const [addUser] = useMutation(AddUser, {
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
    setSignUpFormData({ ...signUpFormData, [name]: value });
  };

  const handleSignupFormSubmit = async (
    event: MouseEvent<HTMLButtonElement> | FormEvent<HTMLButtonElement>,
  ) => {
    event.preventDefault();

    if (
      !signUpFormData.username ||
      !signUpFormData.email ||
      !signUpFormData.password
    ) {
      toast.error("Please fill out all fields");
      return;
    }

    await addUser({
      variables: { ...signUpFormData },
    });
  };

  return {
    handleInputChange,
    handleSignupFormSubmit,
  };
};
