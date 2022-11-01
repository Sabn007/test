import React from "react";
import { NavLink } from "react-router-dom";
import { MdSpaceDashboard } from "react-icons/md";
import { BiUserCircle } from "react-icons/bi";


const SideBar = ({ responsive, setResponsive }: any) => {

  const navList = [
    {
      id: 0,
      icon: MdSpaceDashboard,
      title: "Dashboard",
      path: "/",
    },
    {
      id: 1,
      icon: BiUserCircle,
      title: "Load Tracker",
      path: "/load-tracker",
    },
    {
      id: 1,
      icon: BiUserCircle,
      title: "User Request",
      path: "/user-request",
    },
    {
      id: 1,
      icon: BiUserCircle,
      title: "Shipper",
      path: "/shipper",
    },
    {
      id: 1,
      icon: BiUserCircle,
      title: "Carrier",
      path: "/carrier",
    },
    {
      id: 1,
      icon: BiUserCircle,
      title: "Vehicle",
      path: "/vehicle",
    },
    {
      id: 1,
      icon: BiUserCircle,
      title: "Driver",
      path: "/driver",
    },
    {
      id: 1,
      icon: BiUserCircle,
      title: "Complain",
      path: "/complain",
    },
    {
      id: 1,
      icon: BiUserCircle,
      title: "Logout",
      path: "/",
    },

   
  ];

  let Logo = require("../../assets/images/mainImage.png");

  return (
    <div className={"flex__column sidebar__container "}>
      <div className={"sidebar__logo flex "}>
        <img src={Logo} alt="hero" />{" "}
        <span className="ml-3 text-xl mt-3">
          {" "}
          <span style={{ color: "#274AD8" }}>Load</span>
          <span style={{ color: "#EC4A47" }}>Nepal</span>
        </span>
      </div>

      {navList.map((e) => (
        <NavLink
          to={e.path}
          key={e.id}
          className="flex items-center sidebar__list"
        >
          {<e.icon size={20} />}

          <span className={`${"sidebar__list__text"}`}>{e.title}</span>
        </NavLink>
      ))}
     
    </div>
  );
};

export default React.memo(SideBar);
