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
        imagen: '/menuItems/pizza.jpg',
    },
    {
        nombre: 'Ensalada César',
        descripcion: 'Ensalada clásica con lechuga romana, crutones y aderezo César.',
        precio: 7.49,
        imagen: '/menuItems/caesarsalad.jpg',
    },
    {
        nombre: 'Cheeseburger',
        descripcion: 'Hamburguesa con queso cheddar, lechuga, tomate y cebolla caramelizada.',
        precio: 7.50,
        imagen: '/menuItems/burger.jpg',
    },
    {
        nombre: 'Salchipapa',
        descripcion: 'Hamburguesa con queso cheddar, lechuga, tomate y cebolla caramelizada.',
        precio: 3.00,
        imagen: '/menuItems/salchipapa.jpg',
    },

    {
        nombre: 'PapiCarne',
        descripcion: 'Hamburguesa con queso cheddar, lechuga, tomate y cebolla caramelizada.',
        precio: 3.75,
        imagen: '/menuItems/papicarne.jpg',
    },

    {
        nombre: 'HotDog',
        descripcion: 'Hamburguesa con queso cheddar, lechuga, tomate y cebolla caramelizada.',
        precio: 3.50,
        imagen: '/menuItems/hotdog.jpg',
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
