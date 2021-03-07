import React from "react";
// import { capitalize } from "lodash";
// import { routes } from "../config";
import { NavItem } from "./NavItem";
import { Nav } from "./index";
import { Link } from "gatsby";

export const Navigation = () => {
  return (
    <Nav>
      <ul>
        <li key={"design"}>
          <Link to={"/design"}>
            <NavItem
              isActive={window.location.pathname === "/design"}
              name={"Design"}
            />
          </Link>
        </li>
        <li key={"about"}>
          <Link to={"/about"}>
            <NavItem
              isActive={window.location.pathname === "/about"}
              name={"About"}
            />
          </Link>
        </li>
        {/*{routes*/}
        {/*  .filter(({ nav }) => nav)*/}
        {/*  .map((route) => (*/}
        {/*    <li key={route.name}>*/}
        {/*      <Link to={route.path}>*/}
        {/*        <NavItem*/}
        {/*          isActive={route.path === location.pathname}*/}
        {/*          name={route.name}*/}
        {/*        />*/}
        {/*      </Link>*/}
        {/*    </li>*/}
        {/*  ))}*/}
      </ul>
    </Nav>
  );
};
