use("tienda_ropa")



db.getCollection("pedidos").aggregate([
    { $match: { cliente: 'Fernando Cordero' } },
    { $unwind: '$productos' },
    { $project: { _id: 0, 'cliente': 1, 'productos': 1, "numeroPedido": 1 } },
    { $sort: { 'numeroPedido': 1 } },
    { $limit:  10}
])