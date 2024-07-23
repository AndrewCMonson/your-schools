import { Dialog, DialogPanel, DialogTitle } from "@headlessui/react";
import { useState, ChangeEvent, MouseEvent } from "react";
import { School as SchoolType } from "../../__generatedTypes__/graphql";
import { UpdateSchoolInfo } from "../../utils";
import { useMutation } from "@apollo/client";

interface SchoolModalProps {
  school: SchoolType;
}

export const SchoolModal = ({ school }: SchoolModalProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [schoolFormData, setSchoolFormData] = useState({
    name: school?.name || "",
    address: school?.address || "",
    city: school?.city || "",
    state: school?.state || "",
    zipcode: school?.zipcode || "",
  });

  const handleFormChange = (e: ChangeEvent<HTMLInputElement>) => {
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
    },

    onError: (error) => {
      console.error(error);
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
        className="rounded-md bg-black/20 py-2 px-4 text-sm font-medium text-white focus:outline-none data-[hover]:bg-black/30 data-[focus]:outline-1 data-[focus]:outline-white"
      >
        Edit School
      </button>

      <Dialog
        open={isOpen}
        as="div"
        className="relative z-10 focus:outline-none"
        onClose={close}
      >
        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4">
            <DialogPanel
              transition
              className="w-full max-w-md rounded-xl bg-white/5 p-6 backdrop-blur-2xl duration-300 ease-out data-[closed]:transform-[scale(95%)] data-[closed]:opacity-0"
            >
              <DialogTitle
                as="h3"
                className="text-base/7 font-medium text-white"
              >
                {school.name}
              </DialogTitle>
              <input
                type="text"
                name="name"
                value={schoolFormData.name}
                onChange={handleFormChange}
                className="mt-4 w-full rounded-md bg-gray-700 py-1.5 px-3 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:outline-none"
              />
              <input
                type="text"
                name="address"
                value={schoolFormData.address}
                onChange={handleFormChange}
                className="mt-4 w-full rounded-md bg-gray-700 py-1.5 px-3 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:outline-none"
              />
              <input
                type="text"
                name="city"
                value={schoolFormData.city}
                onChange={handleFormChange}
                className="mt-4 w-full rounded-md bg-gray-700 py-1.5 px-3 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:outline-none"
              />
              <input
                type="text"
                name="state"
                value={schoolFormData.state}
                onChange={handleFormChange}
                className="mt-4 w-full rounded-md bg-gray-700 py-1.5 px-3 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:outline-none"
              />
              <input
                type="text"
                name="zipcode"
                value={schoolFormData.zipcode}
                onChange={handleFormChange}
                className="mt-4 w-full rounded-md bg-gray-700 py-1.5 px-3 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:outline-none"
              />
              <div className="mt-4">
                <button
                  className="inline-flex items-center gap-2 rounded-md bg-gray-700 py-1.5 px-3 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-gray-600 data-[focus]:outline-1 data-[focus]:outline-white data-[open]:bg-gray-700"
                  onClick={handleSaveChanges}
                >
                  Save Changes
                </button>
                <button
                  className="inline-flex items-center gap-2 rounded-md bg-gray-700 py-1.5 px-3 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-gray-600 data-[focus]:outline-1 data-[focus]:outline-white data-[open]:bg-gray-700"
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
