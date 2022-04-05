



import React, { useState, useEffect, useContext, createContext, Suspense } from "react"
import axios from "axios"




// ---------- styles

import 'bootstrap/dist/css/bootstrap.min.css';




/** @jsxRuntime classic */
/** @jsx jsx */

  import { ThemeProvider, jsx, Styled, useThemeUI, MenuButton } from "theme-ui"
  import { Grid, Flex, Box, Button, Text, Image, Spinner, Input, Link } from "@theme-ui/components"

  import Theme from "./theme"
  import "@babel/polyfill"

  import Container from 'react-bootstrap/Container'
  import Row from 'react-bootstrap/Row'
  
  import 'bootstrap/dist/css/bootstrap.min.css';

  import { useMediaQuery } from 'react-responsive'

  import {Helmet} from "react-helmet";



  import Head from "./head"
  import Menu from "./smx_menu/menu"


  import SideBar from "./smx_menu/sidebar";
  import "./styles.css";

  import usedata from "./usedata"
  

  import WpPage from "./smx-wp-page/appi"
  import FormData from "./smx-form-data/appi"
  import Cupon from "./smx-cupon/appi"
  import Sponsor from "./smx-sponsor/appi"

  import Pago from "./smx-pay/appi"
  import Signup from "./smx-signup/appi"
  import Share from "./smx-share/appi"


  //import Pago from "./pago"



  
  let App;
  const StateContext = createContext();

// -----------------------------------------------------------------------------
// ---------------

  let server = "https://www.empresando.com"


  let MiDetalle = {
    Id: ["0"],
    Codigo: [""],
    Fecha: [""],
    Ciudad: "",
  
  
    // Nombre: "Paco",
    // Apellido: "Sanchez M",
    // Telefono: "4772740011",
    // Email: "paco_sanchezm@hotmail.com",
  
  
  
    Nombre: "",
    Apellido: "",
    Telefono: "",
    Email: "",
  
  
  
  
    TipoEntrega: [""],
    Confirmado: [""],
  
    Sucursal: [""],
    Cliente: null,
    Cuenta: [""],
    Monto: [""],
    Obv: [""],
  
    Cupon: [""],
    Estado: "",

  
  };
  

  let MisProductos = {
    "Id": 1,
    "Producto": 785,
    "ProductosTitulo": "¿Comprar una franquicia o emprender desde cero?",
    "Precio": 200,
    "Obv": "",
    "ProductosFoto": "https://smxblogs.com/empresando/wp-content/uploads/2021/06/sinrollo1w2.jpg",
    "ProductosFoto2": "https://smxblogs.com/empresando/wp-content/uploads/2021/06/sinrollo1w2.jpg",
    "MeetingsId": 28,
    "MeetingId": "89719772827",
    "MeetingsObv": "",
    "MeetingsFecha": "1602968400000",
    "MeetingsLugar": "CDMX",
    "MeetingsTemplate": "1",
    "EmpresasLogo2": "https://jukevoxmx.app/jukevox/beatlogo2.jpg",
    "EmpresasLogo": "",
    "EmpresasTitulo": "Empresando",
    Status: "Activo",
    Empresa: 4,
    Sucursal: 25,
  }


  let MiRegistro = {
    "id": 0,

  }


  let MiMeetings = [
    {
      "Pedido": [""],
      "Id": [""],
      "ConsumosMeetingsId": [""],
      "ConsumosMeetingsIngresoUrl": null,
       // "ConsumosMeetingsIngresoUrl": "https://us02web.zoom.us/w/86434072795?tk=Oi4qLRGUfcklHUNqyHO6QNVoWLOin2EyGC2LSzMy1qg.DQIAAAAUH99I2xZpSnNyYm5fX1NNdW1zcHdaZU1xaGxBAAAAAAAAAAAAAAAAAAAAAAAAAAAA&pwd=dDA1akkwNm1hKzFwTlJmT2s1NzMrUT09",
    }
  ];



  const Estados = [
    { value: "Aguascalientes", label: "Aguascalientes" },
    { value: "Baja California", label: "Baja California" },
    { value: "Baja California Sur", label: "Baja California Sur" },
    { value: "Campeche", label: "Campeche" },
    { value: "Chiapas", label: "Chiapas" },
    { value: "Chihuahua", label: "Chihuahua" },
    { value: "Coahuila", label: "Coahuila" },
    { value: "Ciudad de México", label: "Ciudad de México" },
    { value: "Colima", label: "Colima" },
    { value: "Durango", label: "Durango" },
    { value: "Estado de México", label: "Estado de México" },
    { value: "Guanajuato", label: "Guanajuato" },
    { value: "Guerrero", label: "Guerrero" },
    { value: "Hidalgo", label: "Hidalgo" },
    { value: "Jalisco", label: "Jalisco" },
    { value: "Michoacán", label: "Michoacán" },
    { value: "Morelos", label: "Morelos" },
    { value: "Nayarit", label: "Nayarit" },
    { value: "Nuevo León", label: "Nuevo León" },
    { value: "Oaxaca", label: "Oaxaca" },
    { value: "Puebla", label: "Puebla" },
    { value: "Querétaro", label: "Querétaro" },
    { value: "Quintana Roo", label: "Quintana Roo" },
    { value: "San Luis Potosí", label: "San Luis Potosí" },
    { value: "Sinaloa", label: "Sinaloa" },
    { value: "Sonora", label: "Sonora" },
    { value: "Tabasco", label: "Tabasco" },
    { value: "Tamaulipas", label: "Tamaulipas" },
    { value: "Tlaxcala", label: "Tlaxcala" },
    { value: "Veracruz", label: "Veracruz" },
    { value: "Yucatán", label: "Yucatán" },
    { value: "Zacatecas", label: "Zacatecas" },
  ]
  
  







