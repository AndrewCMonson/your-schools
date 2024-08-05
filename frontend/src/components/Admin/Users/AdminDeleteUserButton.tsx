import { useMutation } from "@apollo/client";
import { toast } from "react-toastify";
import { DeleteUser, GetAllUsers } from "../../../utils";
import { Maybe } from "graphql/jsutils/Maybe";
import { useState } from "react";
import {
  Description,
  Dialog,
  DialogPanel,
  DialogTitle,
  DialogBackdrop,
} from "@headlessui/react";

interface AdminDeleteUserButtonProps {
  schoolId: Maybe<string> | undefined;
}
export const AdminDeleteUserButton = ({
  schoolId,
}: AdminDeleteUserButtonProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [deleteUser] = useMutation(DeleteUser, {
    onCompleted: (data) => {
      toast.success("User deleted successfully");
      console.log(data);
    },
    onError: (error) => {
      toast.error(error.message);
      console.error(error);
    },
  });

  const handleDeleteButtonClick = () => {
    deleteUser({
      variables: {
        id: schoolId,
      },
      refetchQueries: [{ query: GetAllUsers }],
    });
    setIsOpen(false);
  };
  return (
    <>
      <button className="btn btn-warning" onClick={() => setIsOpen(true)}>
        Delete
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
              Delete School
            </DialogTitle>
            <Description className="my-4">
              This will permanently delete the user and all of it&apos;s data
            </Description>
            <p>
              Are you sure you want to delete this user? This action cannot be
              undone.
            </p>
            <div className="flex gap-4 mt-4">
              <button
                className="btn btn-warning"
                onClick={handleDeleteButtonClick}
              >
                Delete
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
