import { useState } from "react";
import { useMutation } from "@apollo/client";
import { UPDATE_USER_INFO, UPDATE_USER_PASSWORD } from "../../utils/Graphql/";
import { useSessionStore } from "../../stores";
import { toast } from "react-toastify";
import { UserDetailsFragment } from "../../__generatedTypes__/graphql";

type Props = {
  user: UserDetailsFragment;
};

export const AccountSettingsForm = ({ user }: Props) => {
  const [editable, setEditable] = useState<boolean>(false);
  const [passwordEditable, setPasswordEditable] = useState<boolean>(false);
  const { setUser } = useSessionStore();
  const [userInfo, setUserInfo] = useState<any>({
    email: user.email,
    username: user.username,
    zipcode: user.zipcode || "",
    password: "",
    newPassword: "",
  });

  const [updateUserInfo] = useMutation(UPDATE_USER_INFO, {
    onCompleted: ({ updateUserInfo }) => {
      setUser({
        email: updateUserInfo.email,
        username: updateUserInfo.username,
        zipcode: updateUserInfo.zipcode,
      });
    },
    // TODO: handle onError
    onError: (error) => {
      console.error(error);
    },
  });

  const [updateUserPassword] = useMutation(UPDATE_USER_PASSWORD, {
    onCompleted: () => {
      setUserInfo({
        ...userInfo,
        password: "",
        newPassword: "",
      });
      setPasswordEditable(!passwordEditable);
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });

  const handlePasswordEditButtonClick = () => {
    setPasswordEditable(!passwordEditable);
  };

  const handlePasswordSaveButtonClick = () => {
    updateUserPassword({
      variables: {
        password: userInfo.password,
        newPassword: userInfo.newPassword,
      },
    });
  };

  const handleEditButtonClick = () => {
    setEditable(!editable);
  };

  const handleSaveButtonClick = () => {
    updateUserInfo({
      variables: {
        email: userInfo.email,
        username: userInfo.username,
        zipcode: userInfo.zipcode,
      },
    });
    setEditable(!editable);
  };

  const handleInputChange = (event: any) => {
    const { name, value } = event.target;
    setUserInfo({ ...userInfo, [name]: value });
  };

  return (
    <>
      <div className="card shrink-0  shadow-2xl bg-base-100">
        <div className="card-body">
          <div>
            <h1 className="font-bold text-2xl lg:text-3xl">Account Settings</h1>
          </div>
          <div className="flex gap-4">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                name="email"
                type="email"
                placeholder={!editable ? user.email ?? "" : "Enter new email"}
                className="input input-bordered"
                disabled={!editable}
                value={userInfo.email}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Username</span>
              </label>
              <input
                name="username"
                type="text"
                placeholder={
                  !editable ? user.username ?? "" : "Enter new username"
                }
                className="input input-bordered"
                disabled={!editable}
                value={userInfo.username}
                onChange={handleInputChange}
              />
            </div>
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              name="password"
              type="password"
              placeholder="********"
              className="input input-bordered"
              disabled={!passwordEditable}
              value={userInfo.password}
              onChange={handleInputChange}
            />
            {passwordEditable && (
              <>
                <label className="label">
                  <span className="label-text">Confirm Password</span>
                </label>
                <input
                  name="newPassword"
                  type="password"
                  placeholder="********"
                  className="input input-bordered"
                  value={userInfo.newPassword}
                  onChange={handleInputChange}
                />
              </>
            )}
            <div>
              {!passwordEditable ? (
                <button
                  className="btn btn-sm btn-ghost mt-0.5"
                  onClick={handlePasswordEditButtonClick}
                >
                  Change Password
                </button>
              ) : (
                <>
                  <button
                    className="btn btn-sm btn-primary mt-0.5"
                    onClick={handlePasswordSaveButtonClick}
                    // onClick for saving password via mutation
                  >
                    Save Password
                  </button>
                  <button
                    className="btn btn-sm btn-ghost mt-0.5"
                    onClick={handlePasswordEditButtonClick}
                  >
                    Cancel
                  </button>
                </>
              )}
            </div>
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Zipcode</span>
            </label>
            <input
              name="zipcode"
              type="text"
              placeholder={
                !editable ? user.zipcode ?? "" : "Enter your zipcode"
              }
              className="input input-bordered"
              disabled={!editable}
              value={userInfo.zipcode}
              onChange={handleInputChange}
            />
          </div>
          {!editable ? (
            <div className="form-control mt-6">
              <button
                className="btn btn-primary"
                onClick={handleEditButtonClick}
              >
                Edit
              </button>
            </div>
          ) : (
            <div className="form-control mt-6">
              <button
                className="btn btn-primary"
                onClick={handleSaveButtonClick}
              >
                Save
              </button>
              <button className="btn btn-ghost" onClick={handleEditButtonClick}>
                Cancel
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};