const useStateUniv = () => {
  return {
    Theme: useState(useContext(createContext(Theme))),
    LoadingSecc1: useState(useContext(createContext(false))),
    Empresa: useState(useContext(createContext(1))),

    Menu: {
      onMenu: useState(useContext(createContext(false))),
      Selected: useState(useContext(createContext(0))),
    },

    User: {
      Id: useState(useContext(createContext(null))),
      Name: useState(useContext(createContext(null))),
      Sucursal: useState(useContext(createContext(0))),
      LoginName: useState(useContext(createContext(""))),
      LoginPass: useState(useContext(createContext(""))),
      Status: useState(useContext(createContext(""))),

    },

    Signup: {
      Id: useState(useContext(createContext(null))),
      Name: useState(useContext(createContext(null))),
      LoginName: useState(useContext(createContext(""))),
      LoginPass: useState(useContext(createContext(""))),
    },

    Images: {
      Logo1: useState(useContext(createContext({src: "https://smxblogs.com/empresando/wp-content/empresando/logoemp.png"}))),
      Logo2: useState(useContext(createContext({src: "https://smxai.net/sf/sflogo2.jpg"}))),
      Flechad: useState(useContext(createContext({src: "https://smxai.net/sf/cs1/arrowd1.png"}))),
      Flechau: useState(useContext(createContext({src: "https://smxai.net/sf/cs1/arrowu1.png"}))),
      Ayuda: useState(useContext(createContext({src: "https://smxai.net/sf/cs1/ayuda.jpg"}))),
      Icon1: useState(useContext(createContext({src: "https://smxblogs.com/empresando/wp-content/empresando/avatar.png"}))),
      Iconfb: useState(useContext(createContext({src: "https://smxblogs.com/empresando/wp-content/empresando/avatar.png"}))),
      Iconig: useState(useContext(createContext({src: "https://smxblogs.com/empresando/wp-content/empresando/avatar.png"}))),


    },

    Loading: {
      DataMain: useState(useContext(createContext(false))),
      Page: useState(useContext(createContext(false))),
      Info: useState(useContext(createContext(false))),

    },

    Registros: useState(useContext(createContext([]))),
    Registro: useState(useContext(createContext(MiRegistro))),
    Pagina: useState(useContext(createContext({}))),
    CatalogoProducto: useState(useContext(createContext({}))),

    Detalle: useState(useContext(createContext(MiDetalle))),

    Estados: useState(useContext(createContext(Estados))),

    Aceptado: useState(useContext(createContext(false))),


    Editado: useState(useContext(createContext(false))),

    Pedido: useState(useContext(createContext(9999))),   
    Referido: useState(useContext(createContext(0))),   

    Sucursal: useState(useContext(createContext({value: 27}))),
    Productos: useState(useContext(createContext(MisProductos))),

    CuponAplicado: useState(useContext(createContext(false))),
    SponsorCupon: useState(useContext(createContext({}))),



    Precio: useState(useContext(createContext(0))),

    Pagado: useState(useContext(createContext(0))),
    Inscrito: useState(useContext(createContext(false))),

    Indica: useState(useContext(createContext("Llena todos los datos"))),

    Meetings: useState(useContext(createContext(MiMeetings))),

    Registrado: useState(useContext(createContext(false))),



    Extend: {
      Page: useState(useContext(createContext(true))),
      FormData: useState(useContext(createContext(false))),
    },





  };
};

