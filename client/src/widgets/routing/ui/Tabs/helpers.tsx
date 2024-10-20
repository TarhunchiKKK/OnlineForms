import { NavLink } from "react-router-dom";
import { TTab } from "./types";

export const renderTab = (tab: TTab, index: number) => {
    return (
        <li key={index}>
            <NavLink
                to={tab.route}
                className={({ isActive }) =>
                    `${isActive ? "text-green-secondary underline" : ""} cursor-pointer`
                }
            >
                {tab.title}
            </NavLink>
        </li>
    );
};
