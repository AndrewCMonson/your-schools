import { Dialog, DialogPanel, DialogBackdrop } from "@headlessui/react";
import { useState, ChangeEvent, MouseEvent } from "react";
import { School as SchoolType } from "../../__generatedTypes__/graphql";
import { UpdateSchoolInfo } from "../../utils";
import { useMutation } from "@apollo/client";
import { toast } from "react-toastify";
import { stateList } from "../../utils/stateList";

interface SchoolModalProps {
  school: SchoolType;
}

export const AdminSchoolModal = ({ school }: SchoolModalProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const [schoolFormData, setSchoolFormData] = useState({
    name: school?.name || "",
    address: school?.address || "",
    city: school?.city || "",
    state: school?.state || "",
    zipcode: school?.zipcode || "",
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

  const [updateSchoolInfo] = useMutation(UpdateSchoolInfo, {
    variables: {
      id: school.id,
      name: schoolFormData.name,
      address: schoolFormData.address,
      city: schoolFormData.city,
      state: schoolFormData.state,
      zipcode: schoolFormData.zipcode,
    },

    onCompleted: (data) => {
      console.log(data);
      toast.success("School info updated successfully");
    },

    onError: (error) => {
      console.error(error);
      toast.error("Failed to update school info");
    },
  });

  const handleSaveChanges = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    updateSchoolInfo();

    close();
  };

  return (
    <>
      <button
        onClick={open}
        className="rounded-md bg-base-200 py-2 px-4 text-sm font-bold text-base hover:bg-base-300 focus:outline-none"
      >
        Edit School
      </button>

      <Dialog
        open={isOpen}
        as="div"
        className="relative z-10 focus:outline-none"
        onClose={close}
      >
        <DialogBackdrop className="fixed inset-0 bg-black/50" />
        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4">
            <DialogPanel
              transition
              className="w-full max-w-md rounded-xl bg-base-200 p-6 backdrop-blur-2xl duration-300 ease-out data-[closed]:transform-[scale(95%)] data-[closed]:opacity-0"
            >
              <h1 className="text-2xl font-medium">{school.name}</h1>
              <input
                type="text"
                name="name"
                value={schoolFormData.name}
                onChange={handleFormChange}
                className="mt-4 w-full rounded-md bg-base-100 py-1.5 px-3 text-sm text-white shadow-black focus:outline-none"
              />
              <input
                type="text"
                name="address"
                value={schoolFormData.address}
                onChange={handleFormChange}
                className="mt-4 w-full rounded-md bg-base-100 py-1.5 px-3 text-sm text-white shadow-black focus:outline-none"
              />
              <input
                type="text"
                name="city"
                value={schoolFormData.city}
                onChange={handleFormChange}
                className="mt-4 w-full rounded-md bg-base-100 py-1.5 px-3 text-sm text-white shadow-black focus:outline-none"
              />
              <select
                name="state"
                value={schoolFormData.state}
                onChange={handleFormChange}
                className="mt-4 w-full rounded-md bg-base-100 py-1.5 px-3 text-sm text-white shadow-black focus:outline-none"
              >
                {stateList.map((state) => (
                  <option key={state} value={state}>
                    {state}
                  </option>
                ))}
              </select>
              <input
                type="text"
                name="zipcode"
                value={schoolFormData.zipcode}
                onChange={handleFormChange}
                className="mt-4 w-full rounded-md bg-base-100 py-1.5 px-3 text-sm text-white shadow-black focus:outline-none"
              />
              <div className="mt-4 flex gap-4">
                <button
                  className="inline-flex items-center gap-2 rounded-md bg-base-100 py-1.5 px-3 hover:bg-base-300 font-bold"
                  onClick={handleSaveChanges}
                >
                  Save Changes
                </button>
                <button
                  className="inline-flex items-center gap-2 rounded-md bg-base-100 py-1.5 px-3 hover:bg-base-300 font-bold"
                  onClick={close}
                >
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
