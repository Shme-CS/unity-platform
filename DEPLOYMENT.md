# Deployment Guide

## Vercel Deployment

1. Install Vercel CLI:
```bash
npm i -g vercel
```

2. Deploy:
```bash
npm run build
vercel --prod
```

## Netlify Deployment

1. Install Netlify CLI:
```bash
npm i -g netlify-cli
```

2. Deploy:
```bash
npm run build
netlify deploy --prod --dir=dist
```

## GitHub Pages

1. Build:
```bash
npm run build
```

2. Deploy dist/ folder to gh-pages branch

## Docker Deployment

```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
EXPOSE 4173
CMD ["npm", "run", "preview"]
```
