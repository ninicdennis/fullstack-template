# Dockerized Full Stack Template

This is a work in progress template used by me! This includes my [Next.js Frontend Template](https://github.com/ninicdennis/next-template) but in a more portable dockerized form. I have also included a basic install of postgresql 16. This project also uses prisma, which should handle all of the migrations for you as well as include prisma studio. More to come!

## Features

-  **Next.js** - My frontend of choice, includes my linters, TS, DaisyUI and Tailwindcss!
-  **Postgresql** - The database of choice, no optimizations as of now just pure postgresql.
-  **Prisma** - Migration handling, schema builder, all kinds of fun!

## Getting Started

Create a `.env` as follows (note, all these fields are required do not leave them blank!)

```
POSTGRES_DB=mydatabase
POSTGRES_USER=myuser
POSTGRES_PASSWORD=mypassword
POSTGRES_HOST_AUTH_METHOD=trust

DATABASE_URL=postgres://myuser:mypassword@localhost:5432/mydatabase
```

Install packages with `yarn install`.

You can then run `docker-compose up` to build and run the application. The frontend is on port `3000` and the database will be on port `5432`. To run prisma studio, you can run `yarn prisma:studio`
