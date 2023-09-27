import React from "react";
import { LuLampDesk } from "react-icons/lu";
import { BiGridAlt } from "react-icons/bi";
import { BiHelpCircle } from "react-icons/bi";
export const SidebarData = [
    {
        title: "Products",
        path: "/products",
        icon: <LuLampDesk />,
        cName: "nav-text"
    },
    {
        title: "Collections",
        path: "/collections",
        icon: <BiGridAlt />,
        cName: "nav-text"
    },
    {
        title: "About Us",
        path: "/about",
        icon: <BiHelpCircle />,
        cName: "nav-text"
    }
]