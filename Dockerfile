FROM node:21.11.0-alpine AS base
RUN mkdir -p /opt/app
WORKDIR /opt/app
# RUN addgroup -S user && adduser -S user -G user
# RUN chown -R user:user /opt/app

# Use the image's default user
RUN chown -R node:node /opt/app
COPY package*.json ./

# BUILD TARGET
FROM base AS build
RUN npm install
COPY . ./
RUN npm run transpile

# DEVELOPMENT TARGET PROFILE
FROM base AS development
RUN npm install
COPY . ./
RUN mkdir /opt/app/node_modules/.vite \
  && chown -R node:node /opt/app/node_modules/.vite
USER node
EXPOSE 9229
CMD ["sh"]

# PRODUCTION TARGET PROFILE
FROM base AS production
ENV NODE_ENV=production
COPY --from=build /opt/app/dist /opt/app/dist
COPY package*.json ./
USER user
EXPOSE 9229
CMD ["sh"]
