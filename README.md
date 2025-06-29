# Clínica Fullstack - Semana 13

Este repositorio contiene el código fuente de un proyecto de ejemplo para la gestión de una clínica, desarrollado durante la semana 13 del curso Fullstack Silicon.

## ¿Qué es este proyecto?

Es una aplicación de backend que utiliza Node.js y una base de datos relacional (MySQL o compatible) para gestionar información de una clínica. Incluye scripts SQL para la creación y carga de datos de la base de datos, así como archivos de configuración para ejecutar todo el entorno usando Docker.

## Estructura del repositorio

- `src/` - Código fuente de la aplicación (JavaScript)
- `sql/` - Scripts SQL para crear y poblar la base de datos
- `Dockerfile` - Imagen Docker para la aplicación Node.js
- `docker-compose.yml` - Orquestación de servicios (app y base de datos)
- `package.json` - Dependencias y scripts de Node.js

## Requisitos previos

- [Docker](https://www.docker.com/) y [Docker Compose](https://docs.docker.com/compose/) instalados en tu sistema.

## ¿Cómo levantar el proyecto con Docker?

1. Clona este repositorio:

   ```bash
   git clone <URL_DEL_REPOSITORIO>
   cd semana13
   ```

2. Levanta los servicios con Docker Compose:

   ```bash
   docker-compose up --build
   ```

   Esto construirá la imagen de la aplicación y levantará tanto el backend como la base de datos.

3. La aplicación estará disponible en el puerto especificado en el `docker-compose.yml` (por defecto suele ser el 3000 o 8080).

4. Para detener los servicios:

   ```bash
   docker-compose down
   ```

## Dependencias principales

- Node.js (ver versión en `package.json`)
- MySQL (o MariaDB)
- Docker y Docker Compose

## Scripts útiles

- Los scripts SQL para crear y poblar la base de datos están en la carpeta `sql/`.
- Podes modificar el archivo `src/db.js` para cambiar la configuración de conexión a la base de datos si lo necesitas.

## Notas adicionales

- Si necesitas instalar dependencias manualmente (fuera de Docker), ejecutá:

  ```bash
  npm install
  ```

- Asegurate de que los puertos definidos en `docker-compose.yml` no estén en uso por otros servicios.

---