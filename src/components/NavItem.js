import styled from "styled-components";
import React from "react";
import arrow from "../assets/arrow.svg";
import grayArrow from "../assets/grayArrow.svg";
import { headerMedium } from "../styled";
import { useHover } from "../hooks/hover";

export const Wrapper = styled.div`
  ${headerMedium};
  font-size: 22px;
  color: ${({ theme, isActive }) => (isActive ? theme.primary : theme.light)};
  display: flex;
  width: 10rem;
  justify-content: space-between;
  // transition: all 0.3s ease-in-out;
  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme.primary};
  }
`;

export const NavItem = ({ isActive, name }) => {
  const [hoverRef, isHovered] = useHover();
  return (
    <Wrapper ref={hoverRef} isActive={isActive}>
      <div className="link">{name}</div>
      <img src={isActive || isHovered ? arrow : grayArrow} alt={"arrow"} />
    </Wrapper>
  );
};
