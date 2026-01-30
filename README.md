# Next.js Todo App

A Next.js application that fetches todos from a dummy API using environment variables.

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Environment Variables

The app uses the following environment variables (defined in `.env.local`):

- `NEXT_PUBLIC_API_URL` - The base URL for the API (default: https://jsonplaceholder.typicode.com)

## Docker

Build and run with Docker:

```bash
docker build -t nextjs-todo-app .
docker run -p 3000:3000 -e NEXT_PUBLIC_API_URL=https://jsonplaceholder.typicode.com nextjs-todo-app
```

Or use Docker Compose:

```bash
docker-compose up
```

## Features

- Fetches todos from JSONPlaceholder API
- Displays todos with completion status
- Server-side rendering with Next.js App Router
- Styled with Tailwind CSS
- Docker support with multi-stage builds
