import React from "react";
import { Item } from "./Item";
import styled from "styled-components";

export const Container = styled.div`
  .item-title {
    margin-bottom: ${({ selected }) => (selected !== null ? "2rem" : "0")};
  }

  .block:not(:last-child) {
    margin-bottom: 2rem;
  }
`;

export const ItemList = ({ data }) => {
  return (
    <Container>
      {data.map((item, index) => (
        <Item
          className="item"
          key={`item-${index}`}
          index={index}
          data={item}
        />
      ))}
    </Container>
  );
};
