use("tienda_ropa")

db.getCollection("pedidos")
    .createIndex({ "cliente": 1 })

db.getCollection("pedidos").find({ cliente: "Fernando Cordero" })



db.getCollection("pedidos")
    .createIndex({ "numeroPedido": 1, "cliente": 1 })

db.getCollection("pedidos")
.find({ cliente: "Manuel Herrera", numeroPedido: { $gte: 2000000 } })