// ------------------

const ContextProvider = ({ children }) => {
  return (
    <StateContext.Provider value={useStateUniv()}>
      <ThemeProvider theme={Theme}>{children}</ThemeProvider>
    </StateContext.Provider>
  );
};





let useStatus = function(StateContextM) {

  const [Registro, setRegistro] = useContext(StateContext).Registro
  const [Registros, setRegistros] = useContext(StateContext).Registros




  const [ExtendFormData, setExtendFormData] = useContext(StateContext).Extend.FormData

  const [ExtendPage, setExtendPage] = useContext(StateContext).Extend.Page
  const [CatalogoProducto, setCatalogoProducto] = useContext(StateContext).CatalogoProducto

  const [Precio, setPrecio] = useContext(StateContext).Precio

  const [Pagado, setPagado] = useContext(StateContext).Pagado

  const [CuponAplicado, setCuponAplicado] = useContext(StateContext).CuponAplicado
  const [Inscrito, setInscrito] = useContext(StateContext).Inscrito

  const [SponsorCupon, setSponsorCupon] = useContext(StateContext).SponsorCupon


  const [Registrado, setRegistrado] = useContext(StateContext).Registrado


  return {

    cover: function() { return 1 },


    page: function() {
      if (ExtendPage) {
        if (Registro.id) {return 1}
      }
      return 0
    },


    form: function() {

      if (ExtendFormData) {
        if (Registros.length>0){
          return 0
        }
        
        return 1
      
      }

      return 0
    },


    cupon: function() {


      if (CatalogoProducto.length>0) {
        if (Pagado===CatalogoProducto[0].Precio) {return 2}
      }

      if (Registros.length>0){
        return 1
      }



      return 0
    },


    sponsor: function () {

      if (CuponAplicado){ 
      
        // if (CatalogoProducto[0].Precio===0) {return 1}

        if (Precio===0) {return 1}



        return 2
      } else {return 0}


      return 0
    },









    pago: function() {

      if (CatalogoProducto.length>0) {

        // if (Pagado===CatalogoProducto[0].Precio) {
        //   // console.log("iguales")
        //   return 2
        // }



        if (!Inscrito) {

          if (Number(Precio)===0) {
          //  console.log("gratis")
            return 3
          }


        }



        if (Inscrito) {
          // console.log("iguales")
          return 2
        }



        if (Pagado===Precio) {
          // console.log("iguales")
          return 2
        }




      }



      if (Registros.length>0){
        return 1
      }

      return 0
    },



    signup: function() {

      if (Registros.length>0){
        // if (Pagado===CatalogoProducto[0].Precio) {
        //   if (Registrado===false) { return 1 }
        // }
        
        if (Precio) {
          if (Pagado===Precio) {
            if (Registrado===false) { return 1 }
          }
        }


        if (CuponAplicado) {
          if (Inscrito) { 
            if (Registrado===false) { return 1 }

          }
        }





      }

      return 0
    },



    share: function() {

     // if (Registros.length>0){ return 1 }

      if (Registrado) { return 1 }

      return 0
    },
























  }
}

// --------------------------------------------------------------------------





// -----------------------------------------------------------------------------

