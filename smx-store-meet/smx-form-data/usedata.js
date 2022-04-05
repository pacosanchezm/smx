import axios from "axios"

// ------------------------------------------------------------

let graphqlserver = "https://8t8jt.sse.codesandbox.io/gql"
// let graphqlserver = "https://smxai.net/graphqleai2"
let graphqlserverb = "https://smxblogs.com/aprendeacomer/graphql"


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

      }
    },



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
                            ProductosFoto
                            ProductosFoto2
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
                //console.log(axdataRes)
    
                return axdataRes
    
              } else {
                //setLoadingSecc1(false)
                return 0}
            },
    
          };
        }, // ------- Catalogos
    
    
    




  }

}


export default usedata










