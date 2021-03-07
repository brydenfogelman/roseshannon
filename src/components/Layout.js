import React from "react";
import { GlobalStyle, theme } from "../styled";
import styled, { ThemeProvider } from "styled-components";
import { Col, Row } from "antd";
import { graphql, Link, useStaticQuery } from "gatsby";
import { Title } from "./index";
import { Navigation } from "./Navigation";

const Wrapper = styled.div`
  padding-top: 4rem;
  margin-bottom: 4rem;

  .top {
    margin-bottom: 4rem;
  }
`;

export default function Layout({ children }) {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
  );

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Wrapper>
        <Row>
          <Col offset={4} span={16}>
            <Row className={"top"} justify={"space-between"}>
              <Col>
                <Link to={"/"}>
                  <Title> {data.site.siteMetadata.title}</Title>
                </Link>
              </Col>
              <Col>
                <Navigation />
              </Col>
            </Row>
            <Row justify={"center"}>
              <Col span={24}>{children}</Col>
            </Row>
          </Col>
        </Row>
      </Wrapper>
    </ThemeProvider>
  );
}
