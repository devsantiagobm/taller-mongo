use("tienda_ropa")



db.getCollection("ropa")
    .createIndex({ "nombre": 1 })

db.getCollection("ropa").find({ nombre: "Falda plisada" })



db.getCollection("ropa")
    .createIndex({ "material": 1, "nombre": 1 })

db.getCollection("ropa").find({ nombre: "Falda plisada",  "material": "Lana"  })