import React, { Fragment } from 'react'
import { Row, Col } from 'reactstrap';
import Media from "react-media";
import { Link } from "react-router-dom";

import successStoriesBg from "../../assets/images/home/successStoryBg.png";
import mobileSuccessStoriesBg from "../../assets/images/home/mob_sucess_stories.png";
import { ParallaxImg, Heading1Orange } from './homeStyledComponents';

const SuccessStories = () => {

  return <Media query="(max-width: 900px)">
    {matches =>
      matches ? (
        <Fragment>
          <ParallaxImg className="d-flex" height="160px" logo={mobileSuccessStoriesBg}>
            <Row className="m-auto">
              <Col xs={2} />
              <Col md={6} xs={4} >
                <Heading1Orange fontSize="31">Success Stories</Heading1Orange>
              </Col>
              <Col md={6} xs={8} />
            </Row>
          </ParallaxImg>
          <ul className="succss-stories">
            <li className="bullet font-weight-bold"><Link to="success_stories">Freedom from Diabetes</Link></li>
            {/* <li className="bullet font-weight-bold"><Link to="success_stories">Freedom from Diabetes</Link></li>
            <li className="bullet font-weight-bold"><Link to="success_stories">Freedom from Diabetes</Link></li>
            <li className="bullet font-weight-bold"><Link to="success_stories">Freedom from Diabetes</Link></li>
            <li className="bullet font-weight-bold"><Link to="success_stories">Freedom from Diabetes</Link></li> */}
          </ul>
        </Fragment>
      ) : (
          <ParallaxImg height="259px" logo={successStoriesBg}>
            <Row style={{ height: "inherit" }}>
              <Col md={6} className="d-flex justify-content-end align-items-center" >
                <Heading1Orange>Success Stories</Heading1Orange>
              </Col>
              <Col md={6} className="d-flex justify-content-start align-items-center">
                <ul className="w-100 text-white">
                  <li className="bullet font-weight-bold"><Link to="/success_stories" >Freedom from Diabetes</Link></li>
                  {/* <li className="bullet font-weight-bold"><Link to="" >Freedom from Diabetes</Link></li>
                  <li className="bullet font-weight-bold"><Link to="" >Freedom from Diabetes</Link></li>
                  <li className="bullet font-weight-bold"><Link to="" >Freedom from Diabetes</Link></li>
                  <li className="bullet font-weight-bold"><Link to="" >Freedom from Diabetes</Link></li> */}
                </ul>
              </Col>
            </Row>
          </ParallaxImg>
        )
    }
  </Media>
}

export default SuccessStories;
