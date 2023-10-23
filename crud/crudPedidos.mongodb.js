use("tienda_ropa")

db.getCollection("pedidos").find({ "productos.nombre": { $exists: true } })
db.getCollection("pedidos").deleteOne({"productos.nombre": "Falda plisada"})


db.getCollection("pedidos")
    .updateOne(
        { "productos.nombre": "Blazer" },
        { $set: { "productos.$.precio": 20000000 } }
    )