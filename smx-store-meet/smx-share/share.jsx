import React, { useState, useEffect, useContext, createContext, Suspense } from "react"
// import moment from "moment";

/** @jsxRuntime classic */
import { ThemeProvider, jsx, Styled, useThemeUI } from "theme-ui"
import { Flex, Box, Button, Text, Textarea, Image, Spinner, Grid, Input, Link } from "@theme-ui/components";

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
  const [CatalogoProducto, setCatalogoProducto] = props.useContext.CatalogoProducto

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


const ColorBoton = function(props) {
  if(Detalle.Nombre && Detalle.Apellido && Detalle.Telefono && Detalle.Email){

    if(Detalle.Email.lastIndexOf('@')>0){
      if(Detalle.Email.lastIndexOf('.')>0){
        return "#428b87"
      } 
    }    
  }
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

// -----------------



const Modulo1  = () => {

  return (
    <div>

      <Grid bg="#B7CE3F" >
                  
        <Flex sx={{ width: "100%" }}>
          <Box sx={{ width: "100%" }}>
            <Text sx={Estilo.msecc2w}>{"Invita a un amigo y obtén un 30% de descuento en tu próxima compra"}</Text>
          </Box>
        </Flex>
      
      </Grid>


      <Box css={{ height: 13 }} />


      <Grid >
              
        <Flex >
          <Box sx={{ width: "100%" }}>
            <Text sx={Estilo.cardl1}>{"Comparte este link con un amigo y en el momento en que lo utilice, estarás recibiendo el 30% de descuento en tu próxima compra con nosotros."}</Text>
          </Box>
        </Flex>
    
      </Grid>
    
    
      <Box css={{ height: 21 }} />


      <Row >


          <Text sx={Estilo.md1b}>{"https://www.empresando.com/" + CatalogoProducto[0].Clave + "?t="+Detalle.Cliente}</Text>

          </Row>



        <Box css={{ height: 21 }} />





      <Flex >
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

          <Grid  >
            
            <Flex sx={{ width: "100%" }}>
              <Box sx={{ width: "100%" }}>
                <Text sx={Estilo.md1b}>{"Comparte tu link:"}</Text>
              </Box>
            </Flex>

          </Grid>

          {/* <Grid  >
    
            <Flex sx={{ width: "100%" }}>

              <Box sx={{ width: "100%" }}>
                <Flex sx={{ width: "100%" }}>
                    <Box sx={{ width: "20%" }}/>
                      <Box sx={{ width: "54%" }}>

                        <Link 
                          href={"https://wa.me/?text=" + encodeURIComponent("Ya tengo mi boleto para Retos de lo inédito! compra el tuyo aquí: https://empresando.com/evento?t=" + Detalle.Nombre + Detalle.Cliente)}
                          target={"_blank"}
                        >

                          <Button sx={{ width: "100%" }}
                            width={1}
                            bg={"#32CD32"}
                            Disabled={false}
                          >
                            <Text sx={Estilo.mbtn1}>Invitar por Whatsapp</Text>

                          </Button>
                        
                        </Link>
                      </Box>

                </Flex>

              </Box>

             </Flex>

          </Grid> */}



<Grid >
        
          <Box sx={{ width: "100%" }}>

            <Link 
              href={"https://wa.me/?text=" + encodeURIComponent("Ya tengo mi boleto para " + CatalogoProducto[0].ProductosTitulo + "! compra el tuyo aquí: https://www.empresando.com/" + CatalogoProducto[0].Clave + "?t=" + Detalle.Cliente)}
              target={"_blank"}
            >
              <Image sx={{mt: 1, mb:1, ml:3, verticalAlign: "middle" }} src={"https://smxblogs.com/empresando/wp-content/empresando/iconw.jpg"} />

            </Link>

            <Link 
              href={"https://www.facebook.com/sharer/sharer.php?u=empresando.com/" + CatalogoProducto[0].Clave + "?t=" + Detalle.Cliente}
              target={"_blank"}
            >
              <Image sx={{mt: 1, mb:1, ml:3, verticalAlign: "middle" }} src={"https://smxblogs.com/empresando/wp-content/empresando/iconf.jpg"} />

            </Link>



            {/* <Image sx={{mt: 1, mb:1, ml:3, verticalAlign: "middle" }} src={"https://smxblogs.com/empresando/wp-content/empresando/iconi.jpg"} /> */}


            <Link 
              href={"http://twitter.com/share?text=Ya tengo mi boleto para " + CatalogoProducto[0].ProductosTitulo + "! compra el tuyo aquí: &url=https://www.empresando.com/" + CatalogoProducto[0].Clave + "?t=" + Detalle.Cliente}
              target={"_blank"}
            >
              <Image sx={{mt: 1, mb:1, ml:3, verticalAlign: "middle" }} src={"https://smxblogs.com/empresando/wp-content/empresando/icont.jpg"} />

            </Link>

          



          </Box>
      
      </Grid>











        </Box>
      </Flex>





      <Box css={{ height: 21 }} />







      <Grid  >
                  
        <Flex sx={{ width: "100%" }}>
          <Box sx={{ width: "100%" }}>
            <Text sx={Estilo.msecc2g}>{"Información de Acceso"}</Text>
          </Box>
        </Flex>
      
      </Grid>


      <Grid >
              
        <Flex >
          <Box sx={{ width: "100%" }}>
            <Text sx={Estilo.cardl1}>{"Ingresa a la plataforma con tu número de teléfono y contraseña en la opción Mi Cuenta - Iniciar sesión. Despues ve a la sección Mi Cuenta - Mis eventos - para acceder al evento."}</Text>
          </Box>
        </Flex>
    
      </Grid>
    
    
      <Box  css={{ height: 21 }} />



      <Grid >
              
        <Flex >
          <Box sx={{ width: "100%" }}>
            <Text sx={Estilo.md1c}>{"Recuerda que únicamente es un acceso por persona, si compartes tu link con alguien más, no podrá ingresar al evento."}</Text>
          </Box>
        </Flex>
    
      </Grid>
    
    
      <Box css={{ height: 21 }} />

















      <Grid >

        <Flex sx={{ width: "100%" }}>
          <Box sx={{ width: "100%" }}>

            <Box sx={{ width: "100%" }}>
    
              <Link 
                href='/miseventos'
              >

                <Button sx={{ width: "100%", height: "34px" }}
                  width={1}
                  bg={"#152f6a"}
                  disabled={EnableBoton()}
                >


                  <Text sx={Estilo.mbtn1}>
                    Ir a mis eventos
                    
                  </Text>

                </Button>
              </Link>
            
            </Box>



          </Box>
        </Flex>

      </Grid>



      <Box css={{ height: 34 }} />





    </div>
  )
}






 
 try {

  return (
    <div>

      {Loading ? <Spinner size={17} ml={3} /> : 
        <div>

          { (props.CompStatus.share()===1) ? Modulo1() : <div/>}
          {/* { (props.CompStatus.share()===2) ? Modulo2() : <div/>}
           {Modulo2()} */}


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


