# Word Counter

An awesome word counter! Alter digga!

## Setup

- Copy `.env.example` to `.env` and adjust the values as needed. 

  > **Note:** if you wish to build for production you must also create the file
  > `.env.production`, see [here](#build-for-production) for more information.

- Make sure to install the dependencies:

  ```bash
  yarn
  ```
- Also make sure that you have `docker` and `docker-compose` set up on your system.

## Development Server

Start the development server on [`http://localhost:3000`](http://localhost:3000)

```bash
docker-compose up -d
npm dev
```

## Schema / Database

### Generate

```bash
yarn prisma generate
```

### Running Migrations

```bash
yarn prisma migrate
```

### Push Schema to Database

```bash
yarn prisma db push
```

## Build for Production

Make sure that you have set up the file `./.env.production` (it should be
exactly the same as `.env` with the exception of the db host, which should be
the name of the postgres service found in `./docker-compose.yml`.

Then build and run the application for production:

```bash
docker-compose --profile production up --build --force-recreate --no-deps -d
```

It should now be running on [`http://localhost:8080`](http://localhost:3000)
