import React from 'react';
import { Row, Col } from 'reactstrap';
import { Heading1 } from "./homeStyledComponents.js";

const WhatWeDo = (props) => {
  const { domains } = props;

  return (
    <section id="clientsSlide" className="section-home ">
      <Heading1>What We Do</Heading1>
      <Row>
        <Col md={2} xs={2} sm={2} />
        <Col xs={8} sm={10} md={8}>
          <Row>
            {domains.map(domain => {
              return <Col sm={6} md={4} xs={10} className="pb-14" key={domain.id}>
                <div className="border-2">
                  <Row>
                    <Col md={12}>
                      <img src={require(`../../assetes/images/home/${domain.logo}`)} />
                    </Col>
                  </Row>
                  <Row className="bg-white mx-auto text-center h-52">
                    <Col md={12} style={{ fontSize: 20, color: "#7E88A5" }} className="m-auto">
                      {domain.title}
                    </Col>
                    <Col md={12} style={{ fontSize: 12 }}>
                      {domain.subTitle}
                    </Col>
                  </Row>
                </div>
              </Col>
            })}
          </Row>
        </Col>
        <Col sm={1} md={2} xs={2} />
      </Row>
    </section>
  )
}

WhatWeDo.defaultProps = {
  domains: [
    {
      logo: "domain.png",
      title: "Simplify Domain Complexities",
      subTitle: "Focus on simplifying complexities in our client's industry through intelligent technological intervention"
    },
    {
      logo: "IPmultiplier.png",
      title: "IP Multiplier",
      subTitle: "Build brand and business value to develop proprietary intellectual property assets."
    },
    {
      logo: "agile.png",
      title: "Agile Process",
      subTitle: "Follow AGILE processes for rapid, high quality and timely delivery with no surprises."
    },
    {
      logo: "architecture.png",
      title: "Scalable Architecture",
      subTitle: "Enable our solutions to sustain, grow and consistently perform at large scale of data and consumers"
    },
    {
      logo: "Accelerate.png",
      title: "Accelerate Time to Market",
      subTitle: "Ensure swift ‘Concept to Code’ delivery to ensure our clients beat their competition to market."
    },
    {
      logo: "Rescue.png",
      title: "Rescue Missions",
      subTitle: "Re-engineer existing inefficient architectures with zero down-time and complete data"
    }
  ]
}

export default WhatWeDo;