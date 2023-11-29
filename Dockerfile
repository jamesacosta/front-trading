# Utiliza una imagen base de Node.js
FROM node:18

# Instala Angular CLI globalmente
RUN npm install -g @angular/cli

# Establece el directorio de trabajo en el contenedor
WORKDIR /app

# Copia los archivos de la aplicación al contenedor
COPY . .

# Instala las dependencias
RUN npm install

# Compila la aplicación de Angular
RUN ng build --configuration=production

# Expone el puerto en el que la aplicación se ejecutará
EXPOSE 4200

# Inicia la aplicación cuando el contenedor se ejecute
#CMD ["npm", "start"]
CMD ["ng", "serve", "--host", "0.0.0.0", "--port", "4200"]