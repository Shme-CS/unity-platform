# Performance Optimization Guide

## Build Optimization

- Code splitting enabled
- Tree shaking configured
- Minification active
- Asset optimization

## Runtime Performance

- Lazy loading ready
- Image optimization
- CSS purging
- Bundle analysis

## Metrics

- First Contentful Paint: < 1.5s
- Time to Interactive: < 3s
- Bundle size: ~150KB (gzipped: ~50KB)

## Monitoring

Use Lighthouse for performance audits:
```bash
npm run build
npm run preview
# Run Lighthouse in Chrome DevTools
```
