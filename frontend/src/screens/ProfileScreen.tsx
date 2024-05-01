import { ReactElement, useState } from "react";
import { AccountSettingsForm } from "../components";
import { Favorites } from "../components/";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useSessionStore } from "../stores";

export const ProfileScreen = (): ReactElement => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [sort, setSort] = useState<string>(searchParams.get("sort") || "");
  const { user } = useSessionStore();
  const navigate = useNavigate();

  if (!user) {
    navigate("/login");
  }

  return (
    <section
      id="profileScreen"
      className="min-h-full flex flex-col xl:flex-row justify-around items-center overflow-auto w-100 pt-5 bg-base-200"
    >
      <div className="container mx-auto flex flex-col xl:flex-row gap-4 justify-center">
        <AccountSettingsForm />
        <Favorites
          sort={sort}
          setSort={setSort}
          setSearchParams={setSearchParams}
        />
      </div>
    </section>
  );
};