let useAcciones = function(StateContext) {

  const [LoginName, setLoginName] = useContext(StateContext).User.LoginName;
  const [LoginPass, setLoginPass] = useContext(StateContext).User.LoginPass;
  const [UserId, setUserId] = useContext(StateContext).User.Id;
  const [UserName, setUserName] = useContext(StateContext).User.Name;
  const [Sucursal, setSucursal] = useContext(StateContext).User.Sucursal;
  const [Status, setStatus] = useContext(StateContext).User.Status;


  const useData = new usedata()


  const [Registro, setRegistro] = useContext(StateContext).Registro
  const [Registros, setRegistros] = useContext(StateContext).Registros
  const [Pagina, setPagina] = useContext(StateContext).Pagina

  const [LoadingDataMain, setLoadingDataMain] = useContext(StateContext).Loading.DataMain
  const [LoadingPage, setLoadingPage] = useContext(StateContext).Loading.Page

  const [CatalogoProducto, setCatalogoProducto] = useContext(StateContext).CatalogoProducto

  const [Detalle, setDetalle] = useContext(StateContext).Detalle
  const [Productos, setProductos] = useContext(StateContext).Productos

  const [Meetings, setMeetings] = useContext(StateContext).Meetings;

  const [Empresa, setEmpresa] = useContext(StateContext).Empresa

  const [PedidoSucursal, setPedidoSucursal] = useContext(StateContext).Sucursal

  const [Pedido, setPedido] = useContext(StateContext).Pedido
  const [Referido, setReferido] = useContext(StateContext).Referido

  const [SponsorCupon, setSponsorCupon] = useContext(StateContext).SponsorCupon

  const [Precio, setPrecio] = useContext(StateContext).Precio


  const [Pagado, setPagado] = useContext(StateContext).Pagado




  const [Inscrito, setInscrito] = useContext(StateContext).Inscrito
  const [Registrado, setRegistrado] = useContext(StateContext).Registrado




  // ---------------------
  

  return {

     getUser : async (props) => {
      try {
        const res = await axios.get(server + '/logindata')
        setUserId(res.data.miid)
        setUserName(res.data.miuser)
        setSucursal(res.data.misucursal)

        // Todo: Como jalar el req y el t?


      } catch (e) { console.error(e) }
    },


    Loader : async function (props) {
      this.getUser()

      setLoadingDataMain(true)

      let useCatalogoProducto = await useData.Catalogos().get({id:"desdecero"}) //todo hilar con request
      console.log(useCatalogoProducto)
      setCatalogoProducto(useCatalogoProducto)
      setPrecio(useCatalogoProducto[0].Precio)








      if (useCatalogoProducto.length>0){

        setEmpresa(useCatalogoProducto[0].Empresa)
        setPedidoSucursal(useCatalogoProducto[0].Sucursal)


        setLoadingPage(true)

         let useDataRes = await useData.Page().get({ClaveWp:useCatalogoProducto[0].ClaveWp})

        // let useDataRes = await useData.Page().get({ClaveWp:"cG9zdDoxMTg1"})


        setRegistro(useDataRes)
        setLoadingPage(false)

      }



      setLoadingDataMain(false)



    },


    Logger : async function (props) {
      let axapi = await axios({
        method: "get",
        headers: { 'Access-Control-Allow-Origin': '*'},
        url: "/loginp",
        baseURL: server,
        params: {
          username: LoginName,
          password: LoginPass,
        }
      })
  
      if(axapi.data._id) {
       await setUserId(axapi.data._id)
       await setUserName(axapi.data.username)

      } else {
         setStatus("Usuario o pass incorrectos")
      }

    },



    Logger2 : async function (e) {
      let axapi = await axios({
        method: "get",
        headers: { 'Access-Control-Allow-Origin': '*'},
        url: "/loginp",
        baseURL: server,
        params: {
          username: e.Tel,
          password: e.Pass,
        }
      })
  
      if(axapi.data._id) {
       await setUserId(axapi.data._id)
       await setUserName(axapi.data.username)

      } else {
         setStatus("Usuario o pass incorrectos")
      }

    },






     Logout : async function (props) {
      let axapi = await axios({
        method: "get",
        headers: { 'Access-Control-Allow-Origin': '*'},
        url: "/logout",
        baseURL: server,
      });
  
      await setUserId(null)
      await setUserName("")
    },

     useChange : (Field, setField) => {
      return {
        name: Field,
        value: Field,
        fontSize: 1,
        color: "#595959",
        bg: "#DCDCDC",
        onChange: e => {
          setField(e.target.value);
        }
      }
    },



    // getPost : async function (e) {
    //   let useDataRes = await useData.Post().get(e)
    //   setRegistro(useDataRes)
    // },


    // getPage : async function (e) {
    //   let useDataRes = await useData.Page().get(e)
    //   setPagina(useDataRes)
    // },



    InfoAdd : async function (e) {

      try{

        let MiCliente = await useData.Clientes().pull4(Detalle) 
        console.log({MiCliente: MiCliente})
        await setDetalle({ ...Detalle, "Cliente": MiCliente.Id })

        // el manual
          let MiPedido = 6053
          let MiConsumo = 7937

        // para correo
          //  let MiPedido = 6680
          //  let MiConsumo = 9320


           setPedido(MiPedido)
           setRegistros([{Id: MiConsumo}])


        // el bueno
          // let MiPedido = await this.PedidoAdd(MiCliente.Id, Referido)
          //  setPedido(MiPedido)
          // let MiConsumo = await this.ConsumoAdd(MiPedido)
          //   setRegistros([{Id: MiConsumo}])


        return 1

      } catch (e) {
        console.error(e)
        return 0
      }
    },


    PedidoAdd : async function (MiCliente, Referido) {
      // console.log("ClienteP: " + MiCliente)
      // console.log("Referido: " + Referido)
 
       let MiPedido = await useData.Pedidos().add({
         Sucursal: {value: PedidoSucursal},
         Cliente: MiCliente,
         Referido: Referido ? Referido : null,
       }) 





       return MiPedido
 
     },
 
 
     ConsumoAdd : async function (MiPedido) {
 
       let MiConsumo = await useData.Consumos().add2({
         Pedido: MiPedido,
         Producto: CatalogoProducto[0].Producto,
         Precio: CatalogoProducto[0].Precio,
         PrecioObv: "",
         Cantidad: 1,
         Importe: CatalogoProducto[0].Precio,
         Obv: String(CatalogoProducto[0].Obv),
 
       }) 
       
       return MiConsumo
     },









     getCupon : async function (e) {



      try{
        let MiCupon = await useData.Cupones().get(e);
        return MiCupon





      } catch (e) {console.error(e)
        return 0
      }
    },

    aplicarCupon : async function (e) {

      try{
        let MiCupon = await useData.Cupones().aplicar(e)
        let MiSponsor = await useData.Sponsors().get(e)
        
        setSponsorCupon(MiSponsor[0])
        console.log(MiSponsor)
        return MiCupon

      } catch (e) {console.error(e)
        return 0
      }
    },





    hookCupon : async function (e) {

      try{

        // let Data = await useData.Sponsors().getMeeting(CatalogoProducto[0])
        // console.log(Data)
        //  await setSponsorCupon(Data[0])
        
        return 1

      } catch (e) {console.error(e)
        return 0
      }
    },

















     PagarFree : async function (e) {

      let MiMonto = await useData.Pedidos().upMonto(
        {
          Id: Pedido,
          Monto: Precio,
          Obv: null,
        }
      )


      let MiPago = await useData.Pagos().Free({

         sucursal: PedidoSucursal,
         pedido: Pedido,
         monto: Precio,
         servicio: 0,
         obv: null,
      })
      
      

      if(MiPago===1){
        setPagado(CatalogoProducto[0].Precio)
        this.Inscribir()    // activar para inscribir en zoom
      }
      return MiPago
    },



    PagarStripe : async function (e) {
      //console.log({PagarStripe: e})

      let MiPago

      try{

        // return 0

         // ---- El bueno
          MiPago = await useData.Pagos().Stripe2(
            {
              token: e.token.id,
              ip: e.token.client_ip,
              sucursal: PedidoSucursal,
              pedido: Pedido,
              monto: Precio,
              servicio: 0,
              obv: null,
            }
          )


          let MiMonto = await useData.Pedidos().upMonto(
            {
              Id: Pedido,
              Monto: Precio,
              Obv: null,
            }
          )



        // ---- Test
         // MiPago = 1

        if(MiPago===1){
          setPagado(Precio)

          this.Inscribir()    // activar para inscribir en zoom
        }

        return MiPago

      } catch (e) {console.error(e); return 0}

    },




    PagarOxxo : async function (e) {
      let MiIntent
      let MiPago

      try{

         // ---- El bueno
         MiIntent = await useData.Pagos().OxxoI(
            {
              sucursal: PedidoSucursal,
              monto: Precio,
              servicio: 0,
            }
          )

        // ---- Test
         // MiPago = 1

        if(MiPago===1){
         // setPagado(Precio)
         //  this.Inscribir()    // activar para inscribir en zoom

         let MiMonto = await useData.Pedidos().upMonto(
          {
            Id: Pedido,
            Monto: Precio,
            Obv: null,
          }
        )



        }

        return MiIntent

      } catch (e) {console.error(e); return 0}

    },



    OrderOxxo : async function (e) {
      //console.log({PagarStripe: e})

      let MiPago

      try{

        // return 0

         // ---- El bueno
          MiPago = await useData.Pagos().OxxoO(
            {
              pedido: Pedido,
              sucursal: PedidoSucursal,
              monto: Precio,
              servicio: 0,
              referencia: e.paymentIntent.next_action.oxxo_display_details.hosted_voucher_url,
              obv: null,
            }
          )

        // ---- Test
        // MiPago = 1

        if(MiPago===1){

          this.InscribirOxxo(e)    
          
        }

        return MiPago

      } catch (e) {console.error(e); return 0}

    },










    







    Inscribir : async function () {
      let MiInscribir
      //console.log("ClienteP: " + MiCliente)
      try{
        //setLoadingSecc5(true)


        // El bueno 
           MiInscribir = await useData.ConsumosMeetings().inscribir({
            Consumo: Registros[0].Id,
            Host: String(CatalogoProducto[0].Host),
            MeetingId: String(CatalogoProducto[0].MeetingId),
            Email: String(Detalle.Email),
            Nombre: String(Detalle.Nombre),
            ApellidoPat: String(Detalle.Apellido),
            Telefono: String(Detalle.Telefono),
            Cupon: 0,
          }) 


        // Test
       // MiInscribir = 1

        // console.log({MiInscribir})

        if(MiInscribir===1){
         let getMeetings = await useData.ConsumosMeetings().get({Pedido: Pedido})
         setMeetings(getMeetings)
         console.log({getMeetings})

          if (getMeetings[0].ConsumosMeetingsIngresoUrl!=null) {
            let mailenvia = await useData.ConsumosMeetings().MandarMailNode(getMeetings, Detalle, Productos)
           // console.log({mailenvia})

           // setLoadingSecc5(false)
           setInscrito(true)
           
           
           return 1
          } else { }
        }

        //setLoadingSecc5(false)
        
        return 0

      } catch (e) {
        console.error(e)
        return 0
      }
    },



    InscribirOxxo : async function (e) {
      //console.log("ClienteP: " + MiCliente)
      try{

         let getMeetings = await useData.ConsumosMeetings().get({Pedido: Pedido})
         setMeetings(getMeetings)
         console.log({getMeetings})

          if (getMeetings[0].ConsumosMeetingsIngresoUrl!=null) {
           // setInscrito(true)
                     
           // return 1
          } else { }
        


          let mailenvia = await useData.ConsumosMeetings().MandarMailNodeOxxo(getMeetings, Detalle, Productos, e)
          console.log({mailenvia})



          setPagado(Precio)
        //setLoadingSecc5(false)
        
        return 0

      } catch (e) {
        console.error(e)
        return 0
      }
    },











    UpdatePass : async function (e) {

       let MiPass = await useData.Clientes().UpdatePass(e) 

        if (MiPass === 1) {
         await setRegistrado(true)
        // Loguear          
          // await setLoginName(String(e.Tel))
          // await setLoginPass(String(e.Pass))
          await this.Logger2(e)

        
        }






       return MiPass
 
     },

















  }
}


