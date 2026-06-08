#!/bin/bash
set -e

echo "=== Frontend bouwen ==="
cd frontend
npm ci
npm run build
cd ..

echo "=== Frontend kopiëren naar CMS public ==="
mkdir -p cms/public
cp -r frontend/dist/* cms/public/

echo "=== CMS bouwen ==="
cd cms
npm ci
npm run build

echo "=== Klaar ==="
