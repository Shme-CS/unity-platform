# Troubleshooting Guide

## Common Issues

### Port Already in Use

```bash
npx kill-port 5173
# or
npm run dev -- --port 3000
```

### Module Not Found

```bash
rm -rf node_modules package-lock.json
npm install
```

### TypeScript Errors

Restart TypeScript server in VS Code:
`Ctrl+Shift+P` > "TypeScript: Restart TS Server"

### Build Fails

```bash
npx tsc --noEmit
npm run lint -- --fix
```

### Tailwind Not Working

Check:
1. `tailwind.config.js` content paths
2. `@tailwind` directives in CSS
3. PostCSS configuration

## Getting Help

1. Check documentation
2. Search GitHub issues
3. Check Vite/React/Tailwind docs
