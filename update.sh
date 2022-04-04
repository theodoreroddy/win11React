#!/bin/bash
rm package.json
rm public/env.js
git pull origin
npm run build
pm2 restart all
