import { useEffect } from "react";
import { ReactElement } from "react";
import { useSessionStore } from "../stores/";
import { useNavigate } from "react-router-dom";
import { RecoverPasswordForm } from "../components/";

export const RecoveryScreen = (): ReactElement => {
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
        id="RecoveryScreen"
        className="min-h-full w-full pt-5 flex flex-col lg:flex-row justify-center items-center bg-base-200"
      >
        <RecoverPasswordForm />
      </section>
    </>
  );
};
