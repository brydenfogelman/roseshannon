import React from "react";
import { ItemTitle } from "./ItemTitle";
import { get } from "lodash";
import styled from "styled-components";

const Wrapper = styled.div`
  margin-bottom: 3rem;

  .item-content {
    margin-bottom: 2rem;
  }
`;

export const Item = ({ index, data }) => {
  const content = get(data, "content", []);

  return (
    <Wrapper>
      <ItemTitle index={index + 1} {...data.node.frontmatter} />
      {/*{isSelected && (*/}
      {/*  <div className="item-content">*/}
      {/*    {content.map((item, index) => (*/}
      {/*      <Block key={`block-${index}`} {...item} />*/}
      {/*    ))}*/}
      {/*  </div>*/}
      {/*)}*/}
    </Wrapper>
  );
};
