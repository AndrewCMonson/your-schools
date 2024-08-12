import { Dialog, DialogPanel, DialogBackdrop } from "@headlessui/react";
import { useState, ChangeEvent, MouseEvent } from "react";
import { AdminAddUser, GetAllUsers } from "../../../utils";
import { useMutation } from "@apollo/client";
import { toast } from "react-toastify";

export const AdminAddUserModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  const [userFormData, setUserFormData] = useState({
    username: "",
    email: "",
    isAdmin: false,
  });

  const handleFormChange = (
    e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement>,
  ) => {
    setUserFormData({
      ...userFormData,
      [e.target.name]: e.target.value,
    });
  };

  const open = () => {
    setIsOpen(true);
  };

  const close = () => {
    setIsOpen(false);
    setUserFormData({
      username: "",
      email: "",
      isAdmin: false,
    });
  };

  const [adminAddUser] = useMutation(AdminAddUser, {
    onCompleted: () => {
      toast.success("User added successfully");
    },

    onError: (error) => {
      if (error.message.includes("E11000 duplicate key error collection")) {
        toast.error("User already exists");
      }
    },
  });

  const handleSaveChanges = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    adminAddUser({
      variables: {
        username: userFormData.username,
        email: userFormData.email,
        isAdmin: userFormData.isAdmin,
      },
      refetchQueries: [{ query: GetAllUsers }],
    });

    close();
  };

  const handleBoxCheck = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();

    setUserFormData({
      ...userFormData,
      isAdmin: true,
    });
  };

  return (
    <>
      <button
        onClick={open}
        className="rounded-md bg-base-200 py-2 px-4 text-sm font-bold text-base hover:bg-base-300 focus:outline-none"
      >
        Add User
      </button>

      <Dialog
        open={isOpen}
        as="div"
        className="relative z-10 focus:outline-none"
        onClose={close}
      >
        <DialogBackdrop className="fixed inset-0 bg-primary/90" />
        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4">
            <DialogPanel
              transition
              className="w-full max-w-md rounded-xl p-6 backdrop-blur-3xl duration-300 ease-out data-[closed]:transform-[scale(95%)] data-[closed]:opacity-0 border"
            >
              <h1 className="text-2xl font-medium">Add a new user</h1>
              <div className="mt-4">
                <label htmlFor="username">Username</label>
                <input
                  type="text"
                  name="username"
                  value={userFormData.username}
                  onChange={handleFormChange}
                  className="my-2 w-full rounded-md text-black py-1.5 px-3  shadow-black focus:outline-none"
                />
                <label htmlFor="email">Email</label>
                <input
                  type="text"
                  name="email"
                  value={userFormData.email}
                  onChange={handleFormChange}
                  className="my-2 w-full rounded-md  py-1.5 px-3 shadow-black text-black focus:outline-none"
                />
                <div className="flex gap-2 my-2 py-1.5">
                  <label htmlFor="isAdmin">Admin?</label>
                  <input
                    type="checkbox"
                    name="isAdmin"
                    onChange={handleBoxCheck}
                    className="checkbox"
                  />
                </div>
              </div>
              <div className="mt-4 flex gap-4">
                <button className="btn btn-primary" onClick={handleSaveChanges}>
                  Save Changes
                </button>
                <button className="btn btn-ghost" onClick={close}>
                  Cancel
                </button>
              </div>
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </>
  );
};
