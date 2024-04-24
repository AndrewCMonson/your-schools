import { useState } from "react";
import { useMutation } from "@apollo/client";
import { UPDATE_USER_INFO } from "../../utils/Graphql/";
import { useSessionStore } from "../../stores";

type Props = {
  data: any;
};

export const AccountSettingsForm = ({ data }: Props) => {
  const [editable, setEditable] = useState<boolean>(false);
  const [passwordEditable, setPasswordEditable] = useState<boolean>(false);
  const { setUser } = useSessionStore();
  const [userInfo, setUserInfo] = useState<any>({
    email: data.email,
    username: data.username,
    zipcode: data.zipcode,
  });
  const [updateUserInfo] = useMutation(UPDATE_USER_INFO, {
    onCompleted: ({ updateUserInfo }) => {
      setUser({
        email: updateUserInfo.email,
        username: updateUserInfo.username,
        zipcode: updateUserInfo.zipcode,
      });
    },
    onError: (error) => {
      console.error(error);
    },
  });

  const handlePasswordEditButtonClick = () => {
    setPasswordEditable(!passwordEditable);
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
                placeholder={!editable ? data.email : "Enter new email"}
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
                placeholder={!editable ? data.username : "Enter new email"}
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
            />
            {passwordEditable && (
              <>
                <label className="label">
                  <span className="label-text">Confirm Password</span>
                </label>
                <input
                  name="confirmPassword"
                  type="password"
                  placeholder="********"
                  className="input input-bordered"
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
              placeholder={!editable ? data.zipcode : "Enter your zipcode"}
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