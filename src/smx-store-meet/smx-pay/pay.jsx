import React, { useState, useEffect, useContext, createContext, Suspense } from "react"
// import moment from "moment";


/** @jsxRuntime classic */
import { ThemeProvider, jsx, Styled, useThemeUI } from "theme-ui"
import { Flex, Box, Button, Text, Textarea, Image, Spinner, Grid, Input, Label, Radio } from "@theme-ui/components";
import Theme from "./theme"

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'

import 'bootstrap/dist/css/bootstrap.min.css';


import Ccard from "./cc1st1"
import Oxxo from "./oxxo"






let App



const StateContext = createContext()

// ------------------------------------------------------------------

const useStateLocal = () => {
  return {
    Theme: useState(useContext(createContext(Theme))),
    LoadingSecc1: useState(useContext(createContext(false))),
    TipoPago: useState(useContext(createContext(0))),
    BotonesOp: useState(useContext(createContext({}))),

  };
};

// ------------------

const ContextProvider = ({ children }) => {
  return (
    <StateContext.Provider value={useStateLocal()}>
      <ThemeProvider theme={Theme}>{children}</ThemeProvider>
    </StateContext.Provider>
  );
};





let CardImages = {
  no: {src: "https://smxai.net/sf/card_no.jpg"},
  vs: {src: "https://smxai.net/sf/card_vs.jpg"},
  mc: {src: "https://smxai.net/sf/card_mc.jpg"},
  am: {src: "https://smxai.net/sf/card_am.jpg"},
  ox: {src: "https://smxai.net/sf/card_ox.jpg"},
}







// ---------------------------------------------------------------------
// ---------------------------------------------------------------------



