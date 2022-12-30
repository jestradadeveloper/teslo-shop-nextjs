
## TESLO SHOP

First, install dependencies

```
yarn install
# or
yarn
```

Run the local server

```
yarn install
yarn dev

```

For running locally you need a database

```
docker-compose up -d
```
 -d means **__detached__**
 MongoDB local url:
```
mongodb://localhost:27017/teslodb
```

**##** **Configurar las variables de entorno**

Renombrar el archivo **__.env.template__** a **__.env__**


## Llenar la basse de datos con informacion de pruebas
Llamar:
```
https://localhost:3000/api/seed
```
