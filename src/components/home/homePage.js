import React, { Fragment } from 'react'
import Media from 'react-media';
import { Link } from 'react-router-dom';
import { Button } from "reactstrap";

import mainImg from '../../assetes/images/black-bulb-image.png';
import logoM from '../../assetes/images/bulb-image-mobile.png';
import { ParallaxImg, BannerSubText, BannerText, ConctactUsRightText } from "./homeStyledComponents.js"
import * as routeConstants from "../../routeConstants.js";

const HomePage = () => {
  return (
    <div style={{ backgroundColor: "#333333" }}>
      <div style={{ height: 67 }} />
      <div className="row">
        <div className="col-md-6">
          <Media query="(max-width: 900px)">
            {matches =>
              matches ? (
                <ParallaxImg logo={logoM} height="411px" />
              ) : (
                  <ParallaxImg logo={mainImg} height="721px" />
                )
            }
          </Media>
        </div>
        <Media query="(max-width: 500px)">
          {matches =>
            matches ? (
              <div className="col-md-6 pl-4 banner-text-align">{BannerText1()}</div>
            ) : (
                <div className="col-md-6 m-auto">{BannerText1()}</div>
              )
          }
        </Media>
      </div>
    </div>
  )
}

const BR = <Media query="(max-width: 500px)">
  {matches =>
    matches ? (
      <br />
    ) : null
  }
</Media>

const BannerText1 = () => (
  <Fragment>
    <BannerText className="banner-text"> INNOVATION &amp; DISRUPTION </BannerText>
    <BannerSubText className="banner-subtext-padding">Is the way {BR} We change the Game</BannerSubText>

    <div className="text-white" >
      <Link to={routeConstants.CONTACT_US_URL} className="text-decoration-none">
        <Button color="danger" className="text-white border-radius font-weight-bold">Contact Us</Button>
      </Link>
      <ConctactUsRightText> to change yours </ConctactUsRightText>
    </div>
  </Fragment>
)

export default HomePage;
