# Installation & Setup Guide

## Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js**: Version 18.0.0 or higher
- **npm**: Version 9.0.0 or higher (comes with Node.js)
- **Git**: For version control

### Check Your Versions

```bash
node --version  # Should be v18.0.0 or higher
npm --version   # Should be 9.0.0 or higher
```

### Install Node.js

If you don't have Node.js installed:

- **Windows/Mac**: Download from [nodejs.org](https://nodejs.org/)
- **Linux**: Use your package manager
  ```bash
  # Ubuntu/Debian
  sudo apt update
  sudo apt install nodejs npm
  
  # Fedora
  sudo dnf install nodejs npm
  ```

## Installation Steps

### 1. Navigate to Project Directory

```bash
cd unity-platform
```

### 2. Install Dependencies

```bash
npm install
```

This will install all required packages:
- React 18
- TypeScript
- Vite
- Tailwind CSS
- ESLint
- And all their dependencies

**Expected output:**
```
added 200+ packages in 30s
```

### 3. Verify Installation

```bash
npm list --depth=0
```

You should see all main dependencies listed.

## Development Setup

### Start Development Server

```bash
npm run dev
```

**Expected output:**
```
VITE v5.3.1  ready in 500 ms

➜  Local:   http://localhost:5173/
➜  Network: use --host to expose
➜  press h + enter to show help
```

### Open in Browser

Navigate to: **http://localhost:5173**

You should see the CTC Club learning platform homepage.

### Development Features

- ⚡ Hot Module Replacement (HMR)
- 🔄 Instant updates on file save
- 🐛 Error overlay in browser
- 📊 Build performance metrics

## Build for Production

### Create Production Build

```bash
npm run build
```

This will:
1. Compile TypeScript
2. Bundle JavaScript
3. Optimize CSS
4. Minify all assets
5. Output to `dist/` directory

**Expected output:**
```
vite v5.3.1 building for production...
✓ 150 modules transformed.
dist/index.html                   0.50 kB │ gzip:  0.32 kB
dist/assets/index-abc123.css     15.20 kB │ gzip:  4.50 kB
dist/assets/index-xyz789.js     145.30 kB │ gzip: 48.20 kB
✓ built in 2.5s
```

### Preview Production Build

```bash
npm run preview
```

Opens production build at: **http://localhost:4173**

## Project Structure

After installation, your project structure should look like:

```
unity-platform/
├── node_modules/        # Dependencies (auto-generated)
├── dist/                # Production build (after npm run build)
├── src/
│   ├── components/
│   │   ├── layout/
│   │   ├── sections/
│   │   └── ui/
│   ├── styles/
│   ├── App.tsx
│   └── main.tsx
├── index.html
├── package.json
├── tailwind.config.js
├── vite.config.ts
└── tsconfig.json
```

## Environment Configuration

### Create Environment File (Optional)

```bash
# Create .env file
touch .env
```

Add environment variables:
```env
VITE_API_URL=https://api.example.com
VITE_APP_NAME=CTC Club
```

Access in code:
```typescript
const apiUrl = import.meta.env.VITE_API_URL
```

## IDE Setup

### VS Code (Recommended)

Install recommended extensions:

1. **ESLint** - Code linting
2. **Prettier** - Code formatting
3. **Tailwind CSS IntelliSense** - Tailwind autocomplete
4. **TypeScript Vue Plugin (Volar)** - Better TypeScript support

Create `.vscode/settings.json`:
```json
{
  "editor.formatOnSave": true,
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
  "typescript.tsdk": "node_modules/typescript/lib"
}
```

### WebStorm

1. Enable TypeScript support
2. Enable ESLint
3. Configure Tailwind CSS support

## Troubleshooting

### Common Issues

#### 1. Port Already in Use

**Error:**
```
Port 5173 is already in use
```

**Solution:**
```bash
# Option 1: Kill process on port
npx kill-port 5173

# Option 2: Use different port
npm run dev -- --port 3000
```

#### 2. Module Not Found

**Error:**
```
Cannot find module 'react'
```

**Solution:**
```bash
# Clear and reinstall
rm -rf node_modules package-lock.json
npm install
```

#### 3. TypeScript Errors

**Error:**
```
TS2307: Cannot find module '@/components/...'
```

**Solution:**
```bash
# Restart TypeScript server
# In VS Code: Ctrl+Shift+P > "TypeScript: Restart TS Server"

# Or check tsconfig.json paths configuration
```

#### 4. Tailwind Not Working

**Error:**
Styles not applying

**Solution:**
```bash
# Ensure Tailwind is properly configured
# Check tailwind.config.js content paths
# Verify @tailwind directives in src/styles/index.css
```

#### 5. Build Fails

**Error:**
```
Build failed with errors
```

**Solution:**
```bash
# Check for TypeScript errors
npx tsc --noEmit

# Fix linting issues
npm run lint -- --fix

# Clear cache
rm -rf node_modules/.vite
npm run build
```

### Getting Help

If you encounter issues:

1. Check the error message carefully
2. Search GitHub issues
3. Check Vite documentation
4. Check React documentation
5. Ask in community forums

## Performance Optimization

### Development

```bash
# Use faster package manager
npm install -g pnpm
pnpm install
pnpm dev
```

### Production

```bash
# Analyze bundle size
npm run build -- --mode analyze

# Enable compression
# Configure in vite.config.ts
```

## Next Steps

After successful installation:

1. ✅ Explore the codebase
2. ✅ Read component documentation
3. ✅ Customize colors and content
4. ✅ Add new features
5. ✅ Deploy to production

## Deployment

See deployment guides for:
- [Vercel](https://vercel.com/docs)
- [Netlify](https://docs.netlify.com/)
- [GitHub Pages](https://pages.github.com/)

---

**Installation Complete! 🎉**

You're ready to start developing!
