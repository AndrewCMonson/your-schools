import { useEffect } from "react";
import { ReactElement } from "react";
import { useSessionStore } from "../stores/session";
import { useNavigate } from "react-router-dom";
import { LoginForm } from "../components/Forms/LoginForm";

export const LoginScreen = (): ReactElement => {
  const navigate = useNavigate();
  const { user } = useSessionStore();

  useEffect(() => {
    if (user) {
      navigate("/schools");
    }
  });

  return (
    <>
      <section
        id="loginScreen"
        className="min-h-full w-full pt-5 flex flex-col lg:flex-row justify-center items-center bg-base-200"
      >
        <LoginForm />
      </section>
    </>
  );
};