// -----------------------------------------------------------------------------

const HeaderBody = props => {
  const [Loading, setLoading] = useContext(StateContext).LoadingSecc1

 // const useData = new usedata()
  const useacciones = new useAcciones(StateContext)
  const [CuponAplicado, setCuponAplicado] = useContext(StateContext).CuponAplicado

// ------------

  useEffect(() => {useacciones.Loader(props) }, [])
//  useEffect(() => {useacciones.hookCupon(props) }, [CuponAplicado])

// ------------
  try {
    return (
      <Flex sx={{width: "100%" }}>

        <Box sx={{ width: "100%" }}>

          <Head sx={{width: "100%" }}
            useContext={useContext(StateContext)}
            // useData = {useData}
            useAcciones = {useacciones}
          />

        </Box>

      </Flex>
    )
  } catch (e) {
    console.error(e);
  }
}

// -----------------------------------------------------------------------------


const Body = props => {

  const useacciones = new useAcciones(StateContext)
  const [Registro, setRegistro] = useContext(StateContext).Registro

// ------------

  useEffect(() => {useacciones.Loader(props) }, [])

// ------------
  try {
    return (
      // <div>
      // <Flex sx={{width: "100%" }}>

      //   <Box sx={{ width: "100%" }}>

      //     <WpPage
      //       clave = {Registro.id}
      //       Theme={Theme}
      //       useAcciones={useacciones}
      //       useContext={useContext(StateContext)}
      //       CompStatus={useStatus(StateContext)}
      //     />
      //   </Box>

      // </Flex>



      // <Flex bg="white" sx={{width: "100%" }}>

      //   <Box sx={{ width: "100%" }}>

      //     <FormData
      //       Theme={Theme}
      //       useAcciones={useacciones}
      //       useContext={useContext(StateContext)}
      //       CompStatus={useStatus(StateContext)}
      //     />

      //   </Box>

      // </Flex>

      // <Flex bg="white" sx={{width: "100%" }}>

      //   <Box sx={{ width: "100%" }}>

      //     <Cupon
      //       Theme={Theme}
      //       useAcciones={useacciones}
      //       useContext={useContext(StateContext)}
      //       CompStatus={useStatus(StateContext)}
      //     />

      //   </Box>

      // </Flex>

      // <Flex bg="white" sx={{width: "100%" }}>

      //   <Box sx={{ width: "100%" }}>

      //     <Sponsor
      //       Theme={Theme}
      //       useAcciones={useacciones}
      //       useContext={useContext(StateContext)}
      //       CompStatus={useStatus(StateContext)}
      //     />

      //   </Box>

      // </Flex>






      // <Flex bg="white" >

      //   <Box sx={{ width: "100%" }}>

      //     <Pago
      //       Theme={Theme}
      //       useAcciones={useacciones}
      //       useContext={useContext(StateContext)}
      //       CompStatus={useStatus(StateContext)}
      //     />

      //   </Box>

      // </Flex>


      // <Flex bg="white" >

      //   <Box sx={{ width: "100%" }}>

      //     <Signup
      //       Theme={Theme}
      //       useAcciones={useacciones}
      //       useContext={useContext(StateContext)}
      //       CompStatus={useStatus(StateContext)}
      //     />

      //   </Box>

      // </Flex>


      // <Flex bg="white" >

      //   <Box sx={{ width: "100%" }}>

      //     <Share
      //       Theme={Theme}
      //       useAcciones={useacciones}
      //       useContext={useContext(StateContext)}
      //       CompStatus={useStatus(StateContext)}
      //     />

      //   </Box>

      // </Flex>

      // </div>







      <Container>

        <Helmet>
          <meta charSet="utf-8" />
          <title>{Registro.title}</title>
          {/* <link rel="canonical" href="http://mysite.com/example" /> */}
          <meta property="og:title" content={Registro.title} />

          { Registro.excerpt ? 
            <meta property="og:description" content={Registro.excerpt.substring(3, Registro.excerpt.length - 3)} />
            : <meta property="og:description" content="¿Te gustaría emprender y no sabes cómo empezar? Descubre cómo lograrlo de la mano de Ferenz Feher, uno de los consultores de negocios más reconocidos, no solo en México, sino a nivel internacional" />
          }

          { Registro.featuredImage ? 
            <meta property="og:image" content={Registro.featuredImage.node.sourceUrl} />
            : <meta/>
          }

        </Helmet>




          <WpPage
            clave = {Registro.id}
            Theme={Theme}
            useAcciones={useacciones}
            useContext={useContext(StateContext)}
            CompStatus={useStatus(StateContext)}
          />




          <FormData
            Theme={Theme}
            useAcciones={useacciones}
            useContext={useContext(StateContext)}
            CompStatus={useStatus(StateContext)}
          />



          <Cupon
            Theme={Theme}
            useAcciones={useacciones}
            useContext={useContext(StateContext)}
            CompStatus={useStatus(StateContext)}
          />



          <Sponsor
            Theme={Theme}
            useAcciones={useacciones}
            useContext={useContext(StateContext)}
            CompStatus={useStatus(StateContext)}
          />






          <Pago
            Theme={Theme}
            useAcciones={useacciones}
            useContext={useContext(StateContext)}
            CompStatus={useStatus(StateContext)}
          />




          <Signup
            Theme={Theme}
            useAcciones={useacciones}
            useContext={useContext(StateContext)}
            CompStatus={useStatus(StateContext)}
          />



          <Share
            Theme={Theme}
            useAcciones={useacciones}
            useContext={useContext(StateContext)}
            CompStatus={useStatus(StateContext)}
          />


</Container>
























    )
  } catch (e) {
    console.error(e);
  }
}

