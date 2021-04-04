import styled from "styled-components";
import { headerMedium } from "../styled";

export const Subheader = styled.div`
  color: ${(props) => props.theme.subheader};
  font-size: 1rem;
  font-weight: 500;
  font-family: BentonSans, sans-serif;
`;

export const Title = styled.h1`
  color: ${(props) => props.theme.title};
`;

export const Description = styled.div`
  ${headerMedium};
  font-size: 1.5rem;
  color: ${(props) => props.theme.primary};
`;

export const Nav = styled.div`
  ul {
    list-style: none;
    padding: 0;
  }
`;
