# Full stack FastAPI & NextJS ToDo app



## Tech Stack
- **FastAPI** for backend API
    - SQLalchemy as ORM
    - PostgreSQL as the SQL database server
    - Pydantic for data validation and settings management
    - ruff for linting and formatting
    - poetry for dependency management
- **Next JS** as a framework for the frontend
    - Typescript for type safety
    - Tailwind for styling components
    - ShadCN for building components
- **Docker** with Docker Compose for containerization


## Building and running the app in docker compose
```bash
docker-compose up --build -d
```
## Run backend
```bash
cd backend
```
### Install [poetry](https://python-poetry.org/docs/#installation)
### Install backend dependencies
```bash
poetry install
```

## Run a [Postgres](https://www.postgresql.org/) Database server

## Start the API server
```bash
poetry run uvicorn main:app
```

# Run frontend
```bash
cd frontend
```
## Install dependencies
```bash
npm install
```
## Run development server
```bash
npm run dev
```
## Build and run production server
```bash
npm run build
npm start
```
