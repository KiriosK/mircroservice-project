##Instructions

Check this [link](http://localhost:80) to see the frontend part

To allow mircroservices connect successfully

### Run waitforrabbit service

```
docker-compose run --rm waitforrabbit
```

### Docker-compose

--build flag is needed for the first time

```
docker-compose up --build server db redis top_calculator db_writer frontend
```
