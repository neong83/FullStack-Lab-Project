FROM node:12 as app

WORKDIR /app

#COPY package.json /app/package.json
#COPY package-lock.json /app/package-lock.json
#COPY backend/package-lock.json /app/backend/package-lock.json
#COPY frontend/package-lock.json /app/frontend/package-lock.json
#
#RUN cd /app/backend \
#    && npm install \
#    && cd /app/frontend \
#    && npm install
#
#
#FROM base as app
COPY . /app/
EXPOSE 8080 3030
