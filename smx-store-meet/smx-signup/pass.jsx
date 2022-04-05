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


   const [Pass1, setPass1] = props.useContextLocal.Pass1
   const [Pass2, setPass2] = props.useContextLocal.Pass2









// ----------------------------------

useEffect(() => {

 // props.useAcciones.getPage({id:props.pageid})

}, [])


const useChange = (Field, setField) => {
  return {
    name: Field,
    value: Field,
    // fontSize: 1,
    // color: "#595959",
    // bg: "#DCDCDC",
    onChange: e => {
      setField(e.target.value);
    }
  };
};


const useChangeArray = (MiArray, Field, setField) => {
  return {
    name: Field,
    value: MiArray[Field],
    fontSize: 1,
    color: "#595959",
    bg: "#DCDCDC",
    onChange: e => {
      setField({ ...MiArray, [Field]: e.target.value });
      setEditado(true);
    }
  };
};

const ColorBoton = function(props) {
  if(Detalle.Nombre && Detalle.Apellido && Detalle.Telefono && Detalle.Email){

    if(Detalle.Email.lastIndexOf('@')>0){
      if(Detalle.Email.lastIndexOf('.')>0){
        return "#b8d637"
      } 
    }    
  }
};

const EnableBoton = function(props) {

  // if(LoadingSecc) {return false}

  if(Detalle.Nombre && Detalle.Apellido && Detalle.Telefono && Detalle.Email){
    if(Detalle.Email.lastIndexOf('@')>0){
      if(Detalle.Email.lastIndexOf('.')>0){
        return false
      } 
    }      
  } 

  return true
  
};


const ModuloSimple  = () => {
  // console.log({Images})
   return (
     <div>
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
              <Text sx={Estilo.h4s}>{Detalle.Nombre + " " + Detalle.Apellido}</Text>
            </Box>
          </Flex>

          <Flex sx={{ width: "100%" }}>
            <Box sx={{ width: "100%" }}>
              <Text sx={Estilo.d1}>{Detalle.Email}</Text>
            </Box>
          </Flex>

          <Box css={{ height: 21 }} />


         </Box>
       </Flex>
     </div>
   )
 }
 
 // ----------------------------------
 


 const ModuloEdit  = () => {
  //console.log(props)
    return (
      <div>


        <Box css={{ height: 34 }} />


        <Text sx={Estilo.msecc2v}>{"Para ingresar al evento:"}</Text>

  
  
        <Box css={{ height: 21 }} />
  
                <Text sx={Estilo.cardl1}>{"Crea tu contraseña de acceso a la plataforma para asistir a la conferencia"}</Text>

  
      
        <Box css={{ height: 21 }} />










  

  

  
            <Flex sx={{ width: "100%", alignItems: 'left', mb: 3 }}>
              <Box sx={{ width: "30%" }}>
                <Text sx={Estilo.label1}>Contraseña:</Text>
              </Box>
              <Box sx={{ width: "30%" }}>
                <Input sx={Estilo.input1} {...useChange(Pass1, setPass1)} type="password" autocomplete="off"/>
              </Box>
            </Flex>
  
            <Box css={{ height: 13 }} />
  
            <Flex sx={{ width: "100%", alignItems: 'left', mb: 3 }}>
              <Box sx={{ width: "30%" }}>
                <Text sx={Estilo.label1}>Confirmar:</Text>
              </Box>
              <Box sx={{ width: "30%" }}>
                <Input sx={Estilo.input1} {...useChange(Pass2, setPass2)} type="password" autocomplete="off"/>
              </Box>
            </Flex>
  
            <Box css={{ height: 13 }} />







            <Flex sx={{ width: "100%" }}>
              <Box sx={{ width: "30%" }}/>
                  
                <Box sx={{ width: "30%" }}>
  
                    <Button sx={{ width: "100%", height: "34px" }}
                      width={1}
                      bg={ColorBoton()}
                      disabled={EnableBoton()}
                      onClick={async () => {
                        setLoadingSecc(true)
                          await props.useAcciones.UpdatePass({
                            Id: Detalle.Cliente,
                            Pass: Pass1,
                            Tel: Detalle.Telefono
                          })



                        setLoadingSecc(false)
                      }}
                    >
                       <Text sx={Estilo.mbtn1}>
                         Crear
                        {LoadingSecc ? <Spinner size={17} ml={3} /> : <div/>}
                        </Text>
  
                    </Button>
  
                </Box>
  
            </Flex>
              <Box css={{ height: 21 }} />
  

      </div>
    )
  }


 
 try {

  return (
    <div>

      {Loading ? <Spinner size={17} ml={3} /> : 
        <div>

          {/* {(props.CompStatus.form()===3) ? ModuloSold() : <div/>} */}
          {(props.CompStatus.signup()===2) ? ModuloSimple() : <div/>}
          {(props.CompStatus.signup()===1) ? ModuloEdit() : <div/>}


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


