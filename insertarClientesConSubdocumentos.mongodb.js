use('tienda_ropa');


db.getCollection("clientes").insertMany([
    {
        "nombre": "Claudia Navarro",
        "edad": 75,
        "numeroPedidos": 114,
        "productosFavoritos": ["Vestido floral", "Shorts de mezclilla", "Jersey de lana", "Traje de baño", "Mono de trabajo", "Blusa de lunares"],
        "cuponesDescuento": ["KYP5UH"],
        historialCompras: [
            {
                fechaCompra: new Date('2023-10-15'),
                productosComprados: ["Vestido floral", "Camiseta blanca"],
                totalCompra: 100.0,
            },
            {
                fechaCompra: new Date('2023-09-20'),
                productosComprados: ["Pantalones chinos", "Chaqueta de cuero"],
                totalCompra: 150.0,
            },
        ],
    },
    {
        "nombre": "Javier Ruiz",
        "edad": 35,
        "numeroPedidos": 153,
        "productosFavoritos": ["Pantalones deportivos", "Shorts de mezclilla", "Blusa sin hombros", "Pantalones cortos deportivos", "Blazer", "Mono de trabajo"],
        "cuponesDescuento": ["P01M1E"],
        historialCompras: [
            {
                fechaCompra: new Date('2023-09-15'),
                productosComprados: ["Blusa a rayas", "Traje de baño"],
                totalCompra: 260.0,
            },
            {
                fechaCompra: new Date('2023-08-20'),
                productosComprados: ["Chaqueta de cuero"],
                totalCompra: 70.0,
            },
        ],
    },
    {
        "nombre": "Isabel Castro",
        "edad": 75,
        "numeroPedidos": 139,
        "productosFavoritos": ["Chaqueta de cuero", "Sudadera sin capucha"],
        "cuponesDescuento": ["P01M1E"],
        historialCompras: [
            {
                fechaCompra: new Date('2023-06-28'),
                productosComprados: ["Mono de trabajo"],
                totalCompra: 260.0,
            },
            {
                fechaCompra: new Date('2023-04-20'),
                productosComprados: ["Sudadera sin capucha"],
                totalCompra: 70.0,
            },
        ],
      }
])
