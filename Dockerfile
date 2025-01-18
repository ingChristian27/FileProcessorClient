# Etapa 1: Construir la aplicación
FROM node:16 AS build

# Establecer el directorio de trabajo
WORKDIR /app

# Copiar los archivos package.json y package-lock.json
COPY package*.json ./

# Instalar dependencias
RUN npm install

# Copiar todo el código fuente
COPY . .

# Construir la aplicación
RUN npm run build

# Etapa 2: Servir la aplicación
FROM nginx:alpine

# Copiar la aplicación construida al contenedor de nginx
COPY --from=build /app/build /usr/share/nginx/html

# Exponer el puerto en el que Nginx está sirviendo la aplicación
EXPOSE 80

# Iniciar Nginx
CMD ["nginx", "-g", "daemon off;"]
