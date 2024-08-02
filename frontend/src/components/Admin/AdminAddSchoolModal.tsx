import { Dialog, DialogPanel, DialogBackdrop } from "@headlessui/react";
import { useState, ChangeEvent, MouseEvent } from "react";
import { AddSchool, GetAllSchools } from "../../utils";
import { useMutation } from "@apollo/client";
import { toast } from "react-toastify";
import { stateList } from "../../utils/stateList";

export const AdminAddSchoolModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  const [schoolFormData, setSchoolFormData] = useState({
    name: "",
    address: "",
    city: "",
    state: "",
    zipcode: "",
  });

  const handleFormChange = (
    e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement>,
  ) => {
    setSchoolFormData({
      ...schoolFormData,
      [e.target.name]: e.target.value,
    });
  };

  const open = () => {
    setIsOpen(true);
  };

  const close = () => {
    setIsOpen(false);
  };

  const [addSchool] = useMutation(AddSchool, {
    onCompleted: (data) => {
      console.log(data);
      toast.success("School added successfully");
    },

    onError: (error) => {
      console.error(error);
      toast.error(error.message);
    },
  });

  const handleSaveChanges = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    addSchool({
      variables: {
        name: schoolFormData.name,
        address: schoolFormData.address,
        city: schoolFormData.city,
        state: schoolFormData.state,
        zipcode: schoolFormData.zipcode,
      },
      refetchQueries: [{ query: GetAllSchools }],
    });

    close();
  };

  return (
    <>
      <button
        onClick={open}
        className="rounded-md bg-base-200 py-2 px-4 text-sm font-bold text-base hover:bg-base-300 focus:outline-none"
      >
        Add School
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
              <h1 className="text-2xl font-medium">Add a new school</h1>
              <div className="mt-4">
                <label htmlFor="name">School Name</label>
                <input
                  type="text"
                  name="name"
                  value={schoolFormData.name}
                  onChange={handleFormChange}
                  className="mb-2 w-full rounded-md text-black py-1.5 px-3 text-sm shadow-black focus:outline-none"
                />
                <label htmlFor="address">Address</label>
                <input
                  type="text"
                  name="address"
                  value={schoolFormData.address}
                  onChange={handleFormChange}
                  className="my-2 w-full rounded-md  py-1.5 px-3 shadow-black text-black focus:outline-none"
                />
                <label htmlFor="city">City</label>
                <input
                  type="text"
                  name="city"
                  value={schoolFormData.city}
                  onChange={handleFormChange}
                  className="my-2 w-full rounded-md  py-1.5 px-3 shadow-black text-black focus:outline-none"
                />
                <label htmlFor="state">State</label>
                <select
                  name="state"
                  value={schoolFormData.state}
                  onChange={handleFormChange}
                  className="my-2 w-full rounded-md  py-1.5 px-3 shadow-black text-black focus:outline-none"
                >
                  {stateList.map((state) => (
                    <option key={state} value={state}>
                      {state}
                    </option>
                  ))}
                </select>
                <label htmlFor="zipcode" className="">
                  Zipcode
                </label>
                <input
                  type="text"
                  name="zipcode"
                  value={schoolFormData.zipcode}
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
