class item{
        constructor (nombreItem, precio, cantidad){
            this.nombreItem = nombreItem;
            this.precio = precio;
            this.cantidad= cantidad; 
        } 
    }
    
    const listaItems= [];
   
    function pedidoDeDatos(){
    let nombreItem = prompt ("Ingrese el nombre del item")
    nombreItem = nombreItem.toUpperCase()
    while (nombreItem =="") {
        nombreItem = prompt("Por favor, no olvide ingresar el nombre del item")
        }
    let precio = parseInt (prompt ("Ingrese el precio del item"))
    while (precio =="") {
        precio = prompt("Por favor, no olvide ingresar el precio del item")
        }
    let cantidad = parseInt (prompt ("Ingrese la cantidad de items"))
    while (cantidad =="") {
        cantidad = prompt("Por favor, no olvide ingresar la cantidad del item")
        }
        listaItems.push (new item (nombreItem, precio,cantidad ))
    }

    function otropedido(){
        let otroItem = prompt ('¿Desea ingresar otro item? "SI", "NO" O "SALIR"')

        otroItem = otroItem.toUpperCase()

        while (otroItem !='SALIR') 
        {
        switch (otroItem) {
                    case 'SI':
                        pedidoDeDatos()
                    break;
                    case 'NO':
                        final()
                    break;
                    default:
                    break; 
                    }
        otroItem = prompt ('¿Desea ingresar otro item? "SI", "NO" O "SALIR"')      
        otroItem = otroItem.toUpperCase()
        }

    }
    

    function final(){
        let listaFinal = ' '
         for (i=0;i < listaItems.length ;i++ )
    {
        listaFinal= listaFinal + ' ' + (i+1) + ' - '  + 'Nombre: ' + listaItems[i].nombreItem + ' ' + ' - ' + 'Precio: ' + ' $ '  + listaItems[i].precio + ' ' + ' - ' + ' '  + 'Cantidad: ' + listaItems[i].cantidad + '\n';
    }
    alert (listaFinal)
    }



    alert ('Bienvenido al contador de items para inventario')
    
    pedidoDeDatos()
    otropedido();

