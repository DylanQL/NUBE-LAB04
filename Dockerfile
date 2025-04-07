# Imagen base de Node.js
FROM node:14-alpine

# Directorio de trabajo en el contenedor
WORKDIR /app

# Copia de los archivos de package y package-lock para instalar dependencias
COPY package*.json ./
RUN npm install

# Copia el resto de la aplicación
COPY . .

# Exponer el puerto 5000 (el puerto en el que corre la app en el contenedor)
EXPOSE 5000

# Comando para iniciar la aplicación
CMD ["npm", "start"]
