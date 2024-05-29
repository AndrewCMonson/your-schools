import { useMutation } from "@apollo/client";
import { RecoverPassword } from "../../utils";
import { FormEvent, MouseEvent, useState } from "react";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";

export const RecoverPasswordForm = () => {
  const [email, setEmail] = useState<string>("");
  const [sent, setSent] = useState<boolean>(false);

  const handleInputChange = (event: FormEvent<HTMLInputElement>) => {
    const { value } = event.target as HTMLInputElement;
    setEmail(value);
  };

  const [recoverPassword] = useMutation(RecoverPassword, {
    onCompleted: () => {
      setSent(true);
      toast.success("Password recovery email sent");
    },
    onError: (e) => {
      toast.error(e.message);
    },
  });

  const handleRecoverPasswordFormSubmit = async (
    event: MouseEvent<HTMLButtonElement> | FormEvent<HTMLButtonElement>,
  ) => {
    event?.preventDefault();

    if (!email) {
      toast.error("Please fill out all fields");
      return;
    }

    recoverPassword({
      variables: { email },
    });
  };

  return (
    <>
      <div className="card shrink-0 w-full max-w-sm md:max-w-md lg:max-w-md shadow-2xl bg-base-100">
        <form className="card-body">
          {!sent && (
            <div>
              <h1 className="font-bold text-2xl lg:text-3xl ">
                Reset Password
              </h1>
            </div>
          )}
          {sent && (
            <>
              <div className="alert alert-success">
                <div className="flex-1">
                  <label className="label font-bold text-xl text-center">
                    Password recovery email sent. Please check your email for
                    further instructions
                  </label>
                </div>
              </div>
              <button className="btn btn-primary">
                <Link to="/login">Back to Login</Link>
              </button>
            </>
          )}
          {!sent && (
            <div className="alert alert-error">
              <div className="flex-1">
                <label className="label font-bold">
                  Enter your email to receive a temporary password
                </label>
              </div>
            </div>
          )}
          {!sent && (
            <>
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
              <div className="form-control mt-6">
                <button
                  className="btn btn-primary"
                  onClick={handleRecoverPasswordFormSubmit}
                >
                  Send Recovery Email
                </button>
              </div>
            </>
          )}
        </form>
      </div>
    </>
  );
};
