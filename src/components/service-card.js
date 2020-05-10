import React from 'react';
import Img from 'gatsby-image';
import {
  Card,
  CardTitle,
  CardBody,
  CardText
} from 'reactstrap';

const ServiceCard = props => (
  <Card
    className={`service-card${props.page === 'index'
      ? '-index'
      : ''} border rounded bg-white h-100`}>
    <Img
      className="rounded-top image-angle"
      fluid={props.image} />
    <CardBody>
      <CardTitle>
        <h3>
          {props.title}
        </h3>
      </CardTitle>
      <CardText>
        {props.description}
      </CardText>
    </CardBody>
  </Card>
);

export default ServiceCard;
