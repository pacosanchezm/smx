import React, { useState, useEffect, useContext, createContext, Suspense } from "react"
// import moment from "moment";




import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
// import Col from 'react-bootstrap/Col'

/** @jsxRuntime classic */
import { ThemeProvider, jsx, Styled, useThemeUI } from "theme-ui"
import { Flex, Box, Button, Text, Textarea, Image, Spinner, Grid, Input } from "@theme-ui/components";

import WpApiContent from "./WpApiContent";


let App


// ---------------------------------------------------------------------
// ---------------------------------------------------------------------

const Body = props => {
  const Estilo = useThemeUI().theme.styles
  const [Loading, setLoading] = props.useContextLocal.Loading.DataMain
  const [Registro, setRegistro] = props.useContext.Registro
  const Images = props.useContext.Images

// ----------------------------------

  const ModuloSimple  = () => {
    return (
      
        // <Flex >
        //   <Box
        //       sx={{
        //     //    fontWeight: "normal",
        //     //   fontSize: 1,
        //     //    fontFamily: "body",
        //       }}
        //   >
  
        //       <Flex sx={{  m: 0, justifyContent: 'center' }}>
        //         <Box >
        //           {/* <Text sx={Estilo.t1}>{Registro.title}</Text> */}
        //         </Box>
        //       </Flex>
  

        //       <Flex sx={{ maxWidth:"500px",}}>
        //         <Box sx={{  }}>

        //           { Registro.content ?  <WpApiContent content={Registro.content} /> : <Flex/> }
                
        //         </Box>
        //       </Flex>

        //   </Box>
        // </Flex>
      


      <Container fluid style={{padding:0}}>

        <Row>
          {/* <Text sx={Estilo.t1}>{Registro.title}</Text> */}
            { Registro.content ?  <WpApiContent content={Registro.content} /> : <Flex/> }
        </Row>

      </Container>


    )
  }
 
 // ----------------------------------
 
 try {

  return (
    // <Grid sx={{
    //   borderStyle: "solid", borderWidth:0, borderColor: "#9999", borderRadius: "5px", maxWidth:"987px",  margin:"auto"
    // }}>
    //   {Loading ? <Spinner size={17} ml={0} /> : 
    //     <Flex>
    //       {ModuloSimple()}
    //     </Flex>
    //   }
    // </Grid>

      <Container fluid sx={{padding: 0}}
      style={{padding:0}}
      >


      {Loading ? <Spinner size={17} ml={0} /> : 
        <Row>


          {ModuloSimple()}
        
        
        </Row>
      }
  </Container>


  )
  
  } catch (e) {
    console.error(e);
  }
}

// ---------------------------------------------------------------------
// -----------------------------------------------------------------------

export default (App = props => {
  return (

    // <div style={{display: 'flex', justifyContent: 'center'}}>
    //     <Flex>
    //       <main  >
    //         <Body {...props} />
    //       </main>
    //     </Flex>
    // </div>


    // className="justify-content-md-center"
    <Body {...props} />


  );
});

// -----------------------------------------------------------------------


