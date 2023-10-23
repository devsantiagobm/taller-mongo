use("tienda_ropa");

const nombres = ["Juan Pérez", "María García", "Luis Rodríguez", "Ana Martínez", "Carlos López", "Sofía Fernández", "José González", "Laura Sánchez", "Diego Ramírez", "Elena Torres", "Manuel Herrera", "Isabel Castro", "Andrés Flores", "Carmen Silva", "Pedro Ortiz", "Marta Vargas", "Ricardo Ríos", "Claudia Navarro", "Hugo Mendoza", "Silvia Jiménez", "Fernando Cordero", "Diana Romero", "Javier Ruiz", "Olga Navas", "Gabriel Rivera", "Raquel Paredes", "Adrián Valdez", "Patricia Méndez", "Francisco Vega", "Natalia Guzmán", "Roberto Escobar"];
const prendas = ["Vestido floral", "Blusa a rayas", "Jeans ajustados", "Falda plisada", "Chaqueta de cuero", "Camisa de botones", "Pantalones chinos", "Camiseta polo", "Traje de negocios", "Sudadera con capucha", "Jeans desgarrados", "Camiseta blanca básica", "Chaqueta vaquera", "Pantalones deportivos", "Abrigo de invierno", "Vestido de noche", "Chaleco", "Blusa de encaje", "Shorts de mezclilla", "Jersey de lana", "Traje de baño", "Saco elegante", "Falda larga", "Blusa sin hombros", "Pantalones cortos deportivos", "Chaqueta de bombardero", "Sudadera sin capucha", "Vestido de verano", "Blazer", "Sudadera con estampado", "Mono de trabajo", "Chaqueta de cuero sintético", "Blusa de lunares"];
const cupones = ['P01M1E', 'RJLVBA', 'YKI3MP', '1NI00R', 'NB22CF', 'R7O5I0', '8K83T6', 'KYP5UH', 'QBCTZQ', 'KU2FXV', 'XFOV0R', 'P36MRO', 'V62I9G', 'H247AF', '1D8RWZ', 'S6BLEO', 'WWT0HY', 'XE24N8', 'R8J2F8', 'LWNUYC', 'B23EQ0', 'E0KFOM', 'MMTV64', 'OJ27HB', 'OQBPJF', 'KKXQKB', 'RVBDKL', 'LO34U4', 'LDJH0G', 'SLJGV6']

const clientes = new Array(500).fill(null).map(() => {
    return {
        nombre: nombres[Math.floor(Math.random() * nombres.length)],
        edad: Math.floor(Math.random() * (80 - 18 + 1)) + 18,
        numeroPedidos: Math.floor(Math.random() * (100 - 0 + 1)) + 100,
        productosFavoritos: prendas.filter(() => Math.random() < .15),
        cuponesDescuento: cupones.filter(() => Math.random() < .15)
    }
})


// console.log(clientes);

db.getCollection("clientes").insertMany(clientes)
