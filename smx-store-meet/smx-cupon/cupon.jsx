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

  const [Cupon, setCupon] = props.useContextLocal.Cupon

  const [Registro, setRegistro] = props.useContext.Registro

  const Images = props.useContext.Images

  const [Detalle, setDetalle] = props.useContext.Detalle;
  const [Editado, setEditado] = props.useContext.Editado;

  const [Pedido, setPedido] = props.useContext.Pedido;
  const [CatalogoProducto, setCatalogoProducto] = props.useContext.CatalogoProducto
  const [CuponAplicado, setCuponAplicado] = props.useContext.CuponAplicado;

  const [Precio, setPrecio] = props.useContext.Precio;


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
  if(Cupon){return "#B7CE3F"}
    return "lightgrey"
}

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
  
}


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

          {/* <Flex sx={{ width: "100%" }}>
            <Box sx={{ width: "100%" }}>
              <Text sx={Estilo.d1}>{Detalle.Email}</Text>
            </Box>
          </Flex> */}

          <Box css={{ height: 13 }} />


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

        <Row>
          <Text sx={Estilo.msecc2}>{"Completa tu compra"}</Text>
        </Row>
  
        <Box css={{ height: 13 }} />
  
  


        <Text sx={Estilo.msecc3}>{"Total de la compra:" + (Precio>0 ? " $ " + Precio + " MXN" : "")}    </Text>


        <Box css={{ height: 13 }} />

  
  
    <Flex sx={{ width: "100%", bg: "white", borderRadius: "10px", borderStyle: "solid", borderWidth:1, borderColor: "#9999",}} >
          <Box
            sx={{
              fontWeight: "normal",
              fontSize: 1,
              color: "text",
              fontFamily: "body",
              width: "100%",
              pt: 5,
            }}
          >
  
          <Grid >
  

  
            <Flex sx={{ width: "100%", alignItems: 'center', mb: 3 }}>
              <Box sx={{ width: "30%" }}>
                <Text sx={Estilo.label1}>Código de descuento</Text>
              </Box>
              <Box sx={{ width: "30%" }}>
                <Input sx={Estilo.input1} {...useChange(Cupon, setCupon)} />
              </Box>

              <Box sx={{ width: "5%" }}>
              </Box>



                <Box sx={{ width: "25%" }}>
  
                    <Button sx={{ width: "100%", height: "34px" }}
                      width={1}
                      bg={ColorBoton()}
                      disabled={EnableBoton()}



                      onClick={async () => {
                        setLoadingSecc(true)
                        let MiCupon = await props.useAcciones.getCupon({
                          Codigo: Cupon,
                          Producto: CatalogoProducto[0].Producto,
                        })
                        console.log(MiCupon)
                        
                        if (MiCupon===0){
                          alert("Cupon no valido")
                        }

                        if (MiCupon.Aplicado===null){

                          let AplicarCupon = await props.useAcciones.aplicarCupon({
                            Id: MiCupon.Id,
                            Sponsor: MiCupon.Sponsor,
                            Pedido: Pedido
                          })
                          if(AplicarCupon===1){
    
                            let NuevoPrecio = CatalogoProducto[0].Precio - (CatalogoProducto[0].Precio * MiCupon.DescuentoPct / 100) 
    
                            // let MiCatalogo = CatalogoProducto
                            // MiCatalogo[0].Precio = NuevoPrecio
                            // setCatalogoProducto({ ...MiCatalogo})

                            console.log(NuevoPrecio)


                            setPrecio(NuevoPrecio)
                            setCuponAplicado(true)
                          }
                        } else { alert("Cupon agotado") }

                        setLoadingSecc(false)
                      }}

                    >
                       <Text sx={Estilo.mbtn1}>
                         Aplicar
                        {LoadingSecc ? <Spinner size={17} ml={3} /> : <div/>}
                        </Text>
  
                    </Button>
  
                </Box>





            </Flex>
  

              <Box css={{ height: 13 }} />
  
          </Grid>
  
  
  
        </Box>
      </Flex>
      </div>
    )
  }


 
 try {

  return (
    <Grid sx={{p:0, m: 0, borderStyle: "solid", borderWidth:0, borderColor: "#D3D3D3", borderRadius: "5px"}}>

      {Loading ? <Spinner size={17} ml={3} /> : 
        <div>

          {/* {(props.CompStatus.form()===3) ? ModuloSold() : <div/>} */}
          {(props.CompStatus.cupon()===2) ? ModuloSimple() : <div/>}
          {(props.CompStatus.cupon()===1) ? ModuloEdit() : <div/>}


        </div>
      }

    </Grid>
  )
  
} catch (e) {
  console.error(e);
}
}

// ---------------------------------------------------------------------
// -----------------------------------------------------------------------

export default (App = props => {
return (
  <Row className="justify-content-md-center">
    <Body {...props} />
  </Row>
);
});

// -----------------------------------------------------------------------


