# Initial setup:

```
$ npm install
```

Start DB docker container:

```
$ npm run db:start
```

Setup database:

```
$ npm run db:setup
```

# To run the project:

```
$ npm run dev
```

This command starts a docker container for the database. After stopping the dev
server you can stop the database container with:

```
$ npm run db:stop
```

OR

```
$ docker-compose stop
```
