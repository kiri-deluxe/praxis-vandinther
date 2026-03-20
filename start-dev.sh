#!/bin/sh
cd /Users/christian/Documents/Claude-Code/praxis-vandinther
exec node_modules/.bin/next dev --webpack --port "${PORT:-3000}"
