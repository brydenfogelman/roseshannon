import React from "react";
import { Col, Row } from "antd";
import styled from "styled-components";

const TitleWrapper = styled.div`
  @media only screen and (min-width: 992px) {
    width: 200px;
    margin-left: -200px;
  }
`;

export const Section = ({ title, children }) => {
  return (
    <div className="block">
      <Row>
        <Col>
          <TitleWrapper>
            <h1>{title}</h1>
          </TitleWrapper>
        </Col>
        <Col span={24}>{children}</Col>
      </Row>
    </div>
  );
};
