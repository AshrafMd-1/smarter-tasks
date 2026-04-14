# Smarter Tasks

A Kanban-based project management app built with React and TypeScript. Create projects, manage tasks across customizable columns, collaborate via comments, and track team members - all in a clean drag-and-drop interface.

**Live demo:** https://kanban.ashraf.day

---

## Features

- **Kanban board** - drag and drop tasks between columns with react-beautiful-dnd
- **Projects** - create and manage multiple projects
- **Tasks** - add tasks with descriptions, tags, and assignees
- **Comments** - comment on tasks for collaboration
- **Members** - manage team members per project
- **Dark mode** - theme toggle persisted via localStorage
- **PWA** - installable as a progressive web app

## Tech Stack

- **React 18** + **TypeScript**
- **Vite** - build tooling
- **Tailwind CSS** - styling
- **React Router v6** - client-side routing
- **React Hook Form** - form handling
- **Headless UI** + **Heroicons** - accessible UI components
- **Context API + Reducers** - global state management (no external state library)
- **react-beautiful-dnd** - drag and drop

## Running Locally

```bash
cd app
npm install
npm run dev
```

## Docker

Multi-stage build - builds the app then serves the static output with `serve`.

```bash
docker build -t smarter-tasks .
docker run -p 3001:3000 smarter-tasks
```

Or with Docker Compose:

```bash
docker compose -f production.yaml up
```

## Deployment

Hosted at [kanban.ashraf.day](https://kanban.ashraf.day) via Netlify (frontend).
