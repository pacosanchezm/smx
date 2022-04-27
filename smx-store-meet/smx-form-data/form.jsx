import React, { useState, useEffect, useContext, createContext, Suspense } from "react"
// import moment from "moment";


/** @jsxRuntime classic */
import { ThemeProvider, jsx, Styled, useThemeUI } from "theme-ui"
import { Flex, Box, Button, Text, Textarea, Image, Spinner, Grid, Input, Checkbox, Link } from "@theme-ui/components";


import { Container, Col, Row } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';

import Dropbox from "react-select"


let App

// ---------------------------------------------------------------------


const DropboxFiltro1= {
  container: (base, state) => ({
    ...base,
    border: state.isFocused ? null : null
  }),
  control: (base, state) => ({
    ...base,
    background: "lightgrey",
    fontFamily: "Arial",
    fontSize: 12
  }),
  menu: base => ({
    ...base,
    fontFamily: "Arial"
  }),

  singleValue: base => ({
    ...base,
    color: "slategrey"
  }),

  valueContainer: (base, state) => ({
    ...base,
    background: "lightgrey",
    color: "red"
  }),
  multiValue: (base, state) => ({
    ...base,
    background: "lightYellow",
    maxWidth: "100px"
  })
}

// ---------------------------------------------------------------------
// ---------------------------------------------------------------------



const Body = props => {
  const Estilo = useThemeUI().theme.styles
  const [Loading, setLoading] = props.useContextLocal.Loading.DataMain
  const [LoadingSecc, setLoadingSecc] = props.useContextLocal.Loading.DataMain

  const [Registro, setRegistro] = props.useContext.Registro

  const Images = props.useContext.Images

  const [Detalle, setDetalle] = props.useContext.Detalle;
  const [Editado, setEditado] = props.useContext.Editado;

  const [Aceptado, setAceptado] = props.useContext.Aceptado;






// ----------------------------------



useEffect(() => {

 // props.useAcciones.getPage({id:props.pageid})

}, [])


const useChangeBooleanArray = (MiArray, Field, setField) => {
  return {
    name: Field,
    value: MiArray[Field],

    onClick: e => {
      setField({ ...MiArray, [Field]: !MiArray[Field] });
      setEditado(true);
    }
  }
};




const useChangeBoolean = (Field, setField) => {
  return {
    name: Field,
    value: Field,

    onClick: e => {
      setField(!Field)
      setEditado(true)
    }
  }
};








const useChangeArray = (MiArray, Field, setField) => {
  return {
    name: Field,
    value: MiArray[Field],

    


    //fontSize: 1,
    //borderWidth: 0,
    //border: "none",
    //color: "#0C438E",
    //borderWidth:"3px",
    //bg: "whitesmoke",
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
        return "#B7CE3F"
      } 
    }    
  } else return "#e6e6e6"
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

          {/* <Flex sx={{ width: "100%" }}>
            <Box sx={{ width: "100%" }}>
              <Text sx={Estilo.d1}>{Detalle.Email}</Text>
            </Box>
          </Flex> */}

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
<Row>
  <Text sx={{...Estilo.msecc2, textAlign: "left"}}>{"Completa tus datos"}</Text>
</Row>





<Box sx={{ height: 13,  }} />


<Container fluid 
  style={{ width: "100%", bg: "white", borderRadius: "10px", borderStyle: "solid", borderWidth:1, borderColor: "#9999", paddingTop: "10px"}}
>



