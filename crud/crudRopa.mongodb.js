use("tienda_ropa")


db.getCollection("ropa").find({ "comentarios.calificacion": { $lte: 3} })
db.getCollection("ropa").deleteOne({"comentarios.nombreCliente": "Andrés"})
db.getCollection("ropa")
    .updateOne({ "comentarios.nombreCliente": "Samuel" }, { $set: { "comentarios.$.calificacion": 2 } })




























