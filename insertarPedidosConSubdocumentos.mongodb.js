use("tienda_ropa")

db.getCollection("pedidos").insertMany([
    {
        "numeroPedido": 1910966,
        fechaPedido: {
            "$date": "2021-01-09T10:41:08.266Z"
        },
        "productos": [
            {
                "nombre": "Falda plisada",
                "material": "Poliéster",
                "precio": 822294,
                "color": "Blanco",
                "talla": "M"
            },
            {
                "nombre": "Vestido floral",
                "material": "Poliéster",
                "precio": 560023,
                "color": "Rojo",
                "talla": "X"
            },
        ],
        "total": "$57671000",
        "cliente": "Manuel Herrera"
    },
    {
        "numeroPedido": 1910966,
        "fechaPedido": { "$date": "2021-01-09T10:41:08.266Z" },
        "productos": [
            {
                "nombre": "Falda plisada",
                "material": "Poliéster",
                "precio": 822294,
                "colores": "Blanco",
                "tallas": "M"
            },
            {
                "nombre": "Saco elegante",
                "material": "Licra",
                "precio": 1567656,
                "colores": "Negro",
                "tallas": "M"
            }
        ],
        "total": "$57671000",
        "cliente": "Manuel Herrera"
    },
    {
        "numeroPedido": 96842018,
        "fechaPedido": { "$date": "2022-01-09T10:41:08.266Z" },
        "productos": [
            {

                "nombre": "Blazer",
                "material": "Chifón",
                "precio": 931685,
                "colores": "Negro",
                "tallas": "XL"
            },
            {
                "nombre": "Blazer",
                "material": "Licra",
                "precio": 931685,
                "colores": "Negro",
                "tallas": "X"
            }
        ],
        "total": "$57671000",
        "cliente": "Manuel Herrera"
    },
])