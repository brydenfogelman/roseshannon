import React from "react";
import styled from "styled-components";
import { useHover } from "../hooks/hover";
import { Col, Row } from "antd";
import { Subheader } from "./index";
import { navigate } from "gatsby";

const Wrapper = styled.div`
  cursor: pointer;

  h1 {
    margin-bottom: 0;
  }

  .index {
    display: flex;
    h1 {
      margin: 0 auto auto;
      transition: all 0.3s ease-in-out;
      border-bottom: 3px solid
        ${({ isHovered, isSelected, theme }) =>
          isHovered || isSelected ? theme.text : theme.background};
    }
  }
`;

export const ItemTitle = ({ index, title, subheader, description, path }) => {
  const [hoverRef, isHovered] = useHover();

  return (
    <Wrapper
      className="item-title"
      ref={hoverRef}
      isHovered={isHovered}
      onClick={() => navigate(path)}
    >
      <Row>
        <Col span={3} offset={5}>
          <div className="index">
            <h1>{`${index}`.padStart(2, "0")}</h1>
          </div>
        </Col>
        <Col span={11}>
          <div className="info">
            <h1>{title}</h1>
            <Subheader>{subheader}</Subheader>
            <p>{description}</p>
          </div>
        </Col>
      </Row>
    </Wrapper>
  );
};
