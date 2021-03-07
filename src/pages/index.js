import * as React from "react";
import Layout from "../components/Layout";
import { Col, Row } from "antd";
import { Description } from "../components";

// markup
const Home = () => {
  return (
    <Layout>
      <Row>
        <Col span={12}>
          <Description>
            <>
              I’m Rose. I’m a strategist and designer living in San Francisco,
              California.
              <br />
              <br />I like to do a lot of stuff and I use this website as my
              highlight reel, so feel free to peruse.
            </>
          </Description>
        </Col>
      </Row>
    </Layout>
  );
};

export default Home;
