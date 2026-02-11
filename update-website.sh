#!/usr/bin/env bash
set -euo pipefail

cd "$(dirname "$0")"

echo "[deploy] syncing repo to origin/master"
git fetch origin
git reset --hard origin/master
git clean -fd

echo "[deploy] installing deps with npm@10"
if [[ -x "$HOME/.npm-global/bin/npm" ]]; then
  "$HOME/.npm-global/bin/npm" ci
  "$HOME/.npm-global/bin/npm" run build -- --configuration production
else
  npx -p npm@10 npm ci
  npx -p npm@10 npm run build -- --configuration production
fi

echo "[deploy] done"
