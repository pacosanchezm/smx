import axios from "axios"

// ------------------------------------------------------------

// let graphqlserver = "https://8t8jt.sse.codesandbox.io/gql"
 let graphqlserver = "https://smxai.net/graphqleai2"
let graphqlserverb = "https://smxblogs.com/empresando/graphql"


let usedata = function(StateContextM) {

  return {

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










