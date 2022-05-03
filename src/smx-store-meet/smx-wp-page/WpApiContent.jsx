import React from "react";
import parse from "html-react-parser";

import "../styles.css";
import { Grid, Flex, Box, Button, Text, Image, Spinner, Input } from "@theme-ui/components"

import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css"


export default function WpApiContent(props) {

  console.log(props.content)

  return parse(props.content, {
    replace: (domNode) => {

      if(domNode.name === "script" && domNode.attribs.id === "galeria") {

        const images = [

          {original: domNode.attribs.foto1},
          {original: domNode.attribs.foto2},
          {original: domNode.attribs.foto3},
          {original: domNode.attribs.foto4},
          {original: domNode.attribs.foto5},

        ]

         return (

          <div>
          
           <ImageGallery items={images} 
            showThumbnails={false}
            showFullscreenButton={false}
            autoPlay={true}
            slideInterval={7000}
           />

          </div>

         )

      }

    }
  });
}