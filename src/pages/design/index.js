import React from "react";
import { graphql } from "gatsby";
import Layout from "../../components/Layout";
import { ItemList } from "../../components/ItemList";

const Design = ({ data }) => {
  return (
    <Layout>
      <ItemList data={data.allMdx.edges} />
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
          }
        }
      }
    }
  }
`;

export default Design;
