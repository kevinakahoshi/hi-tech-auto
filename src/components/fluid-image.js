import React from "react"
import Img from "gatsby-image"


const FluidImage = props => {
  return <Img fluid={props.fluidImageProp} />;
}

export default FluidImage;
