import { Dialog, DialogPanel, DialogBackdrop } from "@headlessui/react";
import { useState, ChangeEvent, MouseEvent } from "react";
import { User as UserType } from "../../../__generatedTypes__/graphql";
import { UpdateUserInfo, GetAllUsers } from "../../../utils";
import { useMutation } from "@apollo/client";
import { toast } from "react-toastify";

interface AdminEditUserModalProps {
  user: UserType;
}

export const AdminEditUserModal = ({ user }: AdminEditUserModalProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const { id, username, email, theme, zipcode } = user;

  const [userFormData, setUserFormData] = useState({
    username: username || "",
    email: email || "",
    theme: theme || "",
    zipcode: zipcode || "",
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
  };

  const [updateUserInfo] = useMutation(UpdateUserInfo, {
    onCompleted: () => {
      toast.success("School info updated successfully");
    },

    onError: (error) => {
      toast.error(error.message);
    },
  });

  const handleSaveChanges = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    updateUserInfo({
      variables: {
        id: id,
        username: userFormData.username,
        email: userFormData.email,
        theme: userFormData.theme,
        zipcode: userFormData.zipcode,
      },
      refetchQueries: [{ query: GetAllUsers }],
    });

    close();
  };

  return (
    <>
      <button
        onClick={open}
        className="rounded-md bg-base-200 py-2 px-4 text-sm font-bold text-base hover:bg-base-300 focus:outline-none"
      >
        Edit User
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
              <h1 className="text-2xl font-medium">Edit User {username}</h1>
              <div className="mt-4">
                <label htmlFor="username">Username</label>
                <input
                  type="text"
                  name="username"
                  value={userFormData.username}
                  onChange={handleFormChange}
                  className="my-2 w-full rounded-md text-black py-1.5 px-3 shadow-black focus:outline-none"
                />
                <label htmlFor="email">Email</label>
                <input
                  type="text"
                  name="email"
                  value={userFormData.email}
                  onChange={handleFormChange}
                  className="my-2 w-full rounded-md  py-1.5 px-3 shadow-black text-black focus:outline-none"
                />
                <label htmlFor="theme">Theme</label>
                <select
                  name="theme"
                  value={userFormData.theme}
                  onChange={handleFormChange}
                  className="my-2 w-full rounded-md  py-1.5 px-3 shadow-black text-black focus:outline-none"
                >
                  <option value="lightTheme">Light</option>
                  <option value="darkTheme">Dark</option>
                </select>
                <label htmlFor="zipcode" className="">
                  Zipcode
                </label>
                <input
                  type="text"
                  name="zipcode"
                  value={userFormData.zipcode}
                  onChange={handleFormChange}
                  className="my-2 w-full rounded-md  py-1.5 px-3 shadow-black text-black focus:outline-none"
                />
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