{/* <Flex sx={{ width: "100%", bg: "white", borderRadius: "10px", borderStyle: "none", borderWidth:1, borderColor: "#9999",}} >
  <Box
    sx={{
      fontWeight: "normal",
      fontSize: 1,
      color: "text",
      fontFamily: "body",
      width: "100%",
      pt: 5,
    }}
  > */}

    <Grid >

      <Flex sx={{ width: "100%", alignItems: 'center', mb: 3 }}>
        <Box sx={{ width: "25%"}}>
          <Text sx={Estilo.label1} >Nombre</Text>
        </Box>
        <Box sx={{ width: "65%" }}>
          <Input sx={Estilo.input1} {...useChangeArray(Detalle, "Nombre", setDetalle)}/>
        </Box>
      </Flex>

      <Flex sx={{ width: "100%", alignItems: 'center', mb: 3 }}>
        <Box sx={{ width: "25%" }}>
          <Text sx={Estilo.label1}>Apellidos</Text>
        </Box>
        <Box sx={{ width: "65%" }}>
          <Input sx={Estilo.input1} {...useChangeArray(Detalle, "Apellido", setDetalle)} />
        </Box>
      </Flex>

      <Flex sx={{ width: "100%", alignItems: 'center', mb: 3 }}>
        <Box sx={{ width: "25%" }}>
          <Text sx={Estilo.label1}>Telefono</Text>
        </Box>
        <Box sx={{ width: "30%" }}>
          <Input sx={Estilo.input1} {...useChangeArray(Detalle, "Telefono", setDetalle)} />
        </Box>
      </Flex>

      <Flex sx={{ width: "100%", alignItems: 'center', mb: 3 }}>
        <Box sx={{ width: "25%" }}>
          <Text sx={Estilo.label1}>Email</Text>
        </Box>
        <Box sx={{ width: "70%" }}>
          <Input sx={Estilo.input1} {...useChangeArray(Detalle, "Email", setDetalle)} />
        </Box>
      </Flex>

      <Box css={{ height: 21 }} />


      <Row style={{marginBottom: "10px"}}>
        <Col xs={3}> <Text sx={Estilo.label1} >Nacimiento</Text> </Col>
          <Col xs={3}> 
            <Dropbox
              name="Dia"
              isSearchable={false}
              styles={DropboxFiltro1}
              value={{value: Detalle.NacimientoDia, label: Detalle.NacimientoDia}}
              options={props.useContext.FechaDia[0]}
              onChange={async e => { setDetalle({ ...Detalle, "NacimientoDia": e.value }) }} 
            />
          </Col>

          <Col xs={3}> 
            <Dropbox
              name="Mes"
              isSearchable={false}
              styles={DropboxFiltro1}
              value={{value: Detalle.NacimientoMes, label: Detalle.NacimientoMes}}
              options={props.useContext.FechaMes[0]}
              onChange={async e => { setDetalle({ ...Detalle, "NacimientoMes": e.value }) }} 
            />
          </Col>

          <Col xs={3}> 
            <Dropbox
              name="Ano"
              isSearchable={false}
              styles={DropboxFiltro1}
              value={{value: Detalle.NacimientoAno, label: Detalle.NacimientoAno}}
              options={props.useContext.FechaAno[0]}
              onChange={async e => { setDetalle({ ...Detalle, "NacimientoAno": e.value }) }} 
            />
          </Col>



      </Row>



      <Row style={{marginBottom: "10px"}}>
          <Col xs={3}> <Text sx={Estilo.label1} >Estado</Text> </Col>
          <Col xs={9}> 
            <Dropbox
              name="Categoria"
              isSearchable={false}
              styles={DropboxFiltro1}
              value={{value: Detalle.Estado, label: Detalle.Estado}}
              options={props.useContext.Estados[0]}
              onChange={async e => { setDetalle({ ...Detalle, "Estado": e.value }) }} 
            />
          </Col>
        </Row>


        <Box css={{ height: 21 }} />

    </Grid>

    </Container> 




    <Box sx={{ height: 13,  }} />

<Row>
  <Col xs={9} style={{textAlign: "left"}}>
    <Text sx={{...Estilo.msecc2, textAlign: "left"}}>{"Datos del emprendimiento"}</Text> <Text sx={Estilo.d2s} >(opcional)</Text>
  </Col>

</Row>



<Container fluid 
  style={{ width: "100%", bg: "white", borderRadius: "10px", borderStyle: "solid", borderWidth:1, borderColor: "#9999", paddingTop: "10px"}}
>

  <Row style={{marginBottom: "10px"}}>
    <Col xs={3}> <Text sx={Estilo.label1} >Nombre</Text> </Col>
    <Col xs={9}> <Input sx={Estilo.input1} {...useChangeArray(Detalle, "Titulo", setDetalle)}/> </Col>
  </Row>

  <Row style={{marginBottom: "10px"}}>
    <Col xs={3}> <Text sx={Estilo.label1} >Sitio Web</Text> </Col>
    <Col xs={9}> <Input sx={Estilo.input1} {...useChangeArray(Detalle, "Web", setDetalle)}/> </Col>
  </Row>


  <Row style={{marginBottom: "10px"}}>
    <Col xs={3}> <Text sx={Estilo.label1} >Empleados</Text> </Col>
    <Col xs={9}> 
      <Dropbox
        name="Categoria"
        isSearchable={false}
        styles={DropboxFiltro1}
        value={{value: Detalle.Empleados, label: Detalle.Empleados}}
        options={props.useContext.Empleados[0]}
        onChange={async e => { setDetalle({ ...Detalle, "Empleados": e.value }) }} 
      />
    </Col>
  </Row>


</Container> 


<Box sx={{ height: 13,  }} />





    <Box sx={{ height: 13,  }} />

<Row>
  <Col xs={9} style={{textAlign: "left"}}>
    <Text sx={{...Estilo.msecc2, textAlign: "left"}}>{"Etapa de tu emprendimiento"}</Text> <Text sx={Estilo.d2s} >(opcional)</Text>
  </Col>
</Row>


<Container fluid 
  style={{ width: "100%", bg: "white", borderRadius: "10px", borderStyle: "solid", borderWidth:1, borderColor: "#9999", paddingTop: "10px"}}
