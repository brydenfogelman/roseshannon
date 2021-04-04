import React from "react";
import { NavItem } from "./NavItem";
import { Nav } from "./index";
import { Link } from "gatsby";
import { useLocation } from "@reach/router";

export const Navigation = () => {
  const location = useLocation();
  return (
    <Nav>
      <ul>
        <li key={"about"}>
          <Link to={"/about"}>
            <NavItem isActive={location.pathname === "/about"} name={"About"} />
          </Link>
        </li>
      </ul>
    </Nav>
  );
};
