# Component Development Guide

## Creating New Components

### UI Components

Location: `src/components/ui/`

Example:
```tsx
interface MyComponentProps {
  children: ReactNode
  className?: string
}

export default function MyComponent({ children, className = '' }: MyComponentProps) {
  return (
    <div className={`base-classes ${className}`}>
      {children}
    </div>
  )
}
```

### Section Components

Location: `src/components/sections/`

Use Container and SectionTitle for consistency.

### Layout Components

Location: `src/components/layout/`

For Navbar, Footer, and other layout elements.

## Best Practices

- Use TypeScript interfaces
- Export as default
- Add proper prop types
- Use semantic HTML
- Follow naming conventions
