# API Integration Guide

## Setup

1. Create `.env` file:
```env
VITE_API_URL=https://api.example.com
VITE_API_KEY=your_api_key
```

2. Access in code:
```typescript
const apiUrl = import.meta.env.VITE_API_URL
```

## Example API Service

```typescript
// src/services/api.ts
const API_URL = import.meta.env.VITE_API_URL

export async function fetchCourses() {
  const response = await fetch(`${API_URL}/courses`)
  return response.json()
}
```

## State Management

Ready for:
- Redux Toolkit
- Zustand
- React Query
- SWR
