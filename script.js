class Productos {
    constructor(id, nombre, marca , precio, stock) {
        this.id = id
        this.nombre = nombre
        this.marca = marca
        this.precio = precio
        this.stock = stock
    }
}

const producto1 = new Productos(1, "Film de cocina", "Asner", 100, 60)
const producto2 = new Productos(2, "Cinta de Embalar", "Roed", 50, 25)
const producto3 = new Productos(3, "Papel Alumnio", "Cocinerito", 70, 15)
const producto4 = new Productos(4, "Carton corrugado", "Resistente", 150, 80)
const producto5 = new Productos(5, "Cinta Fragil", "Fragil", 120, 70)

const mercaderia = [producto1, producto2, producto3, producto4, producto5]

mercaderia.forEach((Productos, i) => {
    console.log(i)
    console.log(Productos)
})
/*console.log(mercaderia.find(cantidad => cantidad.stock > 80 ))

function marcasAlimentos(producto) {
    return `Nombre: ${producto.nombre} - Marca ${producto.marca}`
}

const nombreMarca = mercaderia.map(esos => esos = marcasAlimentos(esos))

console.log(marcasAlimentos)*/

const stockGeneral = mercaderia.map( Productos => Productos.stock )

console.log(stockGeneral.reduce((acum, sig) => acum + sig, 0))


















/*class Autos{
    constructor(patente, titular, kilometros){
        this.patente = patente
        this.titular = titular
        this.kilometros = kilometros
    }
    aumentarKilometros(cantidadKilometros){
        this.kilometros += cantidadKilometros
    }
 }

const auto1 = new Autos("AB885PT", "Jorge Ceballos",500)
const auto2 = new Autos("AA552QR", "Pedro GOnzalez",300)
const auto3 = new Autos("AC889LO", "Jose Perales",235)
const auto4 = new Autos("AA602GH", "Alejandra Perez",178)

const moviles=[auto1, auto2, auto3, auto4]

let cambiarKilometros 
let cantidadKilometros
let estado
estado = 0
     cambiarKilometros = prompt ("Ingrese la patente para actualizar kilometraje")
     const buscar = moviles.find(i  => i.patente === cambiarKilometros, i.kilometros) 
     if (i.patente === "undefined")  {
   
    } else {      
       cantidadKilometros = parseFloat(prompt("Ingrese cantidad de Kilometros"))
       Autos.kilometros += cantidadKilometros
       estado=1  
    }
   if (estado === 1) {
       alert("Kilometraje actualizado")

       } else 
       alert("Movil no encontrado")

    
          
console.table(moviles)*/

      
  
    
          
 