// -----------------------------------------------------------------------------


const MenuBody = props => {
  const Estilo = useThemeUI().theme.styles;
  // const usestatus = new useStatus(StateContext)
  const useacciones = new useAcciones(StateContext)

// ------------
try {

  return (
    <Flex sx={{width: "100%" }}>

      <Box sx={{ width: "100%" }}>

        <Menu 
          useContext={useContext(StateContext)}
          useAcciones = {useacciones}
          //useStatus = {usestatus}
        />

      </Box>

    </Flex>
    )

  } catch (e) {
    console.error(e);
  }
}




// -----------------------------------------------------------------------------


const Pie = props => {
  const Estilo = useThemeUI().theme.styles;
  // const { getRegistros, getDetalle } = useData();

  const useacciones = new useAcciones(StateContext)

  try {
    return (
      <div>
        <Flex
        
          sx={{
            p: 1,
            bg: "gray",
            fontWeight: "normal",
            fontSize: 3,
            color: "#FFFFFF",
            fontFamily: "body",
            width: "100%"
          }}
        >

        </Flex>

        <Flex>
          <Box sx={{ width: "100%" }}>
            <Text sx={Estilo.h3}>
              2021 empresando.com
            </Text>
          </Box>
        </Flex>
      </div>
    );
  } catch (e) {
    console.error(e);
  }
};















