use("tienda_ropa");

const colores = ["Rojo", "Azul", "Negro", "Blanco", "Verde", "Gris", "Amarillo", "Rosa", "Marrón", "Morado"];
const tallas = ["XS", "S", "M", "L", "XL", "XXL", "XXXL"];
const prendas = ["Vestido floral", "Blusa a rayas", "Jeans ajustados", "Falda plisada", "Chaqueta de cuero", "Camisa de botones", "Pantalones chinos", "Camiseta polo", "Traje de negocios", "Sudadera con capucha", "Jeans desgarrados", "Camiseta blanca básica", "Chaqueta vaquera", "Pantalones deportivos", "Abrigo de invierno", "Vestido de noche", "Chaleco", "Blusa de encaje", "Shorts de mezclilla", "Jersey de lana", "Traje de baño", "Saco elegante", "Falda larga", "Blusa sin hombros", "Pantalones cortos deportivos", "Chaqueta de bombardero", "Sudadera sin capucha", "Vestido de verano", "Blazer", "Sudadera con estampado", "Mono de trabajo", "Chaqueta de cuero sintético", "Blusa de lunares"];
const materialesPrendas = ["Algodón", "Seda", "Poliéster", "Cuero genuino", "Denim", "Lino", "Felpa", "Lana", "Pana", "Licra", "Terciopelo", "Cachemira", "Nailon", "Corduroy", "Tul", "Satén", "Tejido de punto", "Franela", "Chifón", "Piel sintética", "Tela de encaje"];


const ropas = new Array(500).fill(null).map(() => {
    return {
        nombre: elementoAleatorio(prendas),
        material: elementoAleatorio(materialesPrendas),
        precio: "$" + numeroAleatorio(50000, 10000000),
        colores: elementosAleatorios(colores),
        tallas: elementosAleatorios(tallas),
    }
})

function elementoAleatorio(arreglo) {
    const indiceAleatorio = Math.floor(Math.random() * arreglo.length);
    return arreglo[indiceAleatorio];
}

function numeroAleatorio(minimo, maximo) {
    return Math.floor(Math.random() * (maximo - minimo + 1)) + minimo
}

function elementosAleatorios(arreglo){
    return arreglo.filter(() => Math.random() < .2)
}

// console.log(ropas);

db.getCollection("ropa").insertMany(ropas)
