# Usar uma imagem base do Node.js
FROM node:18

# Definir o diretório de trabalho dentro do contêiner
WORKDIR /app

# Copiar o arquivo package.json e package-lock.json
COPY package*.json ./

RUN npm install -g --force yarn

# Copiar o código-fonte
COPY . .


# Instalar as dependências
RUN yarn install

RUN yarn build


# Expor a porta em que a aplicação irá rodar
EXPOSE 3000

# Comando para iniciar a aplicação
CMD [ "yarn", "start" ]
