import React from "react";
import { Col, Row } from "antd";
import styled from "styled-components";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { graphql, useStaticQuery } from "gatsby";

const Wrapper = styled.div`
  .image-container {
    display: flex;
    justify-content: center;
    margin-bottom: 1rem;

    .image:not(:last-child) {
      margin-right: 6rem;
    }

    img {
      max-width: 100%;
    }
  }

  .no-image {
    background: #d8d8d8;
    height: 400px;
    width: 100%;
    border: 2px solid #979797;
  }
`;

const getImageNodeFromData = (data, key) => {
  return data.allFile.edges.filter(({ node }) => node.name === key)[0].node;
};

const imageFileQuery = graphql`
  query {
    allFile(filter: { sourceInstanceName: { eq: "images" } }) {
      edges {
        node {
          name
          childImageSharp {
            gatsbyImageData(placeholder: BLURRED)
          }
        }
      }
    }
  }
`;

// TODO captions
export const Image = (props) => {
  const { alt = "", ...rest } = props;
  const src = props.src.split(".")[0];
  const data = useStaticQuery(imageFileQuery);
  const image = getImage(getImageNodeFromData(data, src));
  return (
    <Wrapper className="block">
      <Row>
        <Col span={24}>
          <div className="image-container">
            <div className="image" key={`image/${src}`}>
              <GatsbyImage image={image} alt={alt} {...rest} />
            </div>
          </div>
        </Col>
      </Row>
    </Wrapper>
  );
};