// const CompPage = props => {
//   try {
//     return (
//       <div>

//         <Page
//           Theme={Theme}
//           useContext={useContext(StateContext)}
//           CompStatus={useStatus(StateContext)}
//         />

        




//       </div>
//     )
//   } catch (e) {
//     console.error(e);
//   }
// };

// -----------------------------------------------------------------------------


















// -----------------------------------------------------------------------------
// -----------------------------------------------------------------------------


export default (App = props => {

  const isDesktop = useMediaQuery({ minWidth: 550 })

  return (

      <div id="App">

        {isDesktop ? <div/>
          :  <div>
              <SideBar pageWrapId={"page-wrap"} outerContainerId={"App"} />
            </div>                 
        }


        <div id="page-wrap">

          <div style={{display: 'flex'}}
          >
              <ContextProvider>

                <Flex bg="white"
                  sx={{
                    flexDirection: "column",
                    width: "100%",
                    //minHeight: '300vh',
                    //justifyContent: 'center'
                  }}
                 // css={{ maxWidth: "768px", minWidth: "410px" }}

                >
                  <header sx={{width: "100%"}}>
                    <HeaderBody {...props} />

                    {isDesktop ? 
                        <div>

                          <MenuBody {...props} />

                        </div>                 
                      : <div/>
                    }

                  </header>

                  <main>
                    <Body {...props} />
                  </main>


                  <footer sx={{width: "100%"}}>
                    <div
                      sx={{
                        display: "block",
                        padding: "10px",
                        paddingLeft: "10px",
                        height: "40px",
                        width: "100%"
                      }}
                    />

                    <div
                      style={{
                        backgroundColor: "gray",
                        fontSize: "20px",
                        color: "white",
                        borderTop: "1px solid #E7E7E7",
                        textAlign: "left",
                        paddingLeft: "20px",
                        position: "fixed",
                        left: "0",
                        bottom: "0",
                        height: "50px",
                        width: "100%"
                      }}
                    >
                      <Pie {...props} />
                    </div>
                  </footer>


                </Flex>

              </ContextProvider>
          </div>

        </div>
      </div>


);
});

// -------------------------------------------------------------------------------






