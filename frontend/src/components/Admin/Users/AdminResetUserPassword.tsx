import { RecoverPassword } from "../../../utils";
import { Maybe } from "graphql/jsutils/Maybe";

import {
  Dialog,
  DialogPanel,
  DialogBackdrop,
  DialogTitle,
  Description,
} from "@headlessui/react";
import { useState, MouseEvent } from "react";
import { useMutation } from "@apollo/client";
import { toast } from "react-toastify";

interface AdminResetUserPasswordModalProps {
  email: Maybe<string> | undefined;
}

export const AdminResetUserPasswordModal = ({
  email,
}: AdminResetUserPasswordModalProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const open = () => {
    setIsOpen(true);
  };

  const close = () => {
    setIsOpen(false);
  };

  const [recoverPassword] = useMutation(RecoverPassword, {
    onCompleted: () => {
      toast.success("Password recovery email sent");
    },
    onError: (e) => {
      toast.error(e.message);
    },
  });

  const handleResetPasswordButtonClick = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    recoverPassword({
      variables: { email },
    });

    close();
  };

  return (
    <>
      <button className="btn" onClick={open}>
        Reset <br></br> Password
      </button>
      <Dialog
        open={isOpen}
        onClose={() => setIsOpen(false)}
        className="relative z-50"
      >
        <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
          <DialogBackdrop className="fixed inset-0 bg-black/90" />
          <DialogPanel className="w-full max-w-md rounded-xl p-6 backdrop-blur-3xl duration-300 ease-out data-[closed]:transform-[scale(95%)] data-[closed]:opacity-0 border">
            <DialogTitle className="font-bold text-2xl">
              Reset Password
            </DialogTitle>
            <Description className="my-4">
              This will send the user an email with a new temporary password,
              deleting the old one.
            </Description>
            <p>
              Are you sure you want to reset the password for this user? This
              cannot be undone.
            </p>
            <div className="flex gap-4 mt-4">
              <button
                className="btn btn-warning"
                onClick={handleResetPasswordButtonClick}
              >
                Reset <br></br> Password
              </button>
              <button className="btn" onClick={() => setIsOpen(false)}>
                Cancel
              </button>
            </div>
          </DialogPanel>
        </div>
      </Dialog>
    </>
  );
};
