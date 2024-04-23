type Props = {
  data: any;
};

export const AccountSettingsForm = ({ data }: Props) => {
  return (
    <>
      <div className="card shrink-0  shadow-2xl bg-base-100">
        <div className="card-body">
          <div>
            <h1 className="font-bold text-2xl lg:text-3xl">Account Settings</h1>
          </div>
          <div>
            <label className="label">
              <span className="label-text">Username</span>
            </label>
            <div>{data.username}</div>
          </div>
        </div>
      </div>
    </>
  );
};
