import React, { useState, useEffect, useContext, createContext, Suspense } from "react"
// import moment from "moment";

/** @jsxRuntime classic */
import { ThemeProvider, jsx, Styled, useThemeUI } from "theme-ui"
import { Flex, Box, Button, Text, Textarea, Image, Spinner, Grid, Input } from "@theme-ui/components";

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import 'bootstrap/dist/css/bootstrap.min.css';



let App

// ---------------------------------------------------------------------
// ---------------------------------------------------------------------

const Body = props => {
  const Estilo = useThemeUI().theme.styles
  const [Loading, setLoading] = props.useContextLocal.Loading.DataMain
  const [LoadingSecc, setLoadingSecc] = props.useContextLocal.Loading.DataMain

  // const [Cupon, setCupon] = props.useContextLocal.Cupon

  const [Registro, setRegistro] = props.useContext.Registro

  const Images = props.useContext.Images

  const [Detalle, setDetalle] = props.useContext.Detalle;
  const [Editado, setEditado] = props.useContext.Editado;



   const [SponsorCupon] = props.useContext.SponsorCupon



// ----------------------------------

useEffect(() => {

 // props.useAcciones.getPage({id:props.pageid})

}, [])



// -----------------



const Modulo1  = () => {

  return (
    <div>

      {/* <Grid bg="#999999" css={{ maxWidth: "610px" }}>
                  
        <Flex sx={{ width: "100%" }}>
          <Box sx={{ width: "100%" }}>
            <Text sx={Estilo.msecc2}>{"Patrocinador"}</Text>
          </Box>
        </Flex>
      
      </Grid> */}


      <Box css={{ height: 13 }} />


      <Flex sx={{ width: "100%" }}>
        <Box
          //bg="primary"
          sx={{
            fontWeight: "normal",
            fontSize: 1,
            color: "text",
            fontFamily: "body",
            width: "100%"
          }}
        >



            
            <Flex sx={{ width: "100%" }}>
              <Box sx={{ width: "100%" }}>
                <Text sx={Estilo.md1b}>{"Este evento no tiene costo para ti gracias a :"}</Text>
              </Box>
            </Flex>


    
            <Flex sx={{ width: "100%" }}>

              <Box sx={{ width: "100%" }}>


                <Button sx={{width : "33%", bg: "transparent"}} >

                  <Image 
                    src={SponsorCupon.Logo}
                    sx={{borderRadius: 5}}
                    mr={30}
                    loading="lazy"
                  />
              <Box sx={{ width: "100%" }}>

                  <Text sx={Estilo.t2s2}>{SponsorCupon.Titulo}</Text>
                  </Box>
                </Button>

              </Box>

             </Flex>



        </Box>
      </Flex>
    </div>
  )
}

// -----------------



const Modulo2  = () => {

  return (
    <div>

      {/* <Grid bg="#999999" css={{ maxWidth: "610px" }}>
                  
        <Flex sx={{ width: "100%" }}>
          <Box sx={{ width: "100%" }}>
            <Text sx={Estilo.msecc2}>{"Patrocinador"}</Text>
          </Box>
        </Flex>
      
      </Grid> */}




      <Flex sx={{ width: "100%" }}>
        <Box
          //bg="primary"
          sx={{
            fontWeight: "normal",
            fontSize: 1,
            color: "text",
            fontFamily: "body",
            width: "100%"
          }}
        >

      <Grid  css={{ maxWidth: "610px" }}>
            
            <Flex sx={{ width: "100%" }}>
              <Box sx={{ width: "100%" }}>
                <Text sx={Estilo.md1b}>{"Este cupón es gracias a:"}</Text>
              </Box>
            </Flex>

          </Grid>

          <Grid  css={{ maxWidth: "610px" }}>
    
            <Flex sx={{ width: "100%" }}>

              <Box sx={{ width: "100%" }}>


                <Button sx={{width : "33%", bg: "transparent"}} >

                  <Image 
                    src={SponsorCupon.Logo}

                    sx={{borderRadius: 5}}
                    mr={30}
                    loading="lazy"
                  />

                  <Text sx={Estilo.t2s2}>{SponsorCupon.Titulo}</Text>
                
                </Button>

              </Box>

             </Flex>

          </Grid>

          
      <Box css={{ height: 13 }} />

        </Box>
      </Flex>
    </div>
  )
}






 
 try {

  return (
    <div>

      {Loading ? <Spinner size={17} ml={3} /> : 
        <div>

          { (props.CompStatus.sponsor()===1) ? Modulo1() : <div/>}
          { (props.CompStatus.sponsor()===2) ? Modulo2() : <div/>}
          {/*  {Modulo1()} */}

        </div>
      }

    </div>
  )
  
} catch (e) {
  console.error(e);
}
}

// ---------------------------------------------------------------------
// -----------------------------------------------------------------------

export default (App = props => {
return (
  <Row >
    <Body {...props} />
  </Row>
);
});

// -----------------------------------------------------------------------


