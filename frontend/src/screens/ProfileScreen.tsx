import { ReactElement } from "react";
import { useGetMe } from "../hooks";
import { AccountSettingsForm } from "../components";
import { User } from "../__generatedTypes__/graphql";

export const ProfileScreen = (): ReactElement => {
  const { loading, error, data } = useGetMe();

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <section
      id="profileScreen"
      className="flex flex-col items-center overflow-auto w-100 pt-5 bg-base-200"
    >
      <AccountSettingsForm data={data as User} />
    </section>
  );
};

/*

User profile contents:

Preferences: { light/dark mode, username, email, password, location(zipcode), type of schools?, option to add children }
Favorites: { list of favorite schools }




*/
