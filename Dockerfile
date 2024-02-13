# Utilisez l'image de base officielle de Node.js 18
FROM node:18

# Définissez le répertoire de travail dans le conteneur
WORKDIR /app

# Copiez le package.json et le package-lock.json (s'ils existent) dans le conteneur
COPY package*.json ./

# Installez les dépendances
RUN npm install

# Copiez le reste du code dans le conteneur
COPY . .

# Exposez le port 5001 pour que l'application puisse être accessible à l'extérieur du conteneur
EXPOSE 5001

# Commande pour démarrer l'application
CMD ["npm", "start"]