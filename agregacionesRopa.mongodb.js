use("tienda_ropa")



db.getCollection("ropa").aggregate([
    { $match: { nombre: 'Falda plisada' } },
    { $unwind: '$colores' },
    { $project: { _id: 0, 'nombre': 1, 'material': 1, "precio": 1 } },
    { $sort: { 'precio': 1 } },
    { $limit:  10}
])