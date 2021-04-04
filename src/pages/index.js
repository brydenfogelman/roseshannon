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
        <Col span={12}>
          <Description>
            <>
              I’m Rose. I’m a product designer living in Vancouver, British
              Columbia.
              <br />
              <br />I like to do a lot of stuff and I use this website as my
              highlight reel, so feel free to peruse.
            </>
          </Description>
        </Col>
      </Row>
      <Row>
        <Col span={24}>
          <ItemList
            data={data.allMdx.edges.sort(
              (a, b) => a.node.frontmatter.order < b.node.frontmatter.order
            )}
          />
        </Col>
      </Row>
    </Layout>
  );
};

export const query = graphql`
  query {
    allMdx(filter: { fileAbsolutePath: { regex: "/design/" } }) {
      edges {
        node {
          fileAbsolutePath
          frontmatter {
            title
            subheader
            description
            path
            image
          }
        }
      }
    }
  }
`;

export default Home;
