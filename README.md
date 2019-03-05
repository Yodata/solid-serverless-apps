# Solid Serverless Apps

This repo contains the UI and services for https://apps.dev.yodata.io

"predeploy": "npm run clean && cp -R ../hsf-reflex-ui-vue/dist ./public",
"deploy": "now -e HSF_REFLEX_JWT_SECRET=${HSF_REFLEX_JWT_SECRET}"