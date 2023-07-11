/* global use, db */
// MongoDB Playground
// To disable this template go to Settings | MongoDB | Use Default Template For Playground.
// Make sure you are connected to enable completions and to be able to run a playground.
// Use Ctrl+Space inside a snippet or a string literal to trigger completions.
// The result of the last command run in a playground is shown on the results panel.
// By default the first 20 documents will be returned with a cursor.
// Use 'console.log()' to print to the debug output.
// For more documentation on playgrounds please refer to
// https://www.mongodb.com/docs/mongodb-vscode/playgrounds/

// Select the database to use.
use('BddAlumnos');

//--------------------------------------------------------------------------------------------------------

//ACTIVIDAD 1 -----


// Insert a few documents into the sales collection.
/*db.getCollection('Estudiantes').insertOne([
  { '_id': 1, 'Nombre': 'Estefania Padilla', 'Direccion': 'Remigio', 'Telefono': '0979363153' },
]);*/

//db.Estudiantes.find({})
//db.Estudiantes.deleteMany({})
//db.Estudiantes.drop({})
//db.drop

/*db.getCollection('Estudiantes').insertMany([
    { '_id': 2, 'Nombre': 'David Inga', 'Direccion': 'Totoracocha', 'Telefono': '0999327153' },
    { '_id': 3, 'Nombre': 'Miriam Medina', 'Direccion': 'Tarqui', 'Telefono': '0979367153' },
    { '_id': 4, 'Nombre': 'Eddy Belduma', 'Direccion': 'Remigio', 'Telefono': '0974533153' },
  ]);*/



  /*db.getCollection('Estudiantes').insertOne([
    { '_id': 2, 'Nombre': 'Raul Luna', 'Direccion': 'Remigio', 'Telefono': '0979563253' },
  ]);*/




//--------------------------------------------------------------------------------------------------------

  //ACTIVIDAD 2 -----

//db.articulos.find({})
//db.articulos.find({rubro: {$ne: "impresora"}}, {})
//db.articulos.find({rubro: "mouse"}, {})
//db.articulos.find({precio:{$gte: 5000}}, {})
//db.articulos.find({rubro: "impresora", precio:{$gte: 3500}}, {})
//db.articulos.find({stock:{$gte: 0, $lte: 4}})
//db.articulos.deleteMany({rubro: "impresora"})
//db.articulos.deleteMany({_id:{$gte: 5}})


/*db.articulos.insertMany([
    {
        _id: 1,
        nombre: 'MULTIFUNCION HP DESKJET 2675',
        rubro: 'impresora',
        precio: 3000,
        stock: 20
        },
        {
        _id: 2,
        nombre: 'MULTIFUNCION EPSON EXPRESSION XP241',
        rubro: 'impresora',
        precio: 3700,
        stock: 5
        },
        {
        _id: 3,
        nombre: 'LED 19 PHILIPS',
        rubro: 'monitor',
        precio: 4500,
        stock: 2
        },
        {
        _id: 4,
        nombre: 'LED 22 PHILIPS',
        rubro: 'monitor',
        precio: 5700,
        stock: 4
        },
        {
        _id: 5,
        nombre: 'LED 27 PHILIPS',
        rubro: 'monitor',
        precio: 12000,
        stock: 1
        },
        {
        _id: 6,
        nombre: 'LOGITECH M90',
        rubro: 'mouse',
        precio: 300,
        stock: 4
        },
])*/




//--------------------------------------------------------------------------------------------------------

  //ACTIVIDAD 3 -----
//APLICAR AND, OR O NOT 

//db.articulos.find({$and: [{stock:{$gte: 0}},{stock: {$lte: 4}}]})
//db.articulos.find({$or: [{rubro: "impresora"}, {precio:{$gte: 3500}}]})
//db.articulos.find({rubro: {$not: {$in:["mouse","impresora"]}}})