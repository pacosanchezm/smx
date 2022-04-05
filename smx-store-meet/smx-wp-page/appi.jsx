import React, { useState, useEffect, useContext, createContext, Suspense } from "react"

// ---------- styles








/** @jsxRuntime classic */

 // /** @jsx jsx */ 
  import { ThemeProvider, jsx, Styled, useThemeUI } from "theme-ui"
  import { Grid, Flex, Box, Button, Text, Image, Spinner, Input, Link } from "@theme-ui/components"
  import "@babel/polyfill"

import Container from 'react-bootstrap/Container'

import Row from 'react-bootstrap/Row'
// import Col from 'react-bootstrap/Col'


  // ------------------
  import usedata from "./usedata"

  import Page from "./page"


let App;
const StateContext = createContext();

// -------------------------------------------

const useStateUniv = (props) => {
  return {
    Loading: {
      DataMain: useState(useContext(createContext(false))),
      Registros: useState(useContext(createContext(false))),
    },
  };
}

// ------------------

const ContextProvider = ( props ) => {
  return (
    <StateContext.Provider value={useStateUniv()}>
      <ThemeProvider theme={props.Theme}>{props.children}</ThemeProvider>
    </StateContext.Provider>
  );
}

// --------------------------------------------------------------------------


let useStatusLocal = function(StateContextM) {

  return {
    cover: function() { return 1 },
  }
}

// --------------------------------------------------------------------------


let useAccionesLocal = function(StateContext) {
  const useDataLocal = new usedata()
  const [LoadingDataMain, setLoadingDataMain] = useContext(StateContext).Loading.DataMain




  // ---------------------
  
  return {
    Loader : async function (props) {

      const [Registro, setRegistro] = props.useContext.Registro

      setLoadingDataMain(true)




     // let useDataRes = await useDataLocal.Page().get({ClaveWp:props.clave})
      // let useDataRes = await useDataLocal.Page().get({ClaveWp: "cG9zdDoxMTg1"})

      // setRegistro(useDataRes)


      setLoadingDataMain(false)

    },
    

  }
}

// -----------------------------------------------------------------------------




// -----------------------------------------------------------------------------

const Body = props => {

  const useaccioneslocal = new useAccionesLocal(StateContext)
  const usestatuslocal = new useStatusLocal(StateContext)


  const [ExtendFormData, setExtendFormData] = props.useContext.Extend.FormData

  const [ExtendPage, setExtendPage] = props.useContext.Extend.Page


  // ------------
    useEffect(() => {
      useaccioneslocal.Loader(props)
    }, [])



    // ------------


    const ModuloSimple  = () => {

      return (
       
    
          // <Grid sx={{
          //   p:0, m: 0, borderStyle: "solid", borderWidth:0, borderColor: "#111111", borderRadius: "5px", maxWidth:"987px",  margin:"auto"
          //   }}>                    
    
      
          //   <Flex bg="white" >
    
          //     <Box >
          //       <Page {...props}
          //         useContextLocal={useContext(StateContext)}
          //         useAccionesLocal = {useaccioneslocal}
          //         useStatusLocal = {usestatuslocal}
          //       /> 
          //     </Box>

          //   </Flex>
    

          //   <Flex sx={{  }}>
          //     <Box sx={{ width: "15%" }}/>
                
    
          //       <Box sx={{ width: "70%" }}>
    
          //         <Button sx={{ width: "100%", height: "34px" }}
          //           width={1}
          //             bg={"#B7CE3F"}
          //           // disabled={EnableBoton()}
          //           onClick={async () => {
          //             setExtendFormData(true)
          //             setExtendPage(false)
          //           }}
          //         >
          //           <Text 
          //           // sx={Estilo.mbtn1}
          //           >
          //             Obtener mi boleto
          //             {/* {LoadingSecc ? <Spinner size={17} ml={3} /> : <div/>} */}
          //           </Text>
  
          //         </Button>
    
          //       </Box>
    
          //   </Flex>
          
          // </Grid>
    
       









              // <Row >
      <Container fluid >





            <Image src={"https://smxblogs.com/empresando/wp-content/empresando/banner3.jpg"}/>




            <Image src={"https://smxblogs.com/empresando/wp-content/uploads/2021/06/sinrollo1w4.jpg"}/>

            <Box css={{ height: 34 }} />

            {/* <Button sx={{ width: "70%", height: 55 }}
                    width={1}
                      bg={"#B7CE3F"}
                    // disabled={EnableBoton()}
                    onClick={async () => {
                      setExtendFormData(true)
                      setExtendPage(false)
                    }}
                  >
                    <Text 
                     sx={{fontSize: 4,}}
                    >
                      Obtener mi boleto
                    </Text>
  
                  </Button>


            <Box css={{ height: 34 }} /> */}




                  <Page {...props}
                    useContextLocal={useContext(StateContext)}
                    useAccionesLocal = {useaccioneslocal}
                    useStatusLocal = {usestatuslocal}
                  /> 






                  <Button sx={{ width: "70%", height: 55 }}
                    width={1}
                      bg={"#B7CE3F"}
                    // disabled={EnableBoton()}
                    onClick={async () => {
                      setExtendFormData(true)
                      setExtendPage(false)
                    }}
                  >
                    <Text 
                     sx={{fontSize: 4,}}
                    >
                      Unirme y accesar a la conferencia
                    </Text>
  
                  </Button>
                  <Box css={{ height: 34 }} /> 









            <Box css={{ height: 34 }} />









        </Container>




             



      )
    }


  try {

    return (
      // <Row >


        <Container fluid style={{padding:0}}>

        {(props.CompStatus.page()===1) ? ModuloSimple() : <div/>}

        </Container>


      // </Row>

    )

  } catch (e) { console.error(e);}

}

// -----------------------------------------------------------------------------




// -----------------------------------------------------------------------------
// -----------------------------------------------------------------------------

export default (App = props => {


  return (
    // <div style={{display: 'flex', justifyContent: 'center'}}>

    //   <ContextProvider Theme={props.Theme}>

    //   <Flex 
    //       sx={{
    //         display: "flex",
    //         flexDirection: "column",
    //         // set this to `minHeight: '100vh'` for full viewport height
    //         //minHeight: '100vh',
    //         //justifyContent: 'center'
    //         width: "100%",
    //         minWidth: "375px"
    //       }}
    //       css={{ maxWidth: "987px", minWidth: "375px" }}
    //     >

    //       <Flex sx={{ width: "100%", pl: 3, pr:3 }}>
    //         <Box sx={{ width: "100%" }}>

    //           <main sx={{width: "100%"}}>
    //             <Body {...props} />
    //           </main>

    //         </Box>
    //       </Flex>

    //     </Flex>

    //   </ContextProvider>

    // </div>



    <ContextProvider Theme={props.Theme}>

      <Container style={{padding:0}}>
        <Row 
          className="justify-content-md-center"
        >
          <Body {...props} />
        </Row>
      </Container>


      {/* <Container fluid>
        <Body {...props} />
      </Container> */}





    </ContextProvider>










  );
});

// ----------------------------------------------------------------------------

