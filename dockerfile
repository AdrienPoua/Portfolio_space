# Utilisez une image Node.js comme image de base
FROM node:18-alpine as build

# Définissez le répertoire de travail dans le conteneur
WORKDIR /app

# Copiez le package.json et le package-lock.json (ou yarn.lock) dans le conteneur
COPY package*.json ./

# Installez les dépendances de l'application
RUN npm install 

# Copiez le reste de l'application dans le conteneur
COPY . .

# Construisez l'application React Vite
RUN npm run build 

# Multi-stage build
FROM node:18-alpine as production

WORKDIR /app

COPY --from=build /app/dist /app/dist
EXPOSE 8080 
COPY package*.json .
COPY vite.config.js .




