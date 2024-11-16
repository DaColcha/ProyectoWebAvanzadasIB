<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>


## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Instalación

```bash
$ pnpm install
```

## Configuración

1. Crea un archivo .env en la raíz del proyecto con las siguientes variables de entorno usando los valores de tu preferencia
```bash
PORT=3000
JWT_SECRET=llave_secreta

DB_HOST=localhost
DB_PORT=5432
DB_USER=postgres
DB_PASSWORD=postgres
DB_NAME=reservasdb
```
2. Inicializa la base de datos, para ello ejecuta el comando de docker compose
```bash
$ docker-compose up -d
```
3. Ahora inicializa la app

```bash
# watch mode
$ pnpm run start:dev

```
3. Ejecuta el endpoint SEED para iniciar los datos por defecto 
```bash
loclahost:3000/seed
```
4. Revisa la documentación de la API en el [enlace ⛓️‍💥](https://documenter.getpostman.com/view/30260028/2sAYBPmEf8)

