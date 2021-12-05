import * as React from "react";
import Layout from "../components/Layout";
import { Col, Row } from "antd";
import { Description } from "../components";
import { graphql } from "gatsby";
import { ItemList } from "../components/ItemList";

const Home = ({ data }) => {
  return (
    <Layout>
      <Row>
        <Col span={24}>
          <Description>
            <>
              Hello! I’m Rose. I’m a product designer living in San Francisco,
              California.
              <br />
              <br />I like to do a lot of stuff and I use this website as my
              highlight reel, so feel free to peruse.
              
              <br />
              <br />
              <br />
              <br />
            </>
          </Description>
        </Col>
      </Row>
      <Row>
        <Col span={24}>
          <ItemList data={data.allMdx.edges} />
        </Col>
      </Row>
    </Layout>
  );
};

export const query = graphql`
  query {
    allMdx(
      filter: { fileAbsolutePath: { regex: "/design/" } }
      sort: { order: ASC, fields: frontmatter___order }
    ) {
      edges {
        node {
          fileAbsolutePath
          frontmatter {
            title
            subheader
            description
            path
            image
            order
          }
        }
      }
    }
  }
`;

export default Home;
