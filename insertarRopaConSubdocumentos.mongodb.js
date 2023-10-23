use("tienda_ropa")


db.getCollection("ropa").insertMany([
    {
        "nombre": "Falda plisada",
        "material": "Poliéster",
        "precio": "$822294",
        "colores": ["Blanco"],
        "tallas": ["M"],
        comentarios: [
            {
                nombreCliente: "Samuel",
                calificacion: 5,
                comentario: "¡Me encanta esta prenda! Muy cómoda y de alta calidad.",
                fecha: new Date('2023-10-15'),
            },
            {
                nombreCliente: "Juliana",
                calificacion: 4,
                comentario: "Buena relación calidad-precio. Talla un poco grande.",
                fecha: new Date('2023-09-20'),
            },
        ]
    },
    {
        "nombre": "Camisa de botones",
        "material": "Lana",
        "precio": "$1431920",
        "colores": ["Verde", "Amarillo"],
        "tallas": ["M"],
        comentarios: [
            {
                nombreCliente: "Andrés",
                calificacion: 3,
                comentario: "La prenda es bonita, pero un poco cara para lo que ofrece.",
                fecha: new Date('2023-08-10'),
            },
            {
                nombreCliente: "Santiago",
                calificacion: 5,
                comentario: "¡Increíble calidad! Muy satisfecho con mi compra.",
                fecha: new Date('2023-07-25'),
            },
        ]
    },
    {
        "nombre": "Vestido floral",
        "material": "Denim",
        "precio": "$5412455",
        "colores": ["Rojo", "Amarillo"],
        "tallas": [],
        comentarios: [
            {
                nombreCliente: "Natalia",
                calificacion: 4,
                comentario: "Talla perfecta y envío rápido. Recomendado.",
                fecha: new Date('2023-06-15'),
            },
            {
                nombreCliente: "Alejandra",
                calificacion: 2,
                comentario: "No quedé satisfecho con la calidad del material. Se desgastó rápidamente.",
                fecha: new Date('2023-05-30'),
            },

        ]
    }
])