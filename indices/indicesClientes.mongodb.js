use("tienda_ropa")



db.getCollection("clientes")
    .createIndex({ "nombre": 1 })

db.getCollection("clientes").find({ nombre: "Isabel Castro" })



db.getCollection("clientes")
    .createIndex({ "edad": 1, "nombre": 1 })

db.getCollection("clientes").find({ nombre: "Isabel Castro",  "edad": 75  })