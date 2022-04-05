import React, { useState, useEffect, useContext, createContext } from "react";

/** @jsx jsx */
import { ThemeProvider, jsx, Styled, useThemeUI } from "theme-ui";
import { Flex, Box, Button, Text, Image, Spinner, Grid, Input, Link } from "@theme-ui/components"
import Theme from "./theme"

import {useStripe, useElements, Elements} from '@stripe/react-stripe-js';

import {loadStripe} from '@stripe/stripe-js';




let App;

// -----------------------------------------------------------------------


let CardImages = {
  no: {src: "https://smxai.net/sf/card_no.jpg"},
  vs: {src: "https://smxai.net/sf/card_vs.jpg"},
  mc: {src: "https://smxai.net/sf/card_mc.jpg"},
  am: {src: "https://smxai.net/sf/card_am.jpg"},
}

// ---------------------------------------






const createOptions = (fontSize, padding) => {
  return {
    style: {
      base: {
        fontSize: fontSize,
        color: "#424770",
        letterSpacing: "0.025em",
        fontFamily: "Source Code Pro, monospace",
        "::placeholder": {
          color: "#aab7c4",
          fontFamily: "Arial, Helvetica, sans-serif"
        },
        border: "5px solid red",
        // padding
      },
      invalid: {
        color: "#9e2146"
      }
    }
  };
};





// ---------------------------------------

  const StateContext = createContext();

// ---------------------------------------

const useStateLocal = () => {
  return {
    Theme: useState(useContext(createContext(Theme))),
    Loading: useState(useContext(createContext(false))),
    Pagado: useState(useContext(createContext(0))),
    Monto: useState(useContext(createContext(0))),
    PayStatus: useState(useContext(createContext({ Status: "Generar código", Color: "#b8d637" }))),
    Indica: useState(useContext(createContext("Llena  todos los datos"))),
    Disabled: useState(useContext(createContext(false))),
    CardType: useState(useContext(createContext("--"))),
  };
};

// ------------------

const ContextProvider = props => {
  return (
    <StateContext.Provider value={useStateLocal()}>
      <ThemeProvider theme={Theme}>{props.children}</ThemeProvider>
    </StateContext.Provider>
  );
};

// ------------------------------------------------------------------------

const Body = props => {
  const Estilo = useThemeUI().theme.styles
  const [Disabled, setDisabled] = useContext(StateContext).Disabled;
  const {Pagar, Ordenar, Indica, token, Nombre, Apellido, Email} = props

  const stripePromise = loadStripe(token);











// ------------------

  const ccNumberRef = React.useRef(null);

  // -----------------------------------------------------------------

  const SplitForm = props => {
    const [PayStatus, setPayStatus] = useContext(StateContext).PayStatus

    const [refCard, setRefCard] = useState(null);
    const [refVenc, setRefVenc] = useState(null);
    const [refCvc, setRefCvc] = useState(null);

    let [CardType, setCardType] = useState(CardImages.no.src);
    const [Pagando, setPagando] = React.useState(false);


  const stripe = useStripe();
  const elements = useElements();





    const CardImage = (card) => {
      if (card==="visa") {return CardImages.vs.src}
      if (card==="mastercard") {return CardImages.mc.src}
      if (card==="amex") {return CardImages.am.src}

      return CardImages.no.src
    }

      const ColorBoton = function(props) {

        if(PayStatus.Status==="Rechazado") { return PayStatus.Color}
        if(refCard && refVenc && refCvc ){return "#B7CE3F"}
        return "lightgrey";
      }




      const handleSubmit = async ev => {
        ev.preventDefault()
        let Pago
        let Token
        


          setPagando(true)

          // ------ Bueno
            Pago = await Pagar()

            if(Pago===0) {setPayStatus({ Status: "Rechazado", Color: "DarkOrange" })}

              Token = await stripe.confirmOxxoPayment(
                Pago,
                {
                  payment_method: {
                    billing_details: {
                     // name: String(Nombre),
                      email: String(Email),
                      name: "Paco Sanchez",


                    },
                  },
                }
              )

              let Orden = await Ordenar( Token )






         // console.log({Token})
         console.log({Orden})

          setPagando(false)
        
      }



    try {


     // console.log({Email})

  // -------------------------
      return (
        <Flex sx={{ width: "100%", ml: 5 }}>

          <form style={{width: "260px"}} onSubmit={handleSubmit}>

            <Flex sx={{ width: "100%" }}>                        
                <label  sx={Estilo.cardl1} > Generaremos un código para que puedas hacer tu pago en cualquier tienda OXXO, tu pago se verá reflejado dos horas despues de hacer tu pago</label>
            </Flex>


            <Flex sx={{ width: "100%" }}>                        
              <Box sx={{width: "90%" }}>


              </Box>
              <Box sx={{width: "30%" }}>
                <Image sx={{mt: 1, mb:1, ml:2, verticalAlign: "middle" }} src={CardType} />
              </Box>

            </Flex>


            <Box css={{ height: 3 }} />




            <Box css={{ height: 21 }} />

              <Flex sx={{ width: "100%" }}>                      
                  <Box sx={{ width: "100%" }}>

                      <Button 
                        //sx={Estilo.cardbtn1(PayStatus.Color)}
                        sx={Estilo.cardbtn1(ColorBoton())}

                        width={1}
                        bg={ColorBoton()}
                        Disabled={false}
                      >
                        <Text Disabled={Disabled}>
                          {PayStatus.Status}
                          {Pagando ? <Spinner size={17} ml={3} /> : <div/>}
                        </Text>
                      </Button>

                  </Box>
              </Flex>

            <Box css={{ height: 21 }} />


          </form>

        </Flex>
      )

    } catch (e) {
      console.error(e);
    }
  }

  // -----------------------------------------------------------------


  // -------------------------

  try {
    return (
      <div>
        <Flex >
          <Box >
          <div className="Checkout">
          <Elements stripe={stripePromise}>
            <SplitForm fontSize={{ elementFontSize: "30px" }}/>
            </Elements>
          </div> 

          </Box>
        </Flex>
      </div>
    );
  } catch (e) {
    console.error(e);
  }


};


// -----------------------------------------------------------------------------
// -----------------------------------------------------------------------------

export default (App = props => {
  return (
    <ContextProvider Theme={props.Theme}>
      <Flex sx={{ width: "500px" }}>
        <Box>
          <Body {...props} />
        </Box>
      </Flex>
    </ContextProvider>
  );
});

// -------------------------------------------------------------------------------