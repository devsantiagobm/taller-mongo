use("tienda_ropa")

// db.getCollection("clientes")
//     .find({ "historialCompras.totalCompra": { $gte: 200 } })

// db.getCollection("clientes")
//     .deleteOne(
//         {
//             "historialCompras.productosComprados": {
//                 $elemMatch: { $eq: "Blusa a rayas" }
//             }
//         })



db.getCollection("clientes")
    .updateOne(
        {
            "historialCompras.totalCompra": { $gt: 100 }
        },
        {
            $set: {"cuponesDescuento": []}
        }
    )




































// db.getCollection("pedidos")
//     .updateOne(
//         { "productos.nombre": "Blazer" },
//         { $set: { "productos.$.precio": 20000000 } }
//     )