const Body = props => {
  const Estilo = useThemeUI().theme.styles

  const [BotonesOp, setBotonesOp] = useStateLocal(StateContext).BotonesOp;
  const [TipoPago, setTipoPago] = useStateLocal(StateContext).TipoPago;




  const [Loading, setLoading] = props.useContextLocal.Loading.DataMain
  const [LoadingSecc, setLoadingSecc] = props.useContextLocal.Loading.DataMain

  const [Cupon, setCupon] = props.useContextLocal.Cupon


  const [CatalogoProducto, setCatalogoProducto] = props.useContext.CatalogoProducto



  const [Registro, setRegistro] = props.useContext.Registro

  const Images = props.useContext.Images

  const [Detalle, setDetalle] = props.useContext.Detalle;
  const [Editado, setEditado] = props.useContext.Editado;

  const [Precio, setPrecio] = props.useContext.Precio;




// ----------------------------------



useEffect(() => {

 // props.useAcciones.getPage({id:props.pageid})

}, [])


const useChange = (Field, setField) => {
  return {
    name: Field,
    value: Field,
    fontSize: 1,
    color: "#595959",
    bg: "#DCDCDC",
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
        return "#428b87"
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



 // ----------------------------------
 


 const ModuloEdit  = () => {

  return (

    <div>

        <Box css={{ height: 13 }} />


            {/* <Text sx={Estilo.msecc3}>{"Total de la compra:" + (Precio>0 ? " $ " + Precio + " MXN" : "")}    </Text> */}


      <Box css={{ height: 13 }} />


          <Text sx={Estilo.label1}>¿Cómo deseas pagar?</Text>


            <Box sx={Estilo.t1s}>
              <Label sx={{m:0}}>
                <Radio
                  name='pago'
                  defaultChecked={TipoPago===1 ? true : false}
                  onChange={()=>{ setTipoPago(1) }}
                />

                <Text >{"Tarjeta de Crédito / Débito"} </Text>
                <Image sx={{mt: 1, mb:1, ml:2, verticalAlign: "middle" }} src={CardImages.vs.src} />
                <Image sx={{mt: 1, mb:1, ml:2, verticalAlign: "middle" }} src={CardImages.mc.src} />
                <Image sx={{mt: 1, mb:1, ml:2, verticalAlign: "middle" }} src={CardImages.am.src} />





              </Label>
            </Box>


            <Box sx={Estilo.t1s}>
              <Label>
                <Radio
                  name='pago'
                  defaultChecked={TipoPago===2 ? true : false}
                  onChange={()=>{setTipoPago(2)}}
                />

                <Text >Pago en Oxxo</Text>
                <Image sx={{mt: 1, mb:1, ml:2, verticalAlign: "middle" }} src={CardImages.ox.src} />

              </Label>
            </Box>
            









      {TipoPago === 1 ? ( <div>

        <Flex sx={{ width: "500px" }} css={{ maxWidth: "500px" }}>
          <Ccard
            Indica={props.useContext.Indica}
            Pagar={(e) => props.useAcciones.PagarStripe(e)}

            // token={"pk_test_51JJ32dDyzKP8A38L67ldFs18C24C5r8679OwJbz4OybTUNyZhO9IaqAGMufan77SYokUSMrPsbcRb5m3FH5nzS8300BuhvHWNK"} //virtud
              token={"pk_live_51JJ32dDyzKP8A38LxFQQ86RPUjH0PYlgrOAjgirTlsEpFZHgqkboTkEv4tOXCwXhjiSg5wsQ6BYQtf0ao4S1Gsjl00i4MhdDRY"} //virtud


              // token={"pk_test_51HOpsyGJ7Qox7HrulwMiLbcAReD0Q7T3gDWQ69GRiiYsZCuN6hO4X7XzX7L0jo97wRWqPGJhbCcyVlZMc3MwtRsE00rJ8gtEZR"}

             // token={"pk_test_zPLWi1QgcEijbjkGMlqJDYNd00iy0SY35c"}

            // token={"pk_live_51HOpsyGJ7Qox7Hru2YA4aF3IldU6R7BhKOhtdb0zEf3yy07eOHRNvRjfGPvZd7OBVaSKCIzK4EO7P8jwRxMvnSo600gmaYSDCE"}
          />

        </Flex>   
        </div>
      ) : <div/>
      }




      {TipoPago === 2 ? ( <div>


            <Flex sx={{ width: "500px" }} css={{ maxWidth: "500px" }}>
              <Oxxo
                Indica={props.useContext.Indica}
                Pagar={(e) => props.useAcciones.PagarOxxo(e)}
                Ordenar={(e) => props.useAcciones.OrderOxxo(e)}
                Nombre={Detalle.Nombre}
                Apellido={Detalle.Apellido}
                Email={Detalle.Email}
                // token={"pk_test_zPLWi1QgcEijbjkGMlqJDYNd00iy0SY35c"} //smxai


               // token={"pk_test_51JJ32dDyzKP8A38L67ldFs18C24C5r8679OwJbz4OybTUNyZhO9IaqAGMufan77SYokUSMrPsbcRb5m3FH5nzS8300BuhvHWNK"} //virtud

                  token={"pk_live_51JJ32dDyzKP8A38LxFQQ86RPUjH0PYlgrOAjgirTlsEpFZHgqkboTkEv4tOXCwXhjiSg5wsQ6BYQtf0ao4S1Gsjl00i4MhdDRY"} //virtud

                // token={"pk_test_51HOpsyGJ7Qox7HrulwMiLbcAReD0Q7T3gDWQ69GRiiYsZCuN6hO4X7XzX7L0jo97wRWqPGJhbCcyVlZMc3MwtRsE00rJ8gtEZR"}

                // token={"pk_live_51HOpsyGJ7Qox7Hru2YA4aF3IldU6R7BhKOhtdb0zEf3yy07eOHRNvRjfGPvZd7OBVaSKCIzK4EO7P8jwRxMvnSo600gmaYSDCE"}
              />

            </Flex>   
            </div>
          ) : <div/>
        }


    </div>
  )
}




const ModuloPagado  = () => {

  return (

    <div>
      <Box sx={{ width: "100%" }}>
        <Text sx={Estilo.msecc2g}>{"Tu pedido se realizó con éxito!"}    </Text>
      </Box>
    </div>
  )
}


const ModuloPagarFree  = () => {

  return (

    <div>

          <Box sx={{ width: "100%" }}>
            <Text sx={Estilo.msecc2g}>{"¡Inscríbete ahora!"}    </Text>
          </Box>

      
  
            <Button sx={{ width: "200px", height: "34px" }}
              width={1}
              bg={"#b8d637"}
              disabled={EnableBoton()}



              onClick={async () => {
                setLoadingSecc(true)
                let MiPago = await props.useAcciones.PagarFree()
                console.log(MiPago)
                
                setLoadingSecc(false)
              }}

            >
              <Text sx={Estilo.mbtn1}>
                Inscribirme
                {LoadingSecc ? <Spinner size={17} ml={3} /> : <div/>}
                </Text>

            </Button>



    </div>
  )
}




 
 try {

  return (
    <div>

      {Loading ? <Spinner size={17} ml={3} /> : 
        <div>

          {(props.CompStatus.pago()===1) ? ModuloEdit() : <div/>}
          {(props.CompStatus.pago()===2) ? ModuloPagado() : <div/>}
          {(props.CompStatus.pago()===3) ? ModuloPagarFree() : <div/>}

        </div>
      }

    </div>

    
  )
  
} catch (e) {
  console.error(e);
}
}

// -----------------------------------------------------------------------------
// -----------------------------------------------------------------------------

export default (App = props => {
  return (
      <ContextProvider>
        <Row className="justify-content-md-center">
            <Body {...props} />
        </Row>
      </ContextProvider>
  );
});

// -------------------------------------------------------------------------------

