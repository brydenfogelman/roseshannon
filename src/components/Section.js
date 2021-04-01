import React from "react";
import { Col, Row } from "antd";

export const Section = ({ title, children }) => {
  return (
    <div className="block">
      <Row>
        <Col span={4}>
          <h1>{title}</h1>
        </Col>
        <Col span={20}>
          {children}
        </Col>
      </Row>
    </div>
  );
};
