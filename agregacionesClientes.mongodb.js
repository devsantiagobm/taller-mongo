use("tienda_ropa")


db.getCollection("clientes").aggregate([
    { $match: { nombre: 'Claudia Navarro' } },
    { $unwind: '$cuponesDescuento' },
    { $project: { _id: 0, 'nombre': 1, 'cuponesDescuento': 1, "numeroPedidos": 1 } },
    { $sort: { 'numeroPedidos': 1 } },
    { $limit: 5 }
])






