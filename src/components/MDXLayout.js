import React from "react";
import { MDXProvider } from "@mdx-js/react";
import { Section } from "./Section";
import { Image } from "./Image";
import Layout from "./Layout";
import { Description, Subheader } from "./index";

const shortcodes = { Section, Image, Subheader, Description };

const MDXLayout = ({ children }) => {
  return (
    <Layout>
      <MDXProvider components={shortcodes}>{children}</MDXProvider>
    </Layout>
  );
};

export default MDXLayout;
