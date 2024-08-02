import { Dispatch, MouseEvent, SetStateAction } from "react";

interface AdminTabsProps {
  screenSelected: string;
  setScreenSelected: Dispatch<SetStateAction<string>>;
}
export const AdminTabs = ({
  screenSelected,
  setScreenSelected,
}: AdminTabsProps) => {
  const handleTabClick = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    setScreenSelected(e.currentTarget.id);
  };
  return (
    <div>
      <div role="tablist" className="tabs tabs-boxed mx-10">
        <a
          role="tab"
          id="users"
          className={`tab ${screenSelected === "users" ? "tab-active" : null}`}
          onClick={handleTabClick}
        >
          Users
        </a>
        <a
          role="tab"
          className={`tab ${screenSelected === "schools" ? "tab-active" : null}`}
          id="schools"
          onClick={handleTabClick}
        >
          Schools
        </a>
      </div>
    </div>
  );
};
