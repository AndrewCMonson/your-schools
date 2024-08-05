import { useState, ChangeEvent } from "react";
import { useMutation } from "@apollo/client";
import { useFragment } from "../../__generatedTypes__";
import { UpdateUserInfo, UpdateUserPassword } from "../../utils/Graphql/";
import { useSessionStore } from "../../stores";
import { toast } from "react-toastify";
import { useGetMe } from "../../hooks";
import { UserDetailsFragment } from "../../utils/Graphql/queries";

export const AccountSettingsForm = () => {
  const { loading, error, data } = useGetMe();
  const user = useFragment(UserDetailsFragment, data);
  const [editable, setEditable] = useState<boolean>(false);
  const [passwordEditable, setPasswordEditable] = useState<boolean>(false);
  const { setUser } = useSessionStore();
  const [userInfo, setUserInfo] = useState<any>({
    email: user?.email,
    username: user?.username,
    zipcode: user?.zipcode,
    theme: user?.theme,
    password: "",
    newPassword: "",
  });

  const [updateUserInfo] = useMutation(UpdateUserInfo, {
    onCompleted: ({ updateUserInfo }) => {
      setUser({
        email: updateUserInfo.email,
        username: updateUserInfo.username,
        zipcode: updateUserInfo.zipcode,
        theme: updateUserInfo.theme,
        isAdmin: user?.isAdmin,
      });
    },
    onError: (error) => {
      toast.error(error.message);
      console.error(error);
    },
  });

  const [updateUserPassword] = useMutation(UpdateUserPassword, {
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
        theme: userInfo.theme,
      },
    });
    setEditable(!editable);
  };

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setUserInfo({ ...userInfo, [name]: value });
  };

  const handleThemeChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const { value } = event.target;
    setUserInfo({ ...userInfo, theme: value });
  };

  if (!user || loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <>
      <div className="card shrink-0 shadow-2xl bg-base-100 m-4 lg:m-0">
        <div className="card-body">
          <div>
            <h1 className="font-bold text-2xl lg:text-3xl text-center">
              Account Settings
            </h1>
          </div>
          <div className="flex flex-col lg:flex-row gap-4">
            <div className="form-control lg:w-1/2">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                name="email"
                type="email"
                placeholder={
                  !editable ? user.email ?? "" : user.email ?? "Enter new email"
                }
                className="input input-bordered"
                disabled={!editable}
                value={userInfo.email}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-control lg:w-1/2">
              <label className="label">
                <span className="label-text">Username</span>
              </label>
              <input
                name="username"
                type="text"
                placeholder={
                  !editable
                    ? user.username ?? ""
                    : user.username ?? "Enter new username"
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
              <span className="label-text">
                {passwordEditable ? "Current Password" : "Password"}
              </span>
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
                  <span className="label-text">New Password</span>
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
                !editable ? user.zipcode ?? "" : user.zipcode ?? "Enter zipcode"
              }
              className="input input-bordered"
              disabled={!editable}
              value={userInfo.zipcode}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label className="label">
              <span className="label-text">Theme</span>
            </label>
            <select
              className="select select-md select-bordered w-full"
              defaultValue={`${user.theme}`}
              onChange={handleThemeChange}
              disabled={!editable}
            >
              <option value="darkTheme">Dark</option>
              <option value="lightTheme">Light</option>
            </select>
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
