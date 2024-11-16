import * as bcrypt from 'bcrypt'

export const usersSeed = [
    {
        usuario: 'jdoe',
        contrasena:bcrypt.hashSync( 'securePassword123', 10 ) ,
        nombreCompleto: 'John Doe',
        rol: 'client',
    },
    {
        usuario: 'dacolcha',
        contrasena: bcrypt.hashSync( 'alejandra123', 10 ) ,
        nombreCompleto: 'Alejandra Colcha',
        rol: 'admin',
    },
    {
        usuario: 'martin-men',
        contrasena: bcrypt.hashSync( 'martin123', 10 ) ,
        nombreCompleto: 'Martín Mendieta',
        rol: 'admin',
    },
    {
        usuario: 'darcharro',
        contrasena: bcrypt.hashSync( 'dario123', 10 ) ,
        nombreCompleto: 'Darío Charro',
        rol: 'admin',
    },
    {
        usuario: 'chriszam',
        contrasena: bcrypt.hashSync( 'christopher123', 10 ) ,
        nombreCompleto: 'Christopher Zambrano',
        rol: 'admin',
    },
];

export const menusSeed = [
    {
        nombre: 'Pizza Margarita',
        descripcion: 'Deliciosa pizza con base de tomate, mozzarella y albahaca fresca.',
        precio: 9.99,
        imagen: 'https://mandolina.co/wp-content/uploads/2023/10/pizza-margarita-1080x550-1-1200x900.jpg',
    },
    {
        nombre: 'Ensalada César',
        descripcion: 'Ensalada clásica con lechuga romana, crutones y aderezo César.',
        precio: 7.49,
        imagen: 'https://www.gourmet.cl/wp-content/uploads/2016/09/Ensalada_C%C3%A9sar-web-553x458.jpg',
    },
    {
        nombre: 'Cheeseburger',
        descripcion: 'Hamburguesa con queso cheddar, lechuga, tomate y cebolla caramelizada.',
        precio: 7.50,
        imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEJiNX0GZfl21raOShpI3p-W8CkdBITCCwAQ&s',
    },
    {
        nombre: 'Salchipapa',
        descripcion: 'Hamburguesa con queso cheddar, lechuga, tomate y cebolla caramelizada.',
        precio: 3.00,
        imagen: 'https://www.cocina-ecuatoriana.com/base/stock/Recipe/salchipapas-ecuatorianas/salchipapas-ecuatorianas_web.jpg.webp',
    },

    {
        nombre: 'PapiCarne',
        descripcion: 'Hamburguesa con queso cheddar, lechuga, tomate y cebolla caramelizada.',
        precio: 3.75,
        imagen: 'https://todoenuno.app/wp-content/uploads/2022/04/papi-carne.png',
    },

    {
        nombre: 'HotDog',
        descripcion: 'Hamburguesa con queso cheddar, lechuga, tomate y cebolla caramelizada.',
        precio: 3.50,
        imagen: 'https://www.recetasnestle.com.ec/sites/default/files/srh_recipes/06ef0c1b0a174081272824840f4f531d.jpg',
    },
];

export const mesasSeed = [
    {
        numeroPersonas: 2,
        disponible: true,
    },
    {
        numeroPersonas: 4,
        disponible: true,
    },
    {
        numeroPersonas: 6,
        disponible: true,
    },
    {
        numeroPersonas: 8,
        disponible: true,
    },
    {
        numeroPersonas: 10,
        disponible: true,
    },
    {
        numeroPersonas: 12,
        disponible: true,
    },
];