>

  <Row style={{marginBottom: "10px"}}>
    <Button
      sx={{width: "100%", bg: "transparent"}}
      {...useChangeBooleanArray(Detalle, "Referencia1", setDetalle)}
    >
      <Row>
          <Col xs={2} style={{paddingLeft: "50px"}}> <Checkbox checked={Detalle.Referencia1}/> </Col>
         <Col xs={8} style={{textAlign: "left"}}> <Text sx={Estilo.d2s} >Estoy desarrollando la idea de negocio</Text> </Col>
      </Row>
    </Button>
  </Row>

  <Row style={{marginBottom: "10px"}}>
    <Button
      sx={{width: "100%", bg: "transparent"}}
      {...useChangeBooleanArray(Detalle, "Referencia2", setDetalle)}
    >
      <Row>
      <Col xs={2} style={{paddingLeft: "50px"}}> <Checkbox checked={Detalle.Referencia2}/> </Col>
        <Col xs={8} style={{textAlign: "left"}}> <Text sx={Estilo.d2s}>Tengo un prototipo de productos y/o servicios</Text> </Col>
      </Row>
    </Button>
  </Row>

  <Row style={{marginBottom: "10px"}}>
    <Button
      sx={{width: "100%", bg: "transparent"}}
      {...useChangeBooleanArray(Detalle, "Referencia3", setDetalle)}
    >
      <Row>
      <Col xs={2} style={{paddingLeft: "50px"}}> <Checkbox checked={Detalle.Referencia3}/> </Col>
        <Col xs={8} style={{textAlign: "left"}} > <Text sx={Estilo.d2s}>En operación (ya vendo productos y/o servicios)</Text> </Col>
      </Row>
    </Button>
  </Row>

  <Row style={{marginBottom: "10px"}}>
    <Button
      sx={{width: "100%", bg: "transparent"}}
      {...useChangeBooleanArray(Detalle, "Referencia4", setDetalle)}
    >
      <Row>
      <Col xs={2} style={{paddingLeft: "50px"}}> <Checkbox checked={Detalle.Referencia4}/> </Col>
        <Col xs={8} style={{textAlign: "left"}}> <Text sx={Estilo.d2s}>No tengo una idea concreta</Text> </Col>
      </Row>
    </Button>
  </Row>

  <Row style={{marginBottom: "10px"}}>
    <Row>
      <Col xs={3} style={{textAlign: "left", paddingLeft: "50px"}}> <Text sx={Estilo.d2s}>Otro</Text> </Col>
      <Col xs={8} style={{textAlign: "left"}}> <Input sx={Estilo.input1} {...useChangeArray(Detalle, "Referencia5", setDetalle)}/> </Col>
    </Row>
  </Row>

</Container>

<Box sx={{ height: 13,  }} />












<Col xs={9} style={{textAlign: "left"}}>
        <Text sx={{...Estilo.msecc2, textAlign: "left"}}>{"Cuéntanos sobre ti"}</Text> <Text sx={Estilo.d2s} >(opcional)</Text>
      </Col>





      <Container fluid 
        style={{ width: "100%", bg: "white", borderRadius: "10px", borderStyle: "solid", borderWidth:1, borderColor: "#9999", paddingTop: "10px"}}
      >
        <Row style={{marginBottom: "10px"}}>

          <Col xs={12}> 
            <Textarea
              // sx={Estilo.input1}
              {...useChangeArray(Detalle, "Descripcion", setDetalle)}
              rows={5}
            />          
          </Col>
        </Row>

      </Container>

      <Box css={{ height: 21 }} />


      <Container fluid>
        <Row style={{marginBottom: "10px"}}>
        
          <Col xs={3} > 
            <Button
                sx={{width: "100%", bg: "transparent"}}
                {...useChangeBoolean(Aceptado, setAceptado)}
            >
             <Checkbox checked={Aceptado} />


             
            </Button>
          </Col>

          <Col xs={8} style={{textAlign: "left"}}> 
            <Text pt={"3px"} sx={Estilo.d2s}>Acepto el </Text>
            <Link sx={Estilo.h3}  href='/avisoprivacidad' target='_blank'>
              {" Aviso de Privacidad"}
            </Link>
          </Col>

        </Row>

      </Container>


      <Box css={{ height: 8 }} />











  <Container fluid 
      >
        <Row style={{marginBottom: "10px"}}>
        <Col xs={2}/> 

          <Col xs={8}> 
            <Button sx={{ width: "100%", height: "34px" }}
              width={1}
              bg={ColorBoton()}
              disabled={EnableBoton()}
              onClick={async () => {
                setLoadingSecc(true)
                  await props.useAcciones.InfoAdd()
                setLoadingSecc(false)
              }}
            >
              <Text sx={Estilo.mbtn1}>
                Registrarme
                {LoadingSecc ? <Spinner size={17} ml={0} /> : <div/>}
              </Text>

            </Button>

            
          </Col>

        </Row>

      </Container>

      <Box css={{ height: 34 }} />
  {/* </Box>






</Flex> */}
</div> 




















    )
  }











 
 try {

  return (
    <div>
      {Loading ? <Spinner size={17} ml={3} /> : 
        <div>

          {/* {(props.CompStatus.form()===3) ? ModuloSold() : <div/>} */}
          {(props.CompStatus.form()===2) ? ModuloSimple() : <div/>}
          {(props.CompStatus.form()===1) ? ModuloEdit() : <div/>}

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
  <Row className="justify-content-md-center">
    <Body {...props} />
  </Row>

);
});

// -----------------------------------------------------------------------


