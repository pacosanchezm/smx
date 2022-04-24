import axios from "axios"

// ------------------------------------------------------------

 // let graphqlserver = "https://8t8jt.sse.codesandbox.io/gql"
 let graphqlserver = "https://smxai.net/graphqleai2"


//let graphqlserverb = "https://smxblogs.com/aprendeacomer/graphql"
let graphqlserverb = "https://smxblogs.com/empresando/graphql"


let usedata = function(StateContextM) {

  return {

    Clientes: function() {
      return {
        get: async function(e) {
         
          var axdata = await axios({
            url: graphqlserver,
            method: "post",
            data: {
              query: `
                query getClientes($Query: ClienteInput) {
                  Clientes {
                    Consultas {
                      Query(Query: $Query) {
                        Id
                        Empresa
                        Telefono
                        Nombre
                      }
                    }
                  }
                }
               `,
              variables: {
                Query: {
                  Telefono: e.Telefono,
                  Empresa: e.Empresa
                }
              }
            }
          });
    
          let axdataRes = axdata.data.data.Clientes.Consultas.Query;

          if (axdataRes) {return axdataRes} else {return 0}
        },

        getId: async function(e) {
         
          var axdata = await axios({
            url: graphqlserver,
            method: "post",
            data: {
              query: `
                query getClientes($Query: ClienteInput) {
                  Clientes {
                    Consultas {
                      Query(Query: $Query) {
                        Id
                        Empresa
                        Telefono
                        Nombre
                        ApellidoPat
                        Genero
                        Nacimiento
                        Email
                        Obv
                      }
                    }
                  }
                }
               `,
              variables: {
                Query: {
                  Id: e.Id,
                }
              }
            }
          });
    
          let axdataRes = axdata.data.data.Clientes.Consultas.Query;

          if (axdataRes) {return axdataRes} else {return 0}
        },



        

        insert: async function(e) {
         
          var axdata = await axios({
            url: graphqlserver,
            method: "post",
            data: {
              query: `
                mutation insertCliente($Query: ClienteInput) {
                  ClientesM {
                    Registro {
                      InsertCliente(Query: $Query)
                    }
                  }
                }
               `,
              variables: {
                Query: {
                  Origen: e.Origen,
                  Nombre: e.Nombre,
                  ApellidoPat: e.ApellidoPat,
                  NombreCompleto: e.NombreCompleto,
                  Telefono: e.Telefono,
                  Pass: e.Pass,
                  Empresa: e.Empresa,
                  Email: e.Mail,
                  Obv: e.Obv
                }
              }
            }
          });
    
          let axdataRes = axdata.data.data.ClientesM.Registro.InsertCliente;

          if (axdataRes>0) {return axdataRes} else {return 0}
        },



        pull4: async function(e) {
          console.log({e})
          var axdata = await axios({
            url: graphqlserver,
            method: "post",
            data: {
              query: `
                mutation PullCliente ($Query: ClienteInput ) {
                  ClientesM {
                    Yield {
                      Cliente (Query: $Query)  {
                        Id
                        Nombre
                        ApellidoPat
                      }
                    }
                  }
                }
               `,
              variables: {
                Query: {
                  Empresa: e.Empresa,
                  Telefono: e.Telefono,
                  Nombre: String(e.Nombre),
                  ApellidoPat: String(e.Apellido),
                  Email: String(e.Email.replace(/\s+/g, '')),
                }
              }
            }
          });

          let axdataRes = axdata.data.data.ClientesM.Yield.Cliente
          if (axdataRes) { return axdataRes } else {return 0}

        },

        UpdatePass: async function(e) {
          console.log({e})
          var axdata = await axios({
            url: graphqlserver,
            method: "post",
            data: {
              query: `
                mutation UpdatePass ($Query: ClienteInput ) {
                  ClientesM {
                    Registro {
                      UpdatePass (Query: $Query)
                    }
                  }
                }
               `,
              variables: {
                Query: {
                  Id: e.Id,
                  Pass: e.Pass
                }
              }
            }
          });

          let axdataRes = axdata.data.data.ClientesM.Registro.UpdatePass
          if (axdataRes) { return axdataRes } else {return 0}

        },



      }
    }, //cliente



    ClientesProf: function() {
      return {
        add: async function(e, Cliente) {
            
          var axdata = await axios({
            url: graphqlserver,
            method: "post",
            data: {
              query: `
                mutation Insert($Query: ClienteProfInput) {
                  ClientesM {
                    Profs {
                      Insert(Query: $Query)
                    }
                  }
                }
              `,
              variables: {
                Query: {
                  "Cliente": Cliente,
                  "Titulo": e.Titulo,
                  "Web": e.Web,
                  "Categoria": e.Categoria,
                  "Descripcion": e.Descripcion,
                  "Empleados": e.Empleados,
                  "Estado": e.Estado,
                  "Referencia1": String(e.Referencia1),
                  "Referencia2": String(e.Referencia2),
                  "Referencia3": String(e.Referencia3),
                  // "Obv": e.Obv,

                }
              }
            }
          });

          let axdataRes = axdata.data.data.ClientesM.Profs.Insert
          if (axdataRes) { return axdataRes } else return 0
        },

      }
    }, // ClientesProf










    Page: function() {
      return {
        get: async function(e) {
         console.log(e)
          var axdata = await axios({
            url: graphqlserverb,
            method: "post",
            data: {
              query: `
              query ($Query: ID!) {
                page(id: $Query) {
                  id
                  title
                  date
                  content
                  featuredImage {
                    node {
                      sourceUrl
                    }
                }
                }
              }
               `,
              variables: {
                Query: e.ClaveWp
              }
            }
          });
    

          console.log(axdata)

          let axdataRes = axdata.data.data.page

          if (axdataRes) {return axdataRes} else {return 0}
        },


       } 
      }, // ------- Page




    
    Post: function() {
      return {
        get: async function(e) {
        // console.log(e)
          var axdata = await axios({
            url: graphqlserverb,
            method: "post",
            data: {
              query: `
              query MyQuery($QPost: ID!) {
                post(id: $QPost) {
                  id
                  title
                  date
                  excerpt
                  content
                }
              }
               `,
              variables: {
                QPost: e.id
              }
            }
          });
    

        //  console.log(axdata)

          let axdataRes = axdata.data.data.post

          if (axdataRes) {return axdataRes} else {return 0}
        },


       } 
      }, // ------- Post



      Posts: function() {
        return {
          get: async function(e) {
           
            var axdata = await axios({
              url: graphqlserverb,
              method: "post",
              data: {
                query: `
                query MyQuery {
                  posts {
                    nodes {
                      id
                      title
                      uri
                      date
                      excerpt
                      featuredImage {
                        node {
                          sourceUrl
                        }
                    }
                    }
                  }
                }
                 `,
                variables: {
                  // Query: {
                  //   Codigo: String(e.Codigo),
                  // }
                }
              }
            });
      
            let axdataRes = axdata.data.data.posts.nodes
  
            if (axdataRes) {return axdataRes} else {return 0}
          },
  
  
         } 
        }, // ------- Posts






        Catalogos: function() {

          return {
    
            get: async function(e) {
             // setLoadingSecc1(true);
        
              var axdata = await axios({
                url: graphqlserver,
                method: "post",
                data: {
                  query: `
                    query CatalogoProducto ($Query: CatalogoProductoInput) {
                      CatalogosProductos {
                        Consultas {
                          Meetings1 (Query: $Query) {
    
                            Empresa
                            EmpresasTitulo
                            EmpresasLogo
                            EmpresasLogo2
                            Sucursal
                            CatalogoTipo
    
                            Id
                            Producto
                            ProductosTitulo
                            Status
                            Precio
                            Obv
                            ServerWp
                            ClaveWp
                            Clave
                            ProductosFoto
                            ProductosFoto2
                            MeetingsHost
                            MeetingsId
                            MeetingId
                            MeetingsObv
                            MeetingsFecha
                            MeetingsLugar
                            MeetingsTemplate
                          }
                        }
                      }
                    }     
                   `,
                  variables: {
                    Query: {
                      Clave: String(e.id)
                    }
                  }
                }
              });
         
              let axdataRes = axdata.data.data.CatalogosProductos.Consultas.Meetings1;
    
              if (axdataRes) {            
                console.log(axdataRes)
    
                return axdataRes
    
              } else {
                //setLoadingSecc1(false)
                return 0}
            },
    
          };
        }, // ------- Catalogos
    
    
    






        Pedidos: function() {

          return {
    
              add: async function(e) {
    
                var axdata = await axios({
                  url: graphqlserver,
                  method: "post",
                  data: {
                    query: `
                      mutation AddPedido ($Query: PedidoInput ) {
                        PedidosM {
                          Registro {
                            InsertPedido (Query: $Query)
                          }
                        }
                      }
                     `,
                    variables: {
                      Query: {
                        Sucursal: e.Sucursal.value,
                        Cliente: e.Cliente ? e.Cliente : null,
                        Referido: e.Referido ? e.Referido : null,
                      }
                    }
                  }
                });
          
                if (axdata.data.data.PedidosM.Registro.InsertPedido) {
                  console.log(
                    "Agregado:" + axdata.data.data.PedidosM.Registro.InsertPedido
                  );
                 // setPedido(axdata.data.data.PedidosM.Registro.InsertPedido);
                  //navigate("/det");
                 // this.Pedidos().getLista();
                }
          
    
                return axdata.data.data.PedidosM.Registro.InsertPedido
    
    
              },



              upMonto : async function(e) {

                var axdata = await axios({
                  url: graphqlserver,
                  method: "post",
                  data: {
                    query: `
                      mutation upPedido ($Query: PedidoInput ) {
                        PedidosM {
                          Registro {
                            UpdateMonto (Query: $Query)
                          }
                        }
                      }
                    `,
                    variables: {
                      Query: {
                        Id: Number(e.Id),
                        Monto: Number(e.Monto),
                        // Cliente: e.Cliente,
                        // Cuenta: e.Cuenta,
                        // TipoEntrega: e.TipoEntrega,
                        Obv: e.Obv
                      }
                    }
                  }
                });
          
                if (axdata.data.data) { return 1
                  // console.log("Guardado");
                  // await this.Clientes().up();
                  // setEditado(false);
                  // this.Pedidos().getLista();
                } else {return 0}
                
              },




























    
    
    
          };
        }, // ------- Pedidos
    
    


        Consumos: function() {

          return {
    
    
    
            add2: async function(e) {
        
              var axdata = await axios({
                url: graphqlserver,
                method: "post",
                data: {
                  query: `
                    mutation InsertConsumo ($Query: ConsumoInput) {
                      ConsumosM {
                        Registro {
                          Insert (Query: $Query)
                        }
                      }
                    }
                   `,
                  variables: {
                    Query: {
                      "Pedido": e.Pedido,
                      "Producto": e.Producto,
                      "Precio": e.Precio,
                      "PrecioObv": e.PrecioObv,
                      "Descuento": 0,
                      "Cantidad": e.Cantidad,
                      "Importe": e.Importe,
                      Obv: e.Obv
                    }
                  }
                }
              });
        
        
              let axdataRes = axdata.data.data.ConsumosM.Registro.Insert
              if (axdataRes) {     
                return axdataRes
              }
            },
    
    
          };
        }, // ------- Consumos
    
    






        Cupones: function() {
          return {
    
            get : async function(e) {
    
              var axdata = await axios({
                url: graphqlserver,
                method: "post",
                data: {
                  query: `
                    query Cupon($Query: CuponInput){
                      Cupones{
                        Consultas{
                          Disponibles(Query: $Query){
                            Id
                            Tipo
                            Catalogo
                            Producto
                            Pedido
                            Consumo
                            Codigo
                            Sponsor
                            Aplicado
                            Titulo
                            DescuentoPct
                            DescuentoCant
                          }
                        }
                      }
                    }
                  `,
                  variables: {
                    Query: {
                      Codigo: String(e.Codigo),
                      Status: "Activo"
                    }
                  }
                }
              });
          
              let axdataRes = axdata.data.data.Cupones.Consultas.Disponibles[0];
          
              if (axdataRes) {
                return axdataRes
              } else { return 0}
            },
    
            aplicar : async function(e) {
    
              var axdata = await axios({
                url: graphqlserver,
                method: "post",
                data: {
                  query: `
                    mutation AplicarCupon ($Query: CuponInput ) {
                      CuponesM {
                        Registro {
                          Update (Query: $Query)
                        }
                      }
                    }
                  `,
                  variables: {
                    Query: {
                      Id: Number(e.Id),
                      Pedido: e.Pedido
                    }
                  }
                }
              });
          
              let axdataRes = axdata.data.data.CuponesM.Registro.Update      
              return axdataRes
    
            },
    
    
    
          };
        }, // ------- Cupones
    
    
    
    
    
    
        Sponsors: function() {
          return {
    
    
            get : async function(e) {
              console.log(e)
              var axdata = await axios({
                url: graphqlserver,
                method: "post",
                data: {
                  query: `
                  query Sponsors($Query: SponsorInput) {
                    Sponsors {
                      Consultas {
                        Base(Query: $Query) {
                          Id
                          Logo
                          Link
                          Titulo
                        }
                      }
                    }
                  }
                  `,
                  variables: {
                    Query: {
                      Id: Number(e.Sponsor),
                    }
                  }
                }
              });
          
              let axdataRes = axdata.data.data.Sponsors.Consultas.Base;
              console.log(axdataRes)
              if (axdataRes) {
                return axdataRes
              } else { return 0}
            },
    
    
    
    
    
    
    
    
    
    
            getMeeting : async function(e) {
              //console.log(e)
              var axdata = await axios({
                url: graphqlserver,
                method: "post",
                data: {
                  query: `
                  query MeetingsSponsors($Query: ProductoMeetingSponsorInput) {
                    ProductosMeetingsSponsors {
                      Consultas {
                        Amplia1(Query: $Query) {
                          Id
                          Meeting
                          Sponsor
                          SponsorsTitulo
                          SponsorsLogo
                          SponsorsLink
                        }
                      }
                    }
                  }
                  `,
                  variables: {
                    Query: {
                      Meeting: Number(e.MeetingsId),
                    }
                  }
                }
              });
          
              let axdataRes = axdata.data.data.ProductosMeetingsSponsors.Consultas.Amplia1;
          
              if (axdataRes) {
                return axdataRes
              } else { return 0}
    
    
    
            },
    
    
    
    
          };
        }, // ------- Sponsors
    
    
    





















































        Pagos: function() {
          return {
    

            Stripe2: async (e) => {
              console.log("PayStripe: " + JSON.stringify(e.token));
        
              var axdata = await axios({
                url: graphqlserver,
                method: "post",
                data: {
                  query: `
                  mutation PagoToken ($PayIntent: StripePaymentIntent) {
                    PagosM  {
                      Registro {
                        Pagar (Query: $PayIntent)
                      }
                    }
                  }
                `,
                  variables: {
                    PayIntent: {
                      Id: Number(e.pedido),
                      Cart: e.sucursal,
                      Token: 1234,
                      SToken: e.token,
                      Amount: Number(e.monto) * 100,
                      Descripcion: "Pedido Suc " + e.sucursal + " # " + e.pedido,
                      Ip: e.ip,
                      Servicio: Number(e.servicio),
                      Obv: e.obv
                    }
                  }
                }
              });
        
              console.log(axdata.data);
              if (axdata.data.data.PagosM.Registro.Pagar === 1) {
                // setPayStatus({ Status: "Pagado", Color: "green" });
                return 1;
              } else {
               // setPayStatus({ Status: "Pago No Procesado", Color: "red" });
                return 0;
              }
            },
    


            OxxoI: async (e) => {
        
              var axdata = await axios({
                url: graphqlserver,
                method: "post",
                data: {
                  query: `
                  mutation OxxoI ($PayIntent: StripePaymentIntent) {
                    PagosM  {
                      Registro {
                        CreateOxxoIntent (Query: $PayIntent)
                      }
                    }
                  }
                `,
                  variables: {
                    PayIntent: {
                      // Id: Number(e.pedido),
                      Cart: e.sucursal,
                      Token: 1234,
                      // SToken: e.token,
                      Amount: Number(e.monto) * 100,
                      //Descripcion: "Pedido Suc " + e.sucursal + " # " + e.pedido,
                      //Ip: e.ip,
                      Servicio: Number(e.servicio),
                      //Obv: e.obv
                    }
                  }
                }
              });
        
              console.log(axdata.data);
              return axdata.data.data.PagosM.Registro.CreateOxxoIntent
            },
    



            OxxoO: async (e) => {
                      
              var axdata = await axios({
                url: graphqlserver,
                method: "post",
                data: {
                  query: `
                  mutation PagoToken ($PayIntent: StripePaymentIntent) {
                    PagosM  {
                      Registro {
                        CreateOxxoOrder (Query: $PayIntent)
                      }
                    }
                  }
                `,
                  variables: {
                    PayIntent: {
                      Id: Number(e.pedido),
                      Cart: e.sucursal,

                      Amount: Number(e.monto) * 100,
                      Servicio: Number(e.servicio),
                      Concepto: "Pedido Suc " + e.sucursal + " # " + e.pedido,
                      Comprobante: e.referencia,

                      Obv: e.obv
                    }
                  }
                }
              });
        
              console.log(axdata.data);
              if (axdata.data.data.PagosM.Registro.CreateOxxoOrder === 1) {
                // setPayStatus({ Status: "Pagado", Color: "green" });
                return 1;
              } else {
               // setPayStatus({ Status: "Pago No Procesado", Color: "red" });
                return 0;
              }
            },
    















            
            Free: async (e) => {
              //console.log("PayStripe: " + JSON.stringify(token));
        
              var axdata = await axios({
                url: graphqlserver,
                method: "post",
                data: {
                  query: `
                  mutation PagoFree ($Query: MercadoPPaymentIntent) {
                    PagosM  {
                      Registro {
                        PagarFree (Query: $Query)
                      }
                    }
                  }
                `,
                  variables: {
                    Query: {
                      Id: Number(e.pedido),
                      Cart: e.sucursal,
                      Token: 1234,
                      //SToken: token.token.id,
                      Amount: Number(e.monto),
                      Descripcion: "Pedido Suc " + e.sucursal + " # " + e.pedido,
                      Ip: e.ip,
                      Servicio: Number(e.servicio),
                      Obv: e.obv
                    }
                  }
                }
              });
        
              
    
    
    
              console.log("update: " + axdata.data.data.PagosM.Registro.PagarFree);
              if (axdata.data.data.PagosM.Registro.PagarFree === 1) {
                // setPayStatus({ Status: "Pagado", Color: "green" });
                return 1;
              } else {
               // setPayStatus({ Status: "Pago No Procesado", Color: "red" });
                return 0;
              }
            },
    
    
    
          };
        }, // ------- Pagos
    
    




        ConsumosMeetings: function() {
          return {
    
    
            get : async function(e) {
    
              var axdata = await axios({
                url: graphqlserver,
                method: "post",
                data: {
                  query: `
                    query ConsumosMeetings($Query: ConsumoInput) {
                      Consumos {
                        Consultas {
                          Meetings1(Query: $Query){
                            Pedido
                            Id
                            ConsumosMeetingsId
                            ConsumosMeetingsIngresoUrl
                          }
                        }
                      }
                    }
                  `,
                  variables: {
                    Query: {
                      Pedido: e.Pedido
                    }
                  }
                }
              });
          
              let axdataRes = axdata.data.data.Consumos.Consultas.Meetings1;
          
              if (axdataRes) {
               // setMeetings(axdataRes)
                return axdataRes
              } else { return 0}
            },
    
    
    
    
    
    
    
    
    
    
    
    
            insert : async function(q) {
              var axdata = await axios({
                url: graphqlserver,
                method: "post",
                data: {
                  query: `
                    mutation Inscribir ($Query: ConsumoMeetingInput ) {
                      ConsumosMeetingsM {
                        Registro {
                          Insert (Query: $Query)
                        }
                      }
                    } 
                  `,
                  variables: {
                    Query: {
                      Consumo: q.Consumo,
    
    
    
    
                      // Host: q.Host,
                      // MeetingId: q.MeetingId,
                      // Email: q.Email,
                      // Nombre: q.Nombre,
                      // ApellidoPat: q.ApellidoPat,
                      // Telefono: q.Telefono,
                      // Cupon: q.Cupon,
                    }
                  }
                }
              });
          
              let axdataRes = axdata.data.data.ConsumosMeetingsM.Registro.Insert;
          
              if (axdataRes) {} else {}
            },
    
    
    
    
    
    
    
    
    
    
            inscribir : async function(q) {
              var axdata = await axios({
                url: graphqlserver,
                method: "post",
                data: {
                  query: `
                    mutation Inscribir ($Query: InscribirMeetingInput ) {
                      ConsumosMeetingsM {
                        Registro {
                          Inscribir (Query: $Query)
                        }
                      }
                    } 
                  `,
                  variables: {
                    Query: {
                      Consumo: q.Consumo,
                      Host: q.Host,
                      MeetingId: q.MeetingId,
                      Email: String(q.Email.replace(/\s+/g, '')),
                      Nombre: q.Nombre,
                      ApellidoPat: q.ApellidoPat,
                      Telefono: q.Telefono,
                      Cupon: q.Cupon,
                    }
                  }
                }
              });
          
              let axdataRes = axdata.data.data.ConsumosMeetingsM.Registro.Inscribir;
          
              if (axdataRes) {return 1} else {return 0}
            },
    
    





            
    
           
            MandarMail : async function(q) {
              var axdata = await axios({
                url: graphqlserver,
                method: "post",
                data: {
                  query: `
                    mutation MandarMail ($Query: EnviarMeetingInput ) {
                      ConsumosMeetingsM {
                        Entregas {
                          Mail (Query: $Query)
                        }
                      }
                    } 
                  `,
                  variables: {
                    Query: {
    
                      Email: String(Detalle.Email),
                      Nombre: String(Detalle.Nombre),
                      Titulo: String(Productos.ProductosTitulo),
                      Foto: String(Productos.ProductosFoto2),
                      Url: String(Meetings[0].ConsumosMeetingsIngresoUrl),
                      UrlInvita: "https://smxai.net/eventos?id=empb1",
                    }
                  }
                }
              });
          
              let axdataRes = axdata.data.data.ConsumosMeetingsM.Entregas.Mail;
          
              if (axdataRes) {return 1} else {return 0}
            },
    
    
            MandarMailNode : async function(q, Detalle, Productos) {
              var axdata = await axios({
                url: graphqlserver,
                method: "post",
                data: {
                  query: `
                    mutation MandarMail ($Query: EnviarMeetingInput ) {
                      ConsumosMeetingsM {
                        Entregas {
                          MailNode (Query: $Query)
                        }
                      }
                    } 
                  `,
                  variables: {
                    Query: {
    
                      // Email: String(q[0].Email),
                      // Nombre: String(q[0].Nombre),
                      // Titulo: String(q[0].ProductosTitulo),
                      // Foto: String(q[0].ProductosFoto2),
                      // Url: String(q[0].ConsumosMeetingsIngresoUrl),
                      // UrlInvita: "https://smxai.net/eventos?id=juansolo1&token=" + String(q[0].Cliente),



                      Email: String(Detalle.Email.replace(/\s+/g, '')),
                      Nombre: String(Detalle.Nombre),
                      Titulo: String(Productos.ProductosTitulo),
                      Foto: String(Productos.ProductosFoto2),
                      Url: String(q[0].ConsumosMeetingsIngresoUrl),
                      UrlInvita: "https://smxai.net/eventos?id=juansolo1&token=" + String(Detalle.Cliente),


                    }
                  }
                }
              });
          
              let axdataRes = axdata.data.data.ConsumosMeetingsM.Entregas.MailNode;
          
              if (axdataRes) {return 1} else {return 0}
            },
    
    
            MandarMailNodeOxxo : async function(q, Detalle, Productos, e) {
              var axdata = await axios({
                url: graphqlserver,
                method: "post",
                data: {
                  query: `
                    mutation MandarMail ($Query: EnviarMeetingInput ) {
                      ConsumosMeetingsM {
                        Entregas {
                          MailNodeOxxo (Query: $Query)
                        }
                      }
                    } 
                  `,
                  variables: {
                    Query: {

                      Email: String(Detalle.Email.replace(/\s+/g, '')),
                      Nombre: String(Detalle.Nombre),
                      Titulo: String(Productos.ProductosTitulo),
                      Foto: String(Productos.ProductosFoto2),
                      Url: String(e.paymentIntent.next_action.oxxo_display_details.hosted_voucher_url),
                      UrlInvita: "https://smxai.net/eventos?id=juansolo1&token=" + String(Detalle.Cliente),

                    }
                  }
                }
              });
          
              let axdataRes = axdata.data.data.ConsumosMeetingsM.Entregas.MailNode;
          
              if (axdataRes) {return 1} else {return 0}
            },
    
    
    
    
    
    
    
          };
        }, // ------- ConsumosMeetings
    
    
    






  }

}


export default usedata